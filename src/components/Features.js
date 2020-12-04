import React, { createRef, useEffect, useState } from "react"
import "pure-react-carousel/dist/react-carousel.es.css"

import copyCode from "../assets/copy-code.png"
import { SAL_PROPS, INTEGRATION_CODE } from "../constants"
import { Button } from "./Button"
import * as AnimatedBoxes from "./AnimatedBoxes"
import { Carousel } from "./Carousel"
import throttle from "lodash.throttle"

export const Features = () => {
  const [showCode, setShowCode] = useState(true)
  const clickCopyCode = () => {
    setShowCode(false)
    setTimeout(() => setShowCode(true), 2000)
    navigator.clipboard.writeText(INTEGRATION_CODE)
  }

  const [isVisible, currentElement] = useVisibility(0)

  return (
    <div className="relative mx-5">
      <div
        {...SAL_PROPS}
        className="flex max-w-6xl flex-col lg:flex-row items-center mx-auto my-10 pb-10 lg:px-5"
      >
        <div className="flex-1 w-full flex flex-col align-center justify-center lg:mr-10">
          <h2 style={{ maxWidth: 550 }}>
            Finally, a friendly experience for blockchain
          </h2>

          <div className="my-4" />

          <p>
            Sequence gives you a friendly smart wallet, an end-to-end SDK to
            integrate Ethereum with your web application, and powerful APIs for
            the security you need.
            <br />
            <br />
            All making for a seamless experience while Ethereum works in the
            background.
          </p>
        </div>

        <div
          ref={currentElement}
          className={`animated-boxes ${isVisible ? "active" : ""}`}
        >
          <AnimatedBoxes.Box1 />
          <AnimatedBoxes.Box2 />
          <AnimatedBoxes.Box3 />
          <AnimatedBoxes.Box4 />
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

          <code className="mt-6">
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

function useVisibility() {
  const [isVisible, setIsVisible] = useState(false)
  const currentElement = createRef()

  const onScroll = throttle(() => {
    if (!currentElement.current) {
      setIsVisible(false)
      return
    }
    const top = currentElement.current.getBoundingClientRect().top
    setIsVisible(top <= window.innerHeight - 400)
  }, 100)

  useEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  })

  return [isVisible, currentElement]
}
