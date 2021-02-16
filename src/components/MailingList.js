import React from "react"
import { Button } from "./Button"

export const MailingListInput = ({ grayscale, small, className }) => (
  <div
    className={`self-stretch rounded-full flex overflow-hidden ${className}`}
    style={{
      height: small ? 50 : 60,
      borderRadius: "8px 32px 32px 8px",
      background: grayscale
        ? "#2D2D2D"
        : "linear-gradient(263.6deg, rgba(0, 0, 0, 0) 53.27%, rgba(92, 47, 115, 0.75) 123.46%), #1F1F1F",
    }}
  >
    <input
      placeholder="Get early access and updates"
      className="w-full bg-transparent outline-none text-white"
      style={{ minWidth: 150 }}
    />

    <Button Component="button" className="block" style={{ minWidth: 120 }}>
      Join
    </Button>
  </div>
)
