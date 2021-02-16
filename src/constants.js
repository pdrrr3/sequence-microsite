import UniswapPng from "./assets/hero/Uniswap.png"
import OpenSeaPng from "./assets/hero/OpenSea.png"
import SkyweaverPng from "./assets/hero/Skyweaver.png"
import ETHPng from "./assets/hero/eth.png"
import DecentralandPng from "./assets/hero/Decentraland.png"
import MakerDAOPng from "./assets/hero/MakerDAO.png"
import AxielPng from "./assets/hero/Axiel.png"
import SuperRarePng from "./assets/hero/SuperRare.png"
import SandboxPng from "./assets/hero/Sandbox.png"
import CurvePng from "./assets/hero/Curve.png"

const HERO_BRANDS = {
  Uniswap: { label: "Uniswap", href: "https://uniswap.org/", src: UniswapPng },
  OpenSea: { label: "OpenSea", href: "https://opensea.io/", src: OpenSeaPng },
  Skyweaver: {
    label: "Skyweaver",
    href: "https://skyweaver.net/",
    src: SkyweaverPng,
  },
  ETH: { label: "ETH", href: "https://ethereum.org/en/", src: ETHPng },
  Decentraland: {
    label: "Decentraland",
    href: "https://decentraland.org/",
    src: DecentralandPng,
  },
  MakerDAO: {
    label: "MakerDAO",
    href: "https://makerdao.com/en/",
    src: MakerDAOPng,
  },
  AxieInfinity: {
    label: "AxieInfinity",
    href: "https://axieinfinity.com/",
    src: AxielPng,
  },
  Superrare: {
    label: "Superrare",
    href: "https://superrare.co/",
    src: SuperRarePng,
  },
  TheSandbox: {
    label: "The Sandbox",
    href: "https://www.sandbox.game/en/",
    src: SandboxPng,
  },
  CurveFinance: {
    label: "Curve Finance",
    href: "https://www.curve.fi/",
    src: CurvePng,
  },
}

export const HERO_IMAGES = [
  [HERO_BRANDS.Uniswap, HERO_BRANDS.MakerDAO],
  [HERO_BRANDS.OpenSea, HERO_BRANDS.AxieInfinity],
  [HERO_BRANDS.Skyweaver, HERO_BRANDS.Superrare],
  [HERO_BRANDS.ETH, HERO_BRANDS.TheSandbox],
  [HERO_BRANDS.Decentraland, HERO_BRANDS.CurveFinance],
]

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

export const HERO_IMAGE_SWAP_DURATION = 5000
