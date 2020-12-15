import React from "react"
import shimmer from "../assets/shimmer.mp4"

export const Shimmer = ({ offset = "-50%", ...props }) => (
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
      transform: `translateY(${offset})`,
      height: "100vw",
      objectFit: "cover",
      maxWidth: 1650,
      maxHeight: 1650,
      ...props,
    }}
  >
    <source src={shimmer} />
  </video>
)
