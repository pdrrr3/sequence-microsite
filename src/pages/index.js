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

export default function Home({ location }) {
  const code = new URLSearchParams(location.search).get("code")

  useEffect(() => {
    sal()
  }, [])

  // if (code !== "iZJDEdNzcQ84MNkmVV") return null

  return (
    <div style={{ overflowX: "hidden" }}>
      <Head />

      <Shimmer offset="-30%" />

      <Header />

      <Hero />

      <Features />

      <Shimmer offset="-60%" />

      <SkyweaverCallout />

      <ContactForm />

      <Shimmer height="60vw" offset="-75%" />

      <Footer />
    </div>
  )
}
