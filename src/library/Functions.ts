import { MouseEvent } from "react"

// Functions
export const smoothScroll = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
  e.preventDefault()
  const target = document.getElementById(id)
  target?.scrollIntoView({ behavior: 'smooth' })
}

export const splitWords = (str: string) => str.split(/\s+/)