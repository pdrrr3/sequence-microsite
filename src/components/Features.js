import React, { useState } from "react"
import { CarouselProvider, Slider, Slide, DotGroup } from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"

import video from "../assets/motion1.mp4"
import copyCode from "../assets/copy-code.png"
import { SAL_PROPS, INTEGRATION_CODE } from "../constants"
import { Button } from "./Button"
import slider1 from "../assets/slider1.png"
import slider2 from "../assets/slider2.png"
import slider3 from "../assets/slider3.png"

export const Features = () => {
  const [showCode, setShowCode] = useState(true)
  const clickCopyCode = () => {
    setShowCode(false)
    setTimeout(() => setShowCode(true), 2000)
    navigator.clipboard.writeText(INTEGRATION_CODE)
  }

  return (
    <div className="relative mx-5">
      <div
        {...SAL_PROPS}
        className="flex max-w-6xl flex-col lg:flex-row items-center mx-auto mb-10 pb-10 lg:px-7"
      >
        <div className="flex-1 w-full flex flex-col align-center justify-center">
          <h2>
            Finally, friendly UX for blockchain
            <div className="my-4" />
            Easy for developers too
          </h2>

          <div className="my-4" />

          <p style={{ maxWidth: 414 }}>
            Sequence gives you a friendly smart wallet, an end-to-end SDK to
            integrate Ethereum with your web application, and powerful APIs for
            the security you need.
            <br />
            <br />
            All making for a seamless experience while Ethereum works in the
            background.
          </p>
        </div>

        <div className="flex-1">
          <video autoPlay muted loop alt="features" width={530}>
            <source src={video} />
          </video>
        </div>
      </div>

      <div className="flex max-w-6xl flex-col lg:flex-row items-center mx-auto mb-10 pb-10">
        <div
          {...SAL_PROPS}
          className="flex-1 w-full max-w-md lg:max-w-xl lg:pr-10"
        >
          <Carousel />
        </div>

        <div
          {...SAL_PROPS}
          className="flex-1 flex flex-col align-center justify-center pt-7 md:px-2 lg:pl-6"
        >
          <h2>An Ethereum Web Wallet anyone can use</h2>

          <div className="my-3" />

          <p>
            Users login with their email or social accounts. No seed phrases or
            blockchain knowledge required. Sequence gives users top notch
            security in a friendly format. And it’s non-custodial.
          </p>

          <div className="my-5" />

          <h3>Integrate Sequence in four lines of code</h3>

          <code className="mt-6" style={{ minHeight: 250 }}>
            {/* eslint-disable-next-line */}
            <img
              alt="copy-code"
              onClick={clickCopyCode}
              src={copyCode}
              className="copy-code"
            />
            {showCode ? INTEGRATION_CODE : "Code copied!"}
          </code>
        </div>
      </div>

      <div
        {...SAL_PROPS}
        className="flex max-w-6xl flex-col lg:flex-row items-center mx-auto mb-10 pb-10 md:px-2"
      >
        <div className="flex-1 flex flex-col align-center justify-center lg:text-center">
          <h2>Our SDK + APIs make blockchain simple</h2>

          <div className="my-3" />

          <p>
            And they give you everything you’ll need to run your application
            beautifully on the blockchain.
          </p>
        </div>
      </div>

      <div
        {...SAL_PROPS}
        className="mx-auto max-w-2xl flex flex-col text-center my-10 pt-10 mb-10"
      >
        <h2 className="px-4 mb-6">Ready to Sequence your product?</h2>
        <Button className="mx-auto">Get Started</Button>
      </div>
    </div>
  )
}

const Carousel = () => (
  <CarouselProvider
    isPlaying
    naturalSlideWidth={100}
    naturalSlideHeight={125}
    totalSlides={3}
  >
    <Slider>
      <Slide index={0}>
        <img
          alt="features"
          className="rounded w-full h-full object-fit-contain"
          src={slider1}
        />
      </Slide>
      <Slide index={1}>
        <img
          alt="features"
          className="rounded w-full h-full object-fit-contain"
          src={slider2}
        />
      </Slide>
      <Slide index={2}>
        <img
          alt="features"
          className="rounded w-full h-full object-fit-contain"
          src={slider3}
        />
      </Slide>
    </Slider>
    <div className="mt-6">
      <DotGroup />
    </div>
  </CarouselProvider>
)
