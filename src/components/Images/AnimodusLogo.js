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

const AnimodusLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      mobileImage: file(
        relativePath: { eq: "mobile/animodus-logo-mobile.png" }
      ) {
        childImageSharp {
          fixed(width: 100, height: 116) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      desktopImage: file(relativePath: { eq: "animodus-logo.png" }) {
        childImageSharp {
          fixed(width: 160, height: 187) {
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

export default AnimodusLogo