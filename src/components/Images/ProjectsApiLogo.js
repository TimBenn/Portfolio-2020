import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const ProjectsApiLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      mobileImage: file(relativePath: { eq: "projects-logo-mobile.png" }) {
        childImageSharp {
          fixed(width: 200, height: 36) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      desktopImage: file(relativePath: { eq: "projects-api-logo.png" }) {
        childImageSharp {
          fixed(width: 317, height: 58) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const sources = [
    data.mobileImage.childImageSharp.fixed,
    {
      ...data.desktopImage.childImageSharp.fixed,
      media: `(min-width: 1200px)`,
    },
  ]

  return <Img fixed={sources} />
}

export default ProjectsApiLogo
