import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { debounce } from 'lodash';

const Header = ({ siteTitle }) => {
    const [open, setOpen] = useState(false);
    const [backgroundClass, setBackgroundClass] = useState(null);

    const toggleMenu = () => {
        setOpen(!open);
    }

    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', debounce(() => {
            let supportPageOffset = window.pageXOffset !== undefined;
            let isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
            let scroll = {
                x: supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft,
                y: supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
            };
    
            if (scroll.y > 0 && window.innerWidth > 960) {
                setBackgroundClass('has-background-red');
            } else {
                setBackgroundClass(null);
            }
        }, 50));
    }

    return (
        <nav className={`${ backgroundClass ? backgroundClass + ' ' : '' }navbar is-transparent is-fixed-top`} role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    <div className="is-flex">
                        <span className="icon is-large">
                            <i className="fas fa-2x fa-brain"></i>
                        </span>
                        <h2 className="is-size-3">TJB</h2>
                    </div>
                    <div className="navbar-burger burger" onClick={toggleMenu} aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </div>
                </div>

                <div className={`${ open ? 'is-active ' : '' }navbar-menu`}>
                    <div className="navbar-end">
                        <Link to="/" className="navbar-item">
                            Home
                        </Link>

                        <Link to="/about" className="navbar-item">
                            About
                        </Link>
                        <a className="navbar-item" href="https://www.linkedin.com/in/timothybennett2/" target="_blank" rel="noopener noreferrer">
                            <span class="icon is-medium">
                                <i class="fab fa-lg fa-linkedin"></i>
                            </span>
                        </a>
                        <a className="navbar-item" href="https://twitter.com/iCopes" target="_blank" rel="noopener noreferrer">
                            <span class="icon is-medium">
                                <i class="fab fa-lg fa-twitter-square"></i>
                            </span>
                        </a>
                        <a className="navbar-item" href="mailto:bennett.timothy.j@gmail.com" target="_blank" rel="noopener noreferrer">
                            <span class="icon is-medium">
                                <i class="fas fa-lg fa-envelope-square"></i>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
