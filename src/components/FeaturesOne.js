import React from "react"
import { Content } from "./Content"
import { Button } from "./Button"

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
    <div className="flex my-20 max-w-6xl mx-auto">
      <div className="flex-1">
        <img alt="features" src="https://via.placeholder.com/530x500" />
      </div>
      <div>
        <LineItem heading="Fire and Forget transactions">
          Our tools execute your users’ transactions for you. We processes these
          transactions quickly and efficiently so that you can focus on building
          quality.
        </LineItem>

        <LineItem heading="Fire and Forget transactions">
          Our tools execute your users’ transactions for you. We processes these
          transactions quickly and efficiently so that you can focus on building
          quality.
        </LineItem>

        <LineItem heading="Fire and Forget transactions">
          Our tools execute your users’ transactions for you. We processes these
          transactions quickly and efficiently so that you can focus on building
          quality.
        </LineItem>
      </div>
    </div>

    <div className="mx-auto max-w-2xl flex flex-col my-10 text-center">
      <h2>Ready to Sequence your product?</h2>
      <Button className="mx-auto mt-4">Contact Us</Button>
    </div>
  </div>
)

const LineItem = ({ heading, children }) => (
  <div className="text-left my-8 max-w-md">
    <h3 className="mb-2">{heading}</h3>
    <p>{children}</p>
  </div>
)
