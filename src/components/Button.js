import React from "react"

// TODO: new button gradient
export const Button = ({
  children,
  solid,
  className = "",
  Component = "a",
  ...props
}) => {
  const textColorClass = className.match(/text-/) ? "" : "text-medium-gray"

  return (
    <Component
      href="/#"
      className={`button block rounded-full bg-blue text-center relative gradient-shift px-6 py-3 ${className} ${textColorClass}`}
      {...props}
    >
      <span className="relative">{children}</span>
    </Component>
  )
}
