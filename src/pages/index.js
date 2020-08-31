import React from "react"
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

import "../index.css"

export default function Home() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Head />

      <Shimmer />

      <Header />

      <Hero />

      <MailingList />

      <FeaturesOne />

      <SkyweaverCallout />

      <FeaturesTwo />

      <ContactForm />

      <Footer />
    </div>
  )
}
