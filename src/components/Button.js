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
  const spacingClass = small ? "px-2 py-2 small" : "px-6 py-4"

  return (
    <Component
      href="/#"
      className={`button inline-block rounded-full bg-blue text-center relative gradient-shift ${className} ${textColorClass} ${spacingClass}`}
      {...props}
    >
      <span className="relative">{children}</span>
    </Component>
  )
}
