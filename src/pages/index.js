import React, { useEffect } from "react"
import sal from "sal.js"

import { Head } from "../components/Head"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { MailingList } from "../components/MailingList"
import { Hero } from "../components/Hero"
import { Features } from "../components/Features"
import { SkyweaverCallout } from "../components/SkyweaverCallout"
import { ContactForm } from "../components/ContactForm"
import { Shimmer } from "../components/Shimmer"
import "sal.js/dist/sal.css"
import "../index.css"

export default function Home() {
  useEffect(() => {
    sal()
  }, [])

  return (
    <div style={{ overflowX: "hidden" }}>
      <Head />

      {/* <Shimmer /> */}

      <Header />

      <Hero />

      <MailingList />

      <Features />

      <SkyweaverCallout />

      <ContactForm />

      <Footer />
    </div>
  )
}
