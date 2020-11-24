import React from "react"
import { fadeProps } from "../constants"

export const MailingList = () => (
  <div
    className="max-w-2xl mx-auto rounded shadow"
    style={{ marginTop: 350 }}
    {...fadeProps}
  >
    <form>
      <div className="flex flex-col items-center text-center sm: text-left">
        <h3>Sign up for early updates</h3>

        <MailingListInput />
      </div>
    </form>
  </div>
)

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
      placeholder="Sign up for early updates"
      className="w-full bg-transparent outline-none text-white"
    />
    <button
      className="button block rounded-full bg-medium-gray text-medium-gray relative gradient-shift"
      style={
        grayscale
          ? { background: "#404040" }
          : {
              backgroundImage:
                "linear-gradient(0deg, rgba(42, 42, 42, 0.4), rgba(42, 42, 42, 0.4)), linear-gradient(222.39deg, rgba(174, 38, 145, 0) 68.93%, #AB4294 115.85%), linear-gradient(61.57deg, rgba(30, 118, 154, 0) 19.77%, #56C6CD 85.93%), linear-gradient(0deg, #342ABC, #342ABC)",
            }
      }
    >
      Join
    </button>
  </div>
)
