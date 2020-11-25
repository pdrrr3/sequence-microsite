import headerLogo1 from "./assets/hero/1.png"
import headerLogo2 from "./assets/hero/2.png"
import headerLogo3 from "./assets/hero/3.png"
import headerLogo4 from "./assets/hero/4.png"
import headerLogo5 from "./assets/hero/5.png"

export const SAL_PROPS = {
  "data-sal": "slide-up",
  "data-sal-duration": "800",
  "data-sal-delay": "200",
}

export const URIS = {
  tools: "/#tools",
  contact: "/#contact",
  docs: "/#docs",
  github: "/#github",
  twitter: "/#twitter",
  terms: "/#terms",
  cookies: "/#cookies",
  horizon: "/#horizon",
  community: "/#community",
  privacy: "/privacy",
}

export const INTEGRATION_CODE = `require 'stripe'
intent = Stripe::PaymentIntent.retrieve(
  'pi_1DgFnF2eZvKYlo2CRWIjRLcg',
  {
    stripe_version: '2020-08-27',
  }
)
intent.capture`

export const HERO_IMAGE_SWAP_DURATION = 8000
export const HERO_IMAGE_SWAP_DELAY = 50

export const HERO_IMAGE_POSITIONS = [
  { size: 170, top: -100, left: -30 },
  { size: 230, top: -180, left: 210 },
  { size: 230, top: 105, left: 10 },
  { size: 307, top: 50, left: 300 },
  { size: 155, top: 350, left: 230 },
]

export const HERO_IMAGES = [
  [
    {
      src: headerLogo4,
      href: "https://google.ca",
      label: "Unicorn.org",
    },
    {
      src: headerLogo2,
      href: "https://google.ca",
      label: "OpenSea.org",
    },
  ],
  [
    {
      src: headerLogo2,
      href: "https://google.ca",
      label: "OpenSea.org",
    },
    {
      src: headerLogo5,
      href: "https://google.ca",
      label: "Etherium.org",
    },
  ],
  [
    {
      src: headerLogo5,
      href: "https://google.ca",
      label: "Etherium.org",
    },
    {
      src: headerLogo1,
      href: "https://google.ca",
      label: "Etherium.org",
    },
  ],
  [
    {
      src: headerLogo1,
      href: "https://google.ca",
      label: "Etherium.org",
    },
    {
      src: headerLogo3,
      href: "https://google.ca",
      label: "Etherium.org",
    },
  ],
  [
    {
      src: headerLogo3,
      href: "https://google.ca",
      label: "Etherium.org",
    },
    {
      src: headerLogo4,
      href: "https://google.ca",
      label: "Unicorn.org",
    },
  ],
]
