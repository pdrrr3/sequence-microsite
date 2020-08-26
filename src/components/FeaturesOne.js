import React from "react"
import { Content } from "./Content"
import { Button } from "./Button"
import featurePng from "../assets/feature.png"
import bulletPng from "../assets/bullet.png"

export const FeaturesOne = () => (
  <div>
    <Content
      className="text-center"
      heading="Friendly for your users\nEasy for you"
    >
      A fast and simple item creation tool. A friendly smart wallet for users to
      securely store and manage their items. Invisible fees and high transaction
      throughput. All making it easy for your users to buy, sell and trade with
      one another.
    </Content>
    <div className="flex my-20 max-w-5xl mx-auto">
      <div className="flex-1 flex items-center">
        <img alt="features" src={featurePng} width={530} />
      </div>
      <div>
        <LineItem heading="Fire and Forget transactions">
          Our tools execute your users’ transactions for you. We processes these
          transactions quickly and efficiently so that you can focus on building
          quality.
        </LineItem>

        <LineItem heading="Live token balances and contract state updates">
          Keeping track of token balances is difficult to do, but we make it
          easy for you with the Sequence toolkit
        </LineItem>

        <LineItem heading="Low to no Gas Fees for your users">
          Our transaction optimizations mean your users will pay lower gas fees.
          Plus, we give you the option to subsidize your users’ transactions,
          should you want them to pay nothing at all for gas fees.
        </LineItem>
      </div>
    </div>

    <div className="mx-auto max-w-2xl flex flex-col my-40 text-center">
      <h2>Ready to Sequence your product?</h2>
      <Button gradientBorder className="mx-auto mt-8">
        Contact Us
      </Button>
    </div>
  </div>
)

const LineItem = ({ heading, children }) => (
  <div className="text-left my-12 max-w-md">
    <div className="flex">
      <div className="mr-5" style={{ width: 42 }}>
        <img alt="bullet" src={bulletPng} />
      </div>
      <div className="flex-1">
        <h3 className="mb-2">{heading}</h3>
        <p>{children}</p>
      </div>
    </div>
  </div>
)
