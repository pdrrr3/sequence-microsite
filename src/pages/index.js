import React, { useEffect } from "react"
import sal from "sal.js"

import { Head } from "../components/Head"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { MailingList } from "../components/MailingList"

import { Hero } from "../sections/Hero"
import { FeaturesOne } from "../sections/FeaturesOne"
import { SkyweaverCallout } from "../sections/SkyweaverCallout"
import { FeaturesTwo } from "../sections/FeaturesTwo"
import { ContactForm } from "../sections/ContactForm"
import { Shimmer } from "../components/Shimmer"
import { fadeProps } from "../constants"

import "sal.js/dist/sal.css"
import "../index.css"

export default function Home() {
  useEffect(() => {
    sal()
  }, [])

  return (
    <div style={{ overflowX: "hidden" }}>
      <Head />

      <Shimmer />

      <Header />

      <Hero />

      <div {...fadeProps}>
        <MailingList />
      </div>

      <FeaturesOne />

      <SkyweaverCallout />

      <FeaturesTwo />

      <ContactForm />

      <Footer />
    </div>
  )
}
