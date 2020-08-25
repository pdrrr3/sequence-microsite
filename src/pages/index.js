import React from "react"
import { Helmet } from "react-helmet"
import "./index.css"
import { SkyweaverCallout } from "../components/SkyweaverCallout"
import { Button } from "../components/Button"
import { Hero } from "../components/Hero"
import { ContactForm } from "../components/ContactForm"
import { Content } from "../components/Content"
import { Header } from "../components/Header"
import { FeaturesOne } from "../components/FeaturesOne"
import { FeaturesTwo } from "../components/FeaturesTwo"

export default function Home() {
  return (
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sequence</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <Header />
      <Hero />

      <Content heading="Friendly for your users Easy for you">
        A fast and simple item creation tool. A friendly smart wallet for users
        to securely store and manage their items. Invisible fees and high
        transaction throughput. All making it easy for your users to buy, sell
        and trade with one another.
      </Content>

      <FeaturesOne />

      <div>
        <h1>Ready to Sequence your product?</h1>
        <Button>Contact Us</Button>
      </div>

      <SkyweaverCallout />
      <FeaturesTwo />

      <Content heading="Friendly for your users Easy for you">
        A fast and simple item creation tool. A friendly smart wallet for users
        to securely store and manage their items. Invisible fees and high
        transaction throughput. All making it easy for your users to buy, sell
        and trade with one another.
      </Content>

      <ContactForm />
    </div>
  )
}
