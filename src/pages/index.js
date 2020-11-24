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
import shimmer from "../assets/shimmer.mp4"

export default function Home() {
  useEffect(() => {
    sal()
  }, [])

  return (
    <div style={{ overflowX: "hidden" }}>
      <Head />

      <video
        autoPlay
        muted
        loop
        className="flex-1"
        style={{
          position: "absolute",
          zIndex: -1,
          opacity: 0.5,
          width: "100vw",
        }}
      >
        <source src={shimmer} />
      </video>

      <Header />

      <Hero />

      <Features />

      <SkyweaverCallout />

      <ContactForm />

      <Footer />
    </div>
  )
}
