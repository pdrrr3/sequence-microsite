import React from "react"
import { Shader } from "./Shader"

export const Shimmer = ({ offset = 0 }) => {
  return (
    <div
      style={{
        position: "absolute",
        overflow: "hidden",
        width: "100vw",
        height: "100vh",
        opacity: 0.7,
        zIndex: -2,
        transform: `translateY(${offset})`,
      }}
    >
      <Shader />
    </div>
  )
}
