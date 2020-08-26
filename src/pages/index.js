import React from "react"
import "./index.css"
import { Head } from "../components/Head"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Hero } from "../components/Hero"
import { MailingList } from "../components/MailingList"
import { FeaturesOne } from "../components/FeaturesOne"
import { SkyweaverCallout } from "../components/SkyweaverCallout"
import { FeaturesTwo } from "../components/FeaturesTwo"
import { ContactForm } from "../components/ContactForm"

export default function Home() {
  return (
    <div>
      <div className="container">
        <Head />

        <Header />

        <Hero />

        {/* <MailingList /> */}

        <FeaturesOne />
      </div>

      <SkyweaverCallout />

      <div className="container">
        <FeaturesTwo />

        <ContactForm />

        <Footer />
      </div>
    </div>
  )
}
