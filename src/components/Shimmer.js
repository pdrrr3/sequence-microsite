import React, { useState } from "react"
import shimmer from "../assets/shimmer.mp4"

export const Shimmer = ({ offset = "-50%", height = "110vw" }) => {
  const [loaded, setLoaded] = useState(false)
  return (
    <div
      style={{
        position: "absolute",
        overflow: "hidden",
        width: "100vw",
        height,
        opacity: 0.7,
        zIndex: -2,
        transform: `translateY(${offset})`,
      }}
    >
      <video
        autoPlay
        muted
        loop
        onLoadedData={() => setLoaded(true)}
        className="flex-1"
        style={{
          position: "absolute",
          width: "100%",
          opacity: loaded ? 1 : 0,
          transition: "opacity 2s",
          transform: `translateY(-20%)`,
        }}
      >
        <source src={shimmer} />
      </video>
    </div>
  )
}
