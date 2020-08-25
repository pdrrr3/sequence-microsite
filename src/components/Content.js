import React from "react"

export const Content = ({ heading, children, className = "" }) => (
  <div className={`mx-auto max-w-lg my-5 ${className}`}>
    {heading.split("\\n").map((text, i) => (
      <h2 key={`heading-${i}`}>{text}</h2>
    ))}
    <p className="mt-4">{children}</p>
  </div>
)
