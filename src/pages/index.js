import React, { useState, useEffect } from "react"
import sal from "sal.js"
import { Head } from "../components/sections/Head"
import { Header } from "../components/sections/Header"
import { SkyweaverCallout } from "../components/sections/SkyweaverCallout"
import { ContactForm } from "../components/sections/ContactForm"
import { Footer } from "../components/sections/Footer"
import { SupportedNetworks } from "../components/sections/SupportedNetworks"
import { DesignedFor } from "../components/sections/DesignedFor"
import { FeatureCarousel } from "../components/sections/FeatureCarousel"
import { IntegrationLayers } from "../components/sections/IntegrationLayers"
import { Blockchain } from "../components/sections/Blockchain"
import { Hero } from "../components/sections/Hero"
import { Features } from "../components/sections/Features"
import { Shimmer } from "../components/Shimmer"
import { MailingListSection } from "../components/MailingList"
import { CallToAction } from "../components/CallToAction"
import { INTEGRATION_CODE } from "../constants"

import "pure-react-carousel/dist/react-carousel.es.css"
import "sal.js/dist/sal.css"
import "../styles/index.js"

export default function Home({ location }) {
  const [showCode, setShowCode] = useState(true)

  const clickCopyCode = () => {
    setShowCode(false)
    setTimeout(() => setShowCode(true), 2000)
    navigator.clipboard.writeText(INTEGRATION_CODE)
  }

  useEffect(() => {
    sal()
  }, [])

  // const code = new URLSearchParams(location.search).get("code")
  // if (code !== "iZJDEdNzcQ84MNkmVV") return null

  return (
    <div style={{ overflowX: "hidden" }}>
      <Head />

      <Shimmer offset="0%" />

      <Header className="max-w-6xl mt-5 px-5 sm:mt-7" />

      <Hero className="max-w-6xl px-4 pt-7 pb-5 mb-10 sm:pb-10 sm:mt-9 sm:pt-10" />

      <Blockchain className="max-w-8xl px-4 pb-7" />

      <IntegrationLayers className="max-w-6xl pt-6 pb-10 sm:pb-5 lg:px-5" />

      <MailingListSection className="max-w-7xl mx-6 mt-5 py-10 mb-10 md:mt-0 xl:mx-auto" />

      <FeatureCarousel
        className="max-w-6xl pt-9 mb-10"
        showCode={showCode}
        clickCopyCode={clickCopyCode}
      />

      <DesignedFor className="max-w-4xl mt-10 mb-10 sm:px-4" />

      <Features className="max-w-8xl mb-10 pb-10 md:px-2" />

      <SupportedNetworks className="my-10 pt-10 mb-10" />

      <CallToAction className="max-w-2xl my-10 pt-10 mb-10" />

      <Shimmer offset="-60%" />

      <SkyweaverCallout className="max-w-6xl mx-4 lg:mx-auto px-4 py-10 mx-2 mb-10" />

      <ContactForm className="px-2 pt-8 pb-10 mb-10 md:px-4" />

      <Shimmer height="60vw" offset="-75%" />

      <Footer className="lg:px-8" />
    </div>
  )
}
