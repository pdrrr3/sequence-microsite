import React from "react"
import { Button } from "./Button"
import featurePng from "../assets/feature.png"
import bulletPng from "../assets/bullet.png"
import { BottomShimmer } from "./Shimmer"
import { fadeProps } from "../constants"

export const Features = () => (
  <div className="relative">
    {/* <BottomShimmer /> */}

    <div
      {...fadeProps}
      className="flex max-w-6xl flex-col lg:flex-row items-center mx-auto my-32"
    >
      <div className="flex-1 flex flex-col align-center justify-center mr-10 px-8">
        <h2>
          Finally, friendly UX for blockchain
          <br />
          Easy for developers too
        </h2>
        <p className="mt-4">
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
        <img alt="features" className="rounded" src={featurePng} width={530} />
      </div>
    </div>

    <div
      {...fadeProps}
      className="flex max-w-6xl flex-col lg:flex-row items-center mx-auto my-32"
    >
      <div className="mt-6">
        <img alt="features" className="rounded" src={featurePng} width={530} />
      </div>

      <div className="flex-1 flex flex-col align-center justify-center mr-10 px-8">
        <h2>A Smart Wallet anyone can use</h2>

        <p className="mt-4">
          Users login with their email or social accounts. No seed phrases or
          blockchain knowledge required. Sequence gives users top notch security
          in a friendly format. And it’s non-custodial.
        </p>
        <h2>Integrate Sequence in four lines of code</h2>
        <code>
          {`require 'stripe'
intent = Stripe::PaymentIntent.retrieve(
  'pi_1DgFnF2eZvKYlo2CRWIjRLcg',
  {
    stripe_version: '2020-08-27',
  }
)
intent.capture`}
        </code>
      </div>
    </div>

    <div
      {...fadeProps}
      className="flex max-w-6xl flex-col lg:flex-row items-center mx-auto my-32"
    >
      <div className="flex-1 flex flex-col align-center justify-center mr-10 px-8">
        <h2>Our SDK + APIs make blockchain simple</h2>

        <p className="mt-4">
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

      <div className="mt-6">
        <img alt="features" className="rounded" src={featurePng} width={530} />
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
