import React from "react"

export const Shimmer = ({ ...props }) => {
  return (
    <div
      className="absolute overflow-hidden"
      style={{ zIndex: -1, width: "100vw", height: "100vh", minHeight: 1000 }}
    >
      <ShimmerItem
        size={1000}
        x={"-15vw"}
        y={-585}
        colors={["#D9EDFF", "D9FFED", "#F3D9FF", "#FCFFD9"]}
      />
      <ShimmerItem
        size={800}
        x={"70vw"}
        y={-350}
        colors={["#FCFFD9", "#D9EDFF", "D9FFED", "#F3D9FF"]}
      />
      <ShimmerItem
        size={776}
        x={"-10vw"}
        y={36}
        colors={["#F3D9FF", "#FCFFD9", "#D9EDFF", "D9FFED"]}
      />
      <ShimmerItem
        size={800}
        x={"90vw"}
        y={-21}
        colors={["D9FFED", "#F3D9FF", "#FCFFD9", "#D9EDFF"]}
      />
    </div>
  )
}

export const BottomShimmer = ({ ...props }) => {
  return (
    <div
      className="absolute overflow-hidden"
      style={{
        zIndex: -1,
        width: "100vw",
        height: "100vh",
        minHeight: 1000,
        bottom: 0,
      }}
    >
      <ShimmerItem
        size={1000}
        x={"-15vw"}
        y={585}
        colors={["#D9EDFF", "D9FFED", "#F3D9FF", "#FCFFD9"]}
      />
      <ShimmerItem
        size={800}
        x={"70vw"}
        y={350}
        colors={["#FCFFD9", "#D9EDFF", "D9FFED", "#F3D9FF"]}
      />
      <ShimmerItem
        size={776}
        x={"-10vw"}
        y={300}
        colors={["#F3D9FF", "#FCFFD9", "#D9EDFF", "D9FFED"]}
      />
      <ShimmerItem
        size={800}
        x={"90vw"}
        y={200}
        colors={["D9FFED", "#F3D9FF", "#FCFFD9", "#D9EDFF"]}
      />
    </div>
  )
}

const ShimmerItem = ({ colors = [], ...props }) => (
  <>
    <BaseShimmer {...props} color={colors[0]} />
    <BaseShimmer
      {...props}
      color={colors[1]}
      style={{
        animationDelay: 1000,
        animationDirection: "alternate-reverse",
      }}
    />
    {colors[2] && (
      <BaseShimmer
        {...props}
        color={colors[2]}
        style={{ animationDelay: 3000 }}
      />
    )}
    {colors[3] && (
      <BaseShimmer
        {...props}
        color={colors[3]}
        style={{
          animationDelay: 5000,
          animationDirection: "alternate-reverse",
        }}
      />
    )}
  </>
)

const BaseShimmer = ({ size, x, y, color, style = {} }) => (
  <div
    className="absolute shimmer"
    style={{
      width: size,
      height: size,
      left: x,
      top: y,
      background: `radial-gradient(50% 50% at 50% 50%, ${color} 0%, transparent 100%)`,
      mixBlendMode: "normal",
      opacity: 0.7,
      ...style,
    }}
  />
)
