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
        <h3 className="px-12 mb-6 gradient">Get early access and updates</h3>

        <MailingListInput />
      </div>
    </form>
  </div>
)

export const MailingListInput = ({ small }) => (
  <div
    className="self-stretch rounded-full mt-4 flex overflow-hidden"
    style={{
      height: small ? 50 : 60,
      background:
        "linear-gradient(263.6deg, rgba(0, 0, 0, 0) 53.27%, rgba(92, 47, 115, 0.75) 123.46%), #1F1F1F",
    }}
  >
    <input className="w-full bg-transparent pl-6 outline-none text-white" />
    <button className="block rounded-full px-12 bg-medium-gray text-dark-gray relative gradient-shift">
      Join
    </button>
  </div>
)
