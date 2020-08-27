import React from "react"

export const MailingList = () => (
  <div className="mx-auto max-w-2xl mt-64 mb-48 px-12">
    <form>
      <div className="flex flex-col items-center text-center sm: text-left">
        <h3 className="px-12 mb-6">
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
    <input className="w-full bg-transparent outline-none" />
    <button className="block rounded-full px-12 bg-medium-gray text-dark-gray">
      Join
    </button>
  </div>
)
