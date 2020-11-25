import React, { useEffect, useRef, useState } from "react"

export const CrossfadeImage = ({
  src,
  style,
  alt,
  duration = 600,
  delay = 0,
  className = "CrossfadeImage",
}) => {
  const [topSrc, setTop] = useState(src)
  const [bottomSrc, setBottom] = useState(src)
  const [bottomOpacity, setBottomOpacity] = useState(0)
  const [topOpacity, setTopOpacity] = useState(1)

  useEffect(() => {
    if (
      (src === topSrc && topOpacity === 1) ||
      (src === bottomSrc && bottomOpacity === 1)
    )
      return

    if (topOpacity === 1) {
      setBottom(src)
      setTimeout(() => setTop(bottomSrc), duration)
      setTopOpacity(0)
      setBottomOpacity(1)
    } else {
      setTimeout(() => setBottom(topSrc), duration)
      setTop(src)
      setTopOpacity(1)
      setBottomOpacity(0)
    }
  }, [src])

  return (
    <div className={className}>
      {topSrc && (
        <img
          style={{
            ...style,
            position: "absolute",
            opacity: topOpacity,
            transition: `opacity ${duration}ms ease ${delay}ms`,
          }}
          src={topSrc}
          alt={alt}
        />
      )}
      {bottomSrc && (
        <img
          style={{
            ...style,
            position: "absolute",
            opacity: bottomOpacity,
            transition: `opacity ${duration}ms ${delay}ms`,
          }}
          src={bottomSrc}
        />
      )}
    </div>
  )
}
