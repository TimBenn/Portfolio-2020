import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
    <Layout>
        <SEO title="About" />
        <section className="hero is-dark is-fullheight-with-navbar">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title is-1">
                        About Me
                    </h1>
                    <h2 className="subtitle">
                        Developer, Husband, Father, Jedi, Veteran
                    </h2>
                </div>
            </div>
        </section>
        <div className="section is-medium">
            <div className="container">
                <p className="is-size-5">My name is Timothy Bennett, but you can call me TJ. I am a full-stack developer based in Dallas, Texas. I have been in the field for three years and counting and love every minute of it. Prior to being a full-stack developer, I was enlisted in the U.S. Army as an infantryman. I completed the web developer course at DevMountain in late 2016. Shortly after, I began working at a marketing company developing client websites. This same marketing company then started to develop a CRM application where I was asked to join and re-work the front-end to a VueJS application. During this time, I also accomplished to finish an Associate Degree in Business. Currently, I am working on an Associate Degree in Computer Science.</p>
            </div>
        </div>
    </Layout>
)

export default IndexPage
