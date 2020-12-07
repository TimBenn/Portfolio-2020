import React from "react"
import BeardedMan from "../components/Images/BeardedMan"
import Card from "../components/Card"
import HoneyCRMLogo from "../components/Images/HoneyCRMLogo"
import KanbanLogo from "../components/Images/KanbanLogo"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SkiptownLogo from "../components/Images/SkiptownLogo"
import TridigitalLogo from "../components/Images/TridigitalLogo"
import ProjectsApiLogo from "../components/Images/ProjectsApiLogo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <section className="hero has-red-gradient is-fullheight-with-navbar is">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div class="column">
                <h1 className="title is-1 is-size-3-mobile has-text-light">
                  Full-Stack Developer, Junior Ultimate Coder & Veteran
                </h1>
                <a
                  href="mailto:bennett.timothy.j@gmail.com"
                  className="button is-size-4 has-button-gradient"
                >
                  Contact Me
                </a>
              </div>
              <div class="column is-flex" style={{ justifyContent: "center" }}>
                <BeardedMan
                  className="is-hidden-mobile"
                  data-sal="slide-left"
                  data-sal-delay="300"
                  data-sal-duration="300"
                  data-sal-easing="ease"
                  style={{ width: "50%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section about is-medium has-background-white">
        <div className="container">
          <h2 className="title is-size-2 is-size-3-mobile has-text-centered">
            HI, My name is Timothy Bennett, but you can call me TJ.
          </h2>
          <p className="description is-size-4 is-size-5-mobile">
            After being honorably discharged from The U.S. Army, I began and
            completed the Web Development Immersive course at DevMountain. Since
            completing the course, I have collaborated with some great companies
            and built some amazing sites and applications. I am confident in the
            skills I have gained and excited to learn and grow as a developer.
          </p>
        </div>
      </div>
      <div className="section skills is-medium has-background-purple">
        <div className="container">
          <div className="columns">
            <div className="column">
              <div
                data-sal="slide-up"
                data-sal-delay="300"
                data-sal-duration="300"
                data-sal-easing="ease"
                className="card"
              >
                <div className="card-content">
                  <h2 className="title is-3 is-size-4-mobile has-text-centered">
                    The programming Languages I write errors in:
                  </h2>
                  <div class="tags are-large">
                    <span className="tag is-green">JavaScript</span>
                    <span className="tag is-green">HTML</span>
                    <span className="tag is-green">CSS</span>
                    <span className="tag is-green">C#</span>
                    <span className="tag is-green">SQL</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div
                data-sal="slide-up"
                data-sal-delay="450"
                data-sal-duration="300"
                data-sal-easing="ease"
                className="card"
              >
                <div className="card-content">
                  <h2 className="title is-3 is-size-4-mobile has-text-centered">
                    The libraries that make my errors look good:
                  </h2>
                  <div class="tags are-medium">
                    <span className="tag is-green mr-2 mb-2">React.js</span>
                    <span className="tag is-green mr-2 mb-2">React Native</span>
                    <span className="tag is-green mr-2 mb-2">Gatsby.js</span>
                    <span className="tag is-green mr-2 mb-2">Vue.js</span>
                    <span className="tag is-green mr-2 mb-2">Node.js</span>
                    <span className="tag is-green mr-2 mb-2">Express</span>
                    <span className="tag is-green mr-2 mb-2">MongoDB</span>
                    <span className="tag is-green mr-2 mb-2">Mongoose</span>
                    <span className="tag is-green mr-2 mb-2">OData</span>
                    <span className="tag is-green mr-2 mb-2">Bootstrap</span>
                    <span className="tag is-green mr-2 mb-2">jQuery</span>
                    <span className="tag is-green mr-2 mb-2">Animate.css</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div
                data-sal="slide-up"
                data-sal-delay="600"
                data-sal-duration="300"
                data-sal-easing="ease"
                className="card"
              >
                <div className="card-content">
                  <h2 className="title is-3 is-size-4-mobile has-text-centered">
                    The tools I use to create the errors:
                  </h2>
                  <div class="tags are-medium">
                    <span className="tag is-green mr-2 mb-2">Jira</span>
                    <span className="tag is-green mr-2 mb-2">Asana</span>
                    <span className="tag is-green mr-2 mb-2">Monday</span>
                    <span className="tag is-green mr-2 mb-2">Bulma</span>
                    <span className="tag is-green mr-2 mb-2">AdobeXD</span>
                    <span className="tag is-green mr-2 mb-2">Photoshop</span>
                    <span className="tag is-green mr-2 mb-2">Figma</span>
                    <span className="tag is-green mr-2 mb-2">Git</span>
                    <span className="tag is-green mr-2 mb-2">GitHub</span>
                    <span className="tag is-green mr-2 mb-2">
                      Visual Studio
                    </span>
                    <span className="tag is-green mr-2 mb-2">
                      Visual Studio Code
                    </span>
                    <span className="tag is-green mr-2 mb-2">SSMS</span>
                    <span className="tag is-green mr-2 mb-2">WordPress</span>
                    <span className="tag is-green mr-2 mb-2">
                      SEO Optimization
                    </span>
                    <span className="tag is-green mr-2 mb-2">Google Suite</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section collaborations is-medium">
        <div className="container">
          <h2 className="title is-2">Places I've Worked</h2>
          <div className="columns is-flex-wrap-wrap is-mobile">
            <div className="column is-full-mobile is-full-tablet is-one-half-desktop is-one-third-widescreen is-one-third-fullhd">
              <Card
                animation="slide-up"
                delay="300"
                duration="300"
                className="card"
                style={{
                  background:
                    "transparent linear-gradient(125deg, #FE7E01 0%, #FF017D 100%) 0% 0% no-repeat padding-box",
                }}
              >
                <TridigitalLogo />
              </Card>
            </div>
            <div className="column is-full-mobile is-full-tablet is-one-half-desktop is-one-third-widescreen is-one-third-fullhd">
              <Card
                animation="slide-up"
                delay="450"
                duration="300"
                className="card"
                style={{
                  background:
                    "transparent linear-gradient(125deg, #5F38BE 0%, #7C6BE4 100%) 0% 0% no-repeat padding-box",
                }}
              >
                <SkiptownLogo />
              </Card>
            </div>
            <div className="column is-full-mobile is-full-tablet is-full-desktop is-one-third-widescreen is-one-third-fullhd">
              <Card
                animation="slide-up"
                delay="600"
                duration="300"
                className="card"
                style={{
                  background:
                    "transparent linear-gradient(126deg, #F8D222 0%, #EB800A 100%) 0% 0% no-repeat padding-box",
                }}
              >
                <HoneyCRMLogo />
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className="section projects is-medium">
        <div className="container">
          <h2 className="title is-2 has-text-white">Projects</h2>
          <div className="columns is-flex-wrap-wrap is-mobile">
            <div className="column is-full-mobile is-full-tablet is-half-desktop is-half-widescreen is-half-fullhd">
              <Card
                hideShadow
                animation="slide-up"
                delay="300"
                duration="300"
                style={{
                  background: "#FE7E01",
                }}
                link="https://github.com/TimBenn/personal-kanban"
              >
                <KanbanLogo />
              </Card>
            </div>
            <div className="column is-full-mobile is-full-tablet is-half-desktop is-half-widescreen is-half-fullhd">
              <Card
                hideShadow
                animation="slide-up"
                delay="450"
                duration="300"
                style={{
                  background: "#5F38BE",
                }}
              >
                <ProjectsApiLogo />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
