import React from "react"
import { Button } from "./Button"
import { SAL_PROPS } from "../constants"

export const CallToAction = ({ className }) => (
  <div
    {...SAL_PROPS}
    className={`mx-auto flex flex-col text-center ${className}`}
  >
    <h2 className="px-4 mb-6">Ready to Sequence your product?</h2>
    <Button className="mx-auto">Get Started</Button>
  </div>
)
