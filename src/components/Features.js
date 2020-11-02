import React from "react"
import { Button } from "./Button"
import slider1 from "../assets/slider1.png"
import slider2 from "../assets/slider2.png"
import slider3 from "../assets/slider3.png"
import video from "../assets/motion1.mp4"
import copyCode from "../assets/copy-code.png"
import video2 from "../assets/motion2.mp4"
import { fadeProps } from "../constants"

import { CarouselProvider, Slider, Slide, DotGroup } from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"

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
    <div className="my-4">
      <DotGroup />
    </div>
  </CarouselProvider>
)

export const Features = () => (
  <div className="relative mt-64">
    <div
      {...fadeProps}
      className="flex max-w-6xl flex-col lg:flex-row items-center mx-auto my-32"
    >
      <div className="mt-6 flex-1 w-full">
        <Carousel />
      </div>

      <div className="flex-1 flex flex-col align-center justify-center mx-10 px-8">
        <h2>An Ethereum Web Wallet anyone can use</h2>

        <p className="mt-4 mb-12" style={{ maxWidth: 414 }}>
          Users login with their email or social accounts. No seed phrases or
          blockchain knowledge required. Sequence gives users top notch security
          in a friendly format. And it’s non-custodial.
        </p>

        <h3>Integrate Sequence in four lines of code</h3>

        <code>
          <img
            alt="copy-code"
            onClick={() => navigator.clipboard.writeText(code)}
            src={copyCode}
            className="copy-code"
          />
          {code}
        </code>
      </div>
    </div>

    <div
      {...fadeProps}
      className="flex max-w-6xl flex-col lg:flex-row items-center mx-auto my-32"
    >
      <div className="flex-1 flex flex-col align-center justify-center mx-10 px-8">
        <h2>
          Finally, friendly UX for blockchain
          <br />
          Easy for developers too
        </h2>
        <p className="mt-4" style={{ maxWidth: 414 }}>
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

    <div
      {...fadeProps}
      className="flex max-w-6xl flex-col lg:flex-row items-center mx-auto my-32"
    >
      <div className="flex-1 mt-6">
        <video autoPlay muted loop alt="features" width={530}>
          <source src={video2} />
        </video>
      </div>

      <div className="flex-1 flex flex-col align-center justify-center ml-10 px-8">
        <h2>Our SDK + APIs make blockchain simple</h2>

        <p className="mt-4" style={{ maxWidth: 414 }}>
          And they give you everything you’ll need to run your application on
          the blockchain.
          <br />
          <br />
          With end-to-end capabilities, the Sequence SDK connects your product
          with the Ethereum network, delivers efficient pricing via batch
          transactions, gives you web libraries, a node companion, powerful APIs
          for top notch security, and everything else you’ll need to delight
          your users.
        </p>
      </div>
    </div>

    <div
      {...fadeProps}
      className="mx-auto max-w-2xl flex flex-col mt-40 pb-32 text-center"
    >
      <h2 className="px-4">Ready to Sequence your product?</h2>
      <Button className="mx-auto mt-8">Contact Us</Button>
    </div>
  </div>
)

const code = `require 'stripe'
intent = Stripe::PaymentIntent.retrieve(
  'pi_1DgFnF2eZvKYlo2CRWIjRLcg',
  {
    stripe_version: '2020-08-27',
  }
)
intent.capture`
