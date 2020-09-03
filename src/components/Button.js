import React from "react"

export const Button = ({
  children,
  border,
  solid,
  small,
  className = "",
  Component = "a",
  ...props
}) => {
  return (
    <Component
      className={`button inline-block rounded-full bg-blue text-center relative ${
        !border && !solid ? "gradient-shift" : ""
      } ${className} ${
        border ? "text-blue" : className.match(/text-/) ? "" : "text-white"
      } ${small ? "px-2 py-2" : "px-2 py-4"}`}
      style={{
        minWidth: small ? 120 : 200,
        maxWidth: 300,
        backgroundImage: border
          ? "linear-gradient(85.44deg, #342ABC 0%, #28A1D3 100%)"
          : solid
          ? undefined
          : "linear-gradient(85.44deg, #AD64B9 0%, #342abc 25%, #64B9AA 100%)",
      }}
      href="/#"
      {...props}
    >
      {border && (
        <div
          className="absolute bg-offwhite"
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
