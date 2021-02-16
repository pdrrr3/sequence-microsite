import React from "react"
import { SAL_PROPS } from "../../constants"
import featuresPng from "../../assets/features.png"
import featuresMobilePng from "../../assets/features-mobile.png"

export const Features = ({ className }) => (
  <div
    {...SAL_PROPS}
    className={`flex flex-col items-center mx-auto lg:flex-row ${className}`}
  >
    <div className="flex-1 flex flex-col items-center justify-center text-center">
      <div className="max-w-2xl">
        <h2>Our SDK + APIs make blockchain simple and user friendly</h2>

        <div className="my-3" />

        <p className="px-6">
          And they give you everything you’ll need to run your application
          beautifully on the blockchain.
        </p>
      </div>

      <div className="mt-8 mx-auto hidden sm:block" style={{ maxWidth: 1200 }}>
        <img alt="features" className="object-fit" src={featuresPng} />
      </div>

      <div className="mt-2 mx-auto sm:hidden" style={{ maxWidth: 1000 }}>
        <img alt="features" className="object-fit" src={featuresMobilePng} />
      </div>
    </div>
  </div>
)
