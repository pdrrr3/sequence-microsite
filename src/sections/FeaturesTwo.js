import React from "react"
import { Content } from "../components/Content"
import featurePng from "../assets/feature.png"
import bulletPng from "../assets/bullet.png"
import { fadeProps } from "../constants"

export const FeaturesTwo = () => (
  <div id="tools" className="container px-12">
    <div {...fadeProps}>
      <Content
        className="max-w-4xl my-32 md:text-center"
        heading="Take what you need when you need it\nWe’re flexible"
      >
        <span className="max-w-xl mx-auto">
          No matter where you’re at in your development journey, we’re here to
          help. Sequence is open source and customizable. We use Sequence
          ourselves, and we understand that every product has different needs.
        </span>
      </Content>
    </div>

    <div className="mx-auto max-w-6xl">
      <LineItem heading="Intuitive User Experience">
        No matter where you’re at in your development journey, we’re here to
        help. Sequence is open source and customizable. We use Sequence
        ourselves, and we understand that every product has different needs.
      </LineItem>

      <LineItem heading="Intuitive Developer Experience">
        With Sequence, integrating the Ethereum blockchain with your product
        only takes a few lines of code, seamlessly providing your users with
        powerful protocols like decentralized exchanges and access to the next
        generation of the Internet.
      </LineItem>

      <LineItem heading="Robust + Secure">
        Your users can recover their account and activate advanced security
        features like cryptographic Two-Factor Authentication, ensuring high
        security while maintaining full custody over their funds. Built on top
        of Ethereum, the world’s most secure and robust blockchain.
      </LineItem>
    </div>

    <div className="flex max-w-6xl flex-col lg:flex-row items-center mx-auto my-32">
      <div
        {...fadeProps}
        className="flex-1 flex flex-col align-center justify-center mr-10"
      >
        <h2>Integrate Sequence in four lines of code</h2>

        <p className="mt-4">
          A fast and simple item creation tool. A friendly smart wallet for
          users to securely store and manage their items. Invisible fees and
          high transaction throughput.
          <br />
          <br />
          All making it easy for your users to buy, sell and trade with one
          another. And, good news for you: everything can be implemented with
          only a few lines of code
        </p>
      </div>

      <div>
        <img alt="features" className="rounded" src={featurePng} width={530} />
      </div>
    </div>
  </div>
)

const LineItem = ({ heading, children }) => (
  <div
    {...fadeProps}
    className="flex flex-col md:flex-row bg-white rounded my-4 px-6 py-16 justify-center md:items-center"
    style={{
      filter: "drop-shadow(0px 0px 50px rgba(0, 0, 0, 0.05))",
    }}
  >
    <div className="flex-1 flex items-center mb-4 md:mb-0">
      <div className="mr-2 md:mr-4 relative" style={{ left: -5, width: 42 }}>
        <img alt="bullet" src={bulletPng} />
      </div>
      <h3 className="text-blue" style={{ lineHeight: 1 }}>
        {heading}
      </h3>
    </div>
    <div className="flex-1">
      <p>{children}</p>
    </div>
  </div>
)
