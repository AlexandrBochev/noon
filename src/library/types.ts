// Types
export interface INoon {
  id: number
  title: string
  x: number
}

export interface INavigation {
  id: number
  title: string
  link: string
}

export interface ILogo {
  id: number
  img: string
}

export interface TickerProps {
  children: React.ReactNode
}

export interface IHeadCard {
  id: number
  name: string
  position: string
  img: string
}

export interface SliderCardsProps {
  children: React.ReactNode
  amount: number
}

export interface IMeetItems {
  id: number
  title: string
  description: string
  percent: number
}

export interface IPartner {
  id: number,
  logo: string,
  name: string,
  description: string,
}

export interface TitleProps {
  title: string[]
  span1?: string[]
  span2?: string[]
  description?: string
  center?: boolean
  btn?: string
}

export interface IBlogItem {
  id: number
  title: string
  date: string
  img: string
  btn: string
}