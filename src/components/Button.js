import React from "react"

export const Button = ({
  children,
  variant = "gradient",
  className = "",
  Component = "a",
  ...props
}) => {
  const textColorClass = className.match(/text-/) ? "" : "text-medium-gray"

  if (variant === "outlined") {
    return (
      <div className={`outlined-wrap ${className}`}>
        <Component
          href="/#"
          className={`button ${variant} ${textColorClass}`}
          {...props}
        >
          <span className="relative">{children}</span>
        </Component>
      </div>
    )
  }

  return (
    <Component
      href="/#"
      className={`button ${variant} ${className} ${textColorClass}`}
      {...props}
    >
      <span className="relative">{children}</span>
    </Component>
  )
}
