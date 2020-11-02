import React, { useEffect } from "react"
import sal from "sal.js"

import { Head } from "../components/Head"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Hero } from "../components/Hero"
import { Features } from "../components/Features"
import { SkyweaverCallout } from "../components/SkyweaverCallout"
import { ContactForm } from "../components/ContactForm"
import "sal.js/dist/sal.css"
import "../index.css"

// TODO: Add video shimmer
// TODO: Test mobile layout

export default function Home() {
  useEffect(() => {
    sal()
  }, [])

  return (
    <div style={{ overflowX: "hidden" }}>
      <Head />

      <Header />

      <Hero />

      <Features />

      <SkyweaverCallout />

      <ContactForm />

      <Footer />
    </div>
  )
}
