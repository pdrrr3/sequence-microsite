import React from "react"

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
      style={{ minWidth: 250 }}
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
