import React from "react"

export const Button = ({
  children,
  solid,
  small,
  className = "",
  Component = "a",
  ...props
}) => {
  return (
    <Component
      className={`button inline-block rounded-full bg-blue text-center relative ${
        !solid ? "gradient-shift" : ""
      } ${className} ${className.match(/text-/) ? "" : "text-white"} ${
        small ? "px-2 py-2" : "px-2 py-4"
      }`}
      style={{
        minWidth: small ? 120 : 200,
        maxWidth: 300,
        backgroundImage: solid
          ? undefined
          : "linear-gradient(83.57deg, rgba(0, 0, 0, 0) 13.55%, rgba(34, 201, 191, 0.15) 98.35%), linear-gradient(265.77deg, rgba(0, 0, 0, 0) 44.4%, rgba(92, 47, 115, 0.75) 110.31%), linear-gradient(0deg, #2A2A2A, #2A2A2A)",
      }}
      href="/#"
      {...props}
    >
      <span className="relative" style={{ zIndex: 1 }}>
        {children}
      </span>
    </Component>
  )
}
