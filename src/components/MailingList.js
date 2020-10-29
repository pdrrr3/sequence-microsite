import React from "react"
import { fadeProps } from "../constants"

export const MailingList = () => (
  <div
    className="max-w-2xl mx-auto rounded py-20 px-6 lg:px-24 mb-48 shadow"
    style={{ marginTop: 350 }}
    {...fadeProps}
  >
    <form>
      <div className="flex flex-col items-center text-center sm: text-left">
        <h3 className="px-12 mb-6">Get early access and updates</h3>

        <MailingListInput />
      </div>
    </form>
  </div>
)

export const MailingListInput = ({ small, className }) => (
  <div
    className={`self-stretch rounded-full mt-4 flex overflow-hidden ${className}`}
    style={{
      height: small ? 50 : 60,
      borderRadius: "8px 32px 32px 8px",
      background:
        "linear-gradient(263.6deg, rgba(0, 0, 0, 0) 53.27%, rgba(92, 47, 115, 0.75) 123.46%), #1F1F1F",
    }}
  >
    <input
      placeholder="Get early access and updates"
      className="w-full bg-transparent pl-6 outline-none text-white"
    />
    <button
      className="block rounded-full px-12 bg-medium-gray text-medium-gray relative gradient-shift"
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(42, 42, 42, 0.4), rgba(42, 42, 42, 0.4)), linear-gradient(222.39deg, rgba(174, 38, 145, 0) 68.93%, #AB4294 115.85%), linear-gradient(61.57deg, rgba(30, 118, 154, 0) 19.77%, #56C6CD 85.93%), linear-gradient(0deg, #342ABC, #342ABC)",
      }}
    >
      Join
    </button>
  </div>
)
