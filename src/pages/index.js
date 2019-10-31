import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <section class="hero is-dark is-large">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title is-1">
                        My name is Timothy
                    </h1>
                    <h2 class="subtitle">
                        I am a full stack developer
                    </h2>
                </div>
            </div>
        </section>
        <div className="section is-medium">
            <div className="container">
            </div>
        </div>
        <div className="section is-medium">
            <div className="container">
                <h2 class="title is-2">Some bits and pieces...</h2>
                <div class="tile is-ancestor">
                    <div class="tile is-vertical is-8">
                        <div class="tile">
                            <div class="tile is-parent is-vertical">
                                <article class="tile is-child notification is-dark">
                                    <p class="title">Vertical...</p>
                                    <p class="subtitle">Top tile</p>
                                </article>
                                <article class="tile is-child notification is-dark">
                                    <p class="title">...tiles</p>
                                    <p class="subtitle">Bottom tile</p>
                                </article>
                            </div>
                            <div class="tile is-parent">
                                <article class="tile is-child notification is-dark">
                                    <p class="title">Middle tile</p>
                                    <p class="subtitle">With an image</p>
                                    <figure class="image is-4by3">
                                        <img src="https://bulma.io/images/placeholders/640x480.png" />
                                    </figure>
                                </article>
                            </div>
                        </div>
                        <div class="tile is-parent">
                        <article class="tile is-child notification is-dark">
                            <p class="title">Wide tile</p>
                            <p class="subtitle">Aligned with the right tile</p>
                            <div class="content">
                            </div>
                        </article>
                        </div>
                    </div>
                    <div class="tile is-parent">
                        <article class="tile is-child notification is-dark">
                            <div class="content">
                                <p class="title">Tall tile</p>
                                <p class="subtitle">With even more content</p>
                                <div class="content">
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage
