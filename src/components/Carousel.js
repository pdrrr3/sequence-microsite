import React from "react"
import { CarouselProvider, Slider, Slide, DotGroup } from "pure-react-carousel"
import slider1 from "../assets/slider1.png"
import slider2 from "../assets/slider2.png"
import slider3 from "../assets/slider3.png"

export const Carousel = () => (
  <CarouselProvider
    isPlaying
    naturalSlideWidth={100}
    naturalSlideHeight={125}
    totalSlides={3}
  >
    <Slider>
      <Slide index={0}>
        <img
          alt="features"
          className="rounded w-full h-full object-fit-contain"
          src={slider1}
        />
      </Slide>
      <Slide index={1}>
        <img
          alt="features"
          className="rounded w-full h-full object-fit-contain"
          src={slider2}
        />
      </Slide>
      <Slide index={2}>
        <img
          alt="features"
          className="rounded w-full h-full object-fit-contain"
          src={slider3}
        />
      </Slide>
    </Slider>
    <div className="mt-6">
      <DotGroup />
    </div>
  </CarouselProvider>
)
