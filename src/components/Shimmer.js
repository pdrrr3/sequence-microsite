import React from "react"

export const Shimmer = ({ ...props }) => {
  return (
    <div
      className="absolute overflow-hidden"
      style={{ zIndex: -1, width: "99vw", height: "100vh" }}
    >
      <ShimmerItem
        size={1000}
        x={"-15vw"}
        y={-585}
        color="#D9EDFF"
        color2="rgba(217, 237, 255, 0)"
      />
      <ShimmerItem
        size={800}
        x={"70vw"}
        y={-350}
        color="#FCFFD9"
        color2="rgba(252, 255, 217, 0)"
      />
      <ShimmerItem
        size={776}
        x={"-10vw"}
        y={36}
        color="#F3D9FF"
        color2="rgba(243, 217, 255, 0)"
      />
      <ShimmerItem
        size={800}
        x={"90vw"}
        y={-21}
        color="#D9FFED"
        color2="rgba(252, 255, 217, 0)"
      />
    </div>
  )
}

export const BottomShimmer = ({ ...props }) => {
  return (
    <div
      className="absolute overflow-hidden"
      style={{ zIndex: -1, width: "99vw", height: "100vh", bottom: 0 }}
    >
      <ShimmerItem
        size={1000}
        x={"-15vw"}
        y={585}
        color="#D9EDFF"
        color2="rgba(217, 237, 255, 0)"
      />
      <ShimmerItem
        size={800}
        x={"70vw"}
        y={350}
        color="#FCFFD9"
        color2="rgba(252, 255, 217, 0)"
      />
      <ShimmerItem
        size={776}
        x={"-10vw"}
        y={300}
        color="#F3D9FF"
        color2="rgba(243, 217, 255, 0)"
      />
      <ShimmerItem
        size={800}
        x={"90vw"}
        y={200}
        color="#D9FFED"
        color2="rgba(252, 255, 217, 0)"
      />
    </div>
  )
}

const ShimmerItem = ({ size, x, y, color, color2 }) => (
  <div
    className="absolute"
    style={{
      width: size,
      height: size,
      left: x,
      top: y,
      background: `radial-gradient(50% 50% at 50% 50%, ${color} 0%, ${color2} 100%)`,
      mixBlendMode: "normal",
      opacity: 0.7,
    }}
  />
)
