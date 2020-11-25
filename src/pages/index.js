import React, { useEffect } from "react"
import sal from "sal.js"

import { Head } from "../components/Head"
import { Shimmer } from "../components/Shimmer"
import { Header } from "../components/Header"
import { Hero } from "../components/Hero"
import { Features } from "../components/Features"
import { SkyweaverCallout } from "../components/SkyweaverCallout"
import { ContactForm } from "../components/ContactForm"
import { Footer } from "../components/Footer"

import "sal.js/dist/sal.css"
import "../styles/index.js"

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

      <Features />

      <SkyweaverCallout />

      <ContactForm />

      <Footer />
    </div>
  )
}
