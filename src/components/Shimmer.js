import React from "react"
import shimmer from "../assets/shimmer.mp4"

export const Shimmer = () => (
  <video
    autoPlay
    muted
    loop
    className="flex-1"
    style={{
      position: "absolute",
      zIndex: -1,
      opacity: 0.5,
      width: "100vw",
    }}
  >
    <source src={shimmer} />
  </video>
)
