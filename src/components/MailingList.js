import React from "react"
import { fadeProps } from "../constants"

export const MailingList = () => (
  <div
    className="bg-white max-w-4xl mx-auto rounded py-20 px-6 lg:px-24 mb-48 shadow"
    style={{ marginTop: 350 }}
    {...fadeProps}
  >
    <form>
      <div className="flex flex-col items-center text-center sm: text-left">
        <h3 className="px-12 mb-6 gradient">
          Join our mailing list for updates and exclusive news
        </h3>

        <MailingListInput />
      </div>
    </form>
  </div>
)

export const MailingListInput = ({ small }) => (
  <div
    className="bg-light-gray self-stretch rounded-full mt-4 flex overflow-hidden"
    style={{ height: small ? 50 : 60 }}
  >
    <input className="w-full bg-transparent pl-6 outline-none" />
    <button className="block rounded-full px-12 bg-medium-gray text-dark-gray relative gradient-shift">
      Join
    </button>
  </div>
)
