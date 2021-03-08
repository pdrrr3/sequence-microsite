import React from "react"
import { Button } from "./Button"
import { SAL_PROPS } from "../constants"

export const MailingListInput = ({
  grayscale,
  small,
  className,
  placeholder = "Your email",
}) => (
  <div
    className={`self-stretch rounded-full flex overflow-hidden ${className}`}
    style={{
      height: small ? 50 : 60,
      borderRadius: "8px 32px 32px 8px",
      minWidth: 270,
      background: grayscale
        ? "#2D2D2D"
        : "linear-gradient(263.6deg, rgba(0, 0, 0, 0) 78.27%, rgba(92, 47, 115, 0.75) 123.46%), #1F1F1F",
    }}
  >
    <input
      placeholder={placeholder}
      className="w-full bg-transparent outline-none text-white"
      style={{ minWidth: 150 }}
    />

    <Button
      variant={grayscale ? "contained" : "gradient"}
      Component="button"
      className="block"
      style={{ minWidth: 120 }}
    >
      Join
    </Button>
  </div>
)

export const MailingListSection = ({ className }) => (
  <div
    {...SAL_PROPS}
    className={`flex flex-col lg:flex-row lg:items-center justify-between rounded px-3 md:px-6 lg:px-10 ${className}`}
    style={{
      background:
        "linear-gradient(83.57deg, #19141Caa 0%, #121A19aa 100%), #111111",
    }}
  >
    <h3 className="gradient text-center lg:text-left">
      Stay up to date with Sequence
    </h3>
    <div className="my-4" />
    <div className="flex-1 lg:ml-10 lg:mr-6">
      <MailingListInput small />
    </div>
  </div>
)
