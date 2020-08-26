import React from "react"

export const Button = ({
  children,
  className = "",
  gradientFill,
  gradientBorder,
  small,
  Component = "a",
  ...props
}) => {
  return (
    <Component
      className={`inline-block rounded-full bg-blue text-center relative ${className} ${
        gradientBorder
          ? "text-blue"
          : className.match(/text-/)
          ? ""
          : "text-white"
      } ${small ? "px-2 py-2" : "px-2 py-4"}`}
      style={{
        minWidth: small ? 120 : 200,
        background: gradientFill
          ? "linear-gradient(85.44deg, #AD64B9 0%, #6664B9 43.75%, #64B9AA 82.81%, #98E18C 100%)"
          : gradientBorder
          ? "linear-gradient(85.44deg, #342ABC 0%, #28A1D3 100%)"
          : undefined,
      }}
      href="/#"
      {...props}
    >
      {gradientBorder && (
        <div
          className="absolute bg-white"
          style={{
            top: 2,
            right: 2,
            bottom: 2,
            left: 2,
            borderRadius: 100,
            zIndex: 0,
          }}
        />
      )}
      <span className="relative" style={{ zIndex: 1 }}>
        {children}
      </span>
    </Component>
  )
}
