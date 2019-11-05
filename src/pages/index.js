import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <section className="hero is-dark is-fullheight-with-navbar">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title is-1">
                        Timothy Bennett
                    </h1>
                    <h2 className="subtitle">
                        Full Stack Developer
                    </h2>
                </div>
            </div>
        </section>
        <div className="section is-medium">
            <div className="container">
                <h2 className="title is-2">Some bits and pieces...</h2>
                <h3 className="subtitle">My current knowledge (someone told me they hate the progress bars)</h3>
                <div className="tile is-ancestor">
                    <div className="tile is-vertical is-12">
                        <div className="tile">
                            <div className="tile is-parent is-vertical">
                                <article className="tile is-child notification has-text-centered is-dark">
                                    <span className="icon is-large">
                                        <i className="fab fa-3x fa-html5"></i>
                                    </span>
                                    <p className="title">HTML5</p>
                                    <div className="content has-text-left">
                                        <ul>
                                            <li>Strong understanding</li>
                                            <li>3 years experience</li>
                                        </ul>
                                    </div>
                                </article>
                                <article className="tile is-child notification has-text-centered is-dark">
                                    <span className="icon is-large">
                                        <i className="fab fa-3x fa-css3-alt"></i>
                                    </span>
                                    <p className="title">CSS3</p>
                                    <div className="content has-text-left">
                                        <ul>
                                            <li>Strong understanding</li>
                                            <li>3 years experience</li>
                                        </ul>
                                    </div>
                                </article>
                                <article className="tile is-child notification has-text-centered is-dark">
                                    <span className="icon is-large">
                                        <i className="fab fa-3x fa-react"></i>
                                    </span>
                                    <p className="title">React</p>
                                    <div className="content has-text-left">
                                        <ul>
                                            <li>New to the syntax</li>
                                            <li>0.5 years experience</li>
                                        </ul>
                                    </div>
                                </article>
                            </div>
                            <div className="tile is-parent is-vertical">
                                <article className="tile is-child notification has-text-centered is-dark">
                                    <span className="icon is-large">
                                        <i className="fab fa-3x fa-js"></i>
                                    </span>
                                    <p className="title">JavaScript</p>
                                    <div className="content has-text-left">
                                        <ul>
                                            <li>Strong understanding</li>
                                            <li>3 years experience</li>
                                        </ul>
                                    </div>
                                </article>
                                <article className="tile is-child notification has-text-centered is-dark">
                                    <span className="icon is-large">
                                        <i className="fab fa-3x fa-git-alt"></i>
                                    </span>
                                    <p className="title">GIT</p>
                                    <div className="content has-text-left">
                                        <ul>
                                            <li>Strong understanding</li>
                                            <li>3 years experience</li>
                                        </ul>
                                    </div>
                                </article>
                                <article className="tile is-child notification has-text-centered is-dark">
                                    <span className="icon is-large">
                                        <i className="fab fa-3x fa-vuejs"></i>
                                    </span>
                                    <p className="title">VueJS</p>
                                    <div className="content has-text-left">
                                        <ul>
                                            <li>Strong understanding</li>
                                            <li>2 years experience</li>
                                        </ul>
                                    </div>
                                </article>
                            </div>
                            <div className="tile is-parent is-vertical">
                                <article className="tile is-child notification has-text-centered is-dark">
                                    <span className="icon is-large">
                                        <i className="fab fa-3x fa-node-js"></i>
                                    </span>
                                    <p className="title">NodeJS</p>
                                    <div className="content has-text-left">
                                        <ul>
                                            <li>Decent understanding</li>
                                            <li>3 years experience</li>
                                        </ul>
                                    </div>
                                </article>
                                <article className="tile is-child notification has-text-centered is-dark">
                                    <span className="icon is-large">
                                        <i className="fab fa-3x fa-google"></i>
                                    </span>
                                    <p className="title">Google Analytics</p>
                                    <div className="content has-text-left">
                                        <ul>
                                            <li>Decent understanding</li>
                                            <li>3 years experience</li>
                                        </ul>
                                    </div>
                                </article>
                                <article className="tile is-child notification has-text-centered is-dark">
                                    <span className="is-size-3 has-text-weight-bold">C#</span>
                                    <p className="title">CSHARP</p>
                                    <div className="content has-text-left">
                                        <ul>
                                            <li>Decent understanding</li>
                                            <li>2 years experience</li>
                                        </ul>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage
