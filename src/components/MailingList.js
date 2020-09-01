import React from "react"

export const MailingList = () => (
  <form>
    <div className="flex flex-col items-center text-center sm: text-left">
      <h3 className="px-12 mb-6 gradient">
        Join our mailing list for updates and exclusive news
      </h3>

      <MailingListInput />
    </div>
  </form>
)

export const MailingListInput = ({ small }) => (
  <div
    className="bg-light-gray self-stretch rounded-full mt-4 flex overflow-hidden"
    style={{ height: small ? 50 : 60 }}
  >
    <input className="w-full bg-transparent pl-6 outline-none" />
    <button
      className="block rounded-full px-12 bg-medium-gray text-dark-gray gradientShift"
      style={{
        backgroundImage:
          "linear-gradient(85.44deg,#cccbda 0%, #cccbda 50%, #b8e0d9 70%)",
      }}
    >
      Join
    </button>
  </div>
)
