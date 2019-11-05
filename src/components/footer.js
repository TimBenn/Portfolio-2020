import { Link } from 'gatsby';
import React from 'react';

const Footer = () => {
    return (
        <footer className="footer has-background-grey-darker">
            <div className="container">
                <div class="columns">
                    <div class="column has-text-white">
                        <h3 class="is-size-3">Sitemap</h3>
                        <div class="content">
                            <ul>
                                <li class="is-size-6"><Link to="/">Home</Link></li>
                                <li class="is-size-6"><Link to="/about">About</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="column has-text-red">
                        <h3 class="is-size-3">Contact</h3>
                        <div class="content is-flex">
                            <a href="https://www.linkedin.com/in/timothybennett2/" target="_blank" rel="noopener noreferrer">
                                <span class="icon is-medium">
                                    <i class="fab fa-lg fa-linkedin"></i>
                                </span>
                            </a>
                            <a href="https://twitter.com/iCopes" target="_blank" rel="noopener noreferrer">
                                <span class="icon is-medium">
                                    <i class="fab fa-lg fa-twitter-square"></i>
                                </span>
                            </a>
                            <a href="mailto:bennett.timothy.j@gmail.com" target="_blank" rel="noopener noreferrer">
                                <span class="icon is-medium">
                                    <i class="fas fa-lg fa-envelope-square"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
