import React from "react"
import GatsbyLogo from "./Images/GatsbyLogo"
import MadeWithBulma from "./Images/MadeWithBulma"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="card">
          <div className="card-content">
            <h2 className="title is-size-2 is-size-3-mobile">
              Interested In Collaborating?
            </h2>
            <a
              href="mailto:bennett.timothy.j@gmail.com"
              className="button is-size-4 has-button-gradient"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div class="columns has-text-white">
          <div class="column has-text-centered">
            <div>
              <h4 className="is-size-1 has-text-white mb-0">TJB</h4>
            </div>
            <div className="is-flex is-justify-content-center mb-3">
              <a
                className="navbar-item"
                href="https://www.linkedin.com/in/timothybennett2/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="icon is-medium">
                  <i class="fab fa-lg fa-linkedin-in"></i>
                </span>
              </a>
              <a
                className="navbar-item"
                href="https://twitter.com/iCopes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="icon is-medium">
                  <i class="fab fa-lg fa-twitter"></i>
                </span>
              </a>
              <a
                className="navbar-item"
                href="mailto:bennett.timothy.j@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="icon is-medium">
                  <i class="fas fa-lg fa-envelope"></i>
                </span>
              </a>
            </div>
            <div className="mb-3 is-flex is-justify-content-center is-align-items-center">
              <span className="has-text-white is-size-4">Built With</span>
              <span class="tag is-red icon is-medium ml-1">
                <i class="fas fa-lg fa-heart"></i>
              </span>
              <span className="has-text-white is-size-4 ml-1">,</span>
              <span class="tag is-light-blue icon is-medium ml-1">
                <i class="fab fa-lg fa-react"></i>
              </span>
              <span className="has-text-white is-size-4 ml-1">&</span>
              <span class="tag is-light-blue icon is-medium ml-1 px-0">
                <GatsbyLogo />
              </span>
            </div>
            <div>
              <a
                href="https://bulma.io"
                rel="noopener noreferrer"
                target="_blank"
              >
                <MadeWithBulma />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
