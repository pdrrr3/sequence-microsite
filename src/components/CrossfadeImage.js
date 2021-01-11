import React, { useEffect, useState } from "react"

export const CrossfadeImage = ({
  src,
  style,
  alt,
  duration = 2000,
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
  }, [src, bottomOpacity, duration, topOpacity, topSrc, bottomSrc])

  return (
    <div className={className}>
      {topSrc && (
        <img
          className="absolute"
          src={topSrc}
          alt={alt}
          style={{
            ...style,
            opacity: topOpacity,
            transition: `opacity ${duration}ms ease ${delay}ms`,
          }}
        />
      )}
      {bottomSrc && (
        <img
          className="absolute"
          src={bottomSrc}
          alt={alt}
          style={{
            ...style,
            opacity: bottomOpacity,
            transition: `opacity ${duration}ms ${delay}ms`,
          }}
        />
      )}
    </div>
  )
}
