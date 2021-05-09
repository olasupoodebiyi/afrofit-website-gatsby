import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "../components/Header.css"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="Container">
      <div className="HeaderBar">
        <Link to="/" className="Logo">
          <StaticImage
            src="../images/afrofit_logo.png"
            width={200}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="The Afrofit Logo"
            style={{ marginBottom: `1.45rem` }}
          />
          {/* <img
            // src={require("../images/afrofit_logo.png")}
            // src="./../images/afrofit_logo.png"
            alt="Logo  for Afrofit App Website"
          /> */}
        </Link>
        <button className="HeaderButton">Contact Us</button>
      </div>
      <main className="Body">
        <div className="Left">
          <div className="SocialIconContainer">
            <Link to="/">
              <StaticImage
                src="../images/icon_facebook.png"
                quality={100}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Social Icon Logo"
                className="SocialIcon"
              />
            </Link>
            <Link to="/">
              <StaticImage
                src="../images/icon_instagram.png"
                quality={100}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Social Icon Logo"
                className="SocialIcon"
              />
            </Link>
            <Link to="/">
              <StaticImage
                src="../images/icon_twitter.png"
                quality={100}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Social Icon Logo"
                className="SocialIcon"
              />
            </Link>
            <Link to="/">
              <StaticImage
                src="../images/icon_tiktok.png"
                quality={100}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Social Icon Logo"
                className="SocialIcon"
              />
            </Link>
          </div>
        </div>
        <div className="Center">
          <StaticImage
            src="../images/bolt.png"
            width={100}
            quality={100}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Bolt Logo"
            className="Bolt"
          />
          <div className="TextContainer">
            <h1>Workouts don't have to be tough and grueling!</h1>
            <p>
              Get your fitness by dancing and enjoying electic, energetic DJ
              mixes
            </p>
          </div>
          <div className="StoreLinkContainer">
            <Link to="/">
              <StaticImage
                src="../images/google.png"
                quality={100}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="App Store Link"
                className="StoreLink"
              />
            </Link>
            <Link to="/">
              <StaticImage
                src="../images/apple.png"
                quality={100}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="App Store Link"
                className="StoreLink"
              />
            </Link>
          </div>
        </div>
        <div className="Right">
          <StaticImage
            src="../images/phone_mock.png"
            width={400}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="A phone mockup of the app"
            style={{ marginBottom: `1.45rem` }}
            className="Mockup"
          />
        </div>
      </main>
    </div>
  </Layout>
)

export default IndexPage
