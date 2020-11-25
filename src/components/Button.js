import React from "react"

export const Button = ({
  children,
  solid,
  small,
  className = "",
  Component = "a",
  ...props
}) => {
  const textColorClass = className.match(/text-/) ? "" : "text-medium-gray"
  const spacingClass = small ? "px-2 py-2" : "px-2 py-4"

  return (
    <Component
      href="/#"
      className={`button inline-block rounded-full bg-blue text-center relative gradient-shift ${className} ${textColorClass} ${spacingClass}`}
      style={{ minWidth: small ? 140 : 200 }}
      {...props}
    >
      <span className="relative" style={{ zIndex: 1 }}>
        {children}
      </span>
    </Component>
  )
}
