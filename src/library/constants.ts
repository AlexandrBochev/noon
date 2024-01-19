// Styles
export const FONT_STYLES_SILVER = "bg-clip-text text-transparent bg-gradient-to-t from-white to-white/40"
export const FONT_STYLES_GOLD = "bg-clip-text text-transparent bg-gradient-to-r from-[#F0C78E] to-[#E98F81]"
export const FONT_STYLES_GOLD_HOVER = "group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r from-[#F0C78E] to-[#E98F81] transition-all duration-500"
export const CARD_GRADIENT = "mb-7.5 lg:mb-0 p-4 sm:p-8 xl:p-11 relative w-full h-full flex flex-col items-center justify-center overflow-hidden border border-transparent rounded-[1.25rem] lg:rounded-[1.875rem] before:bg-gradient-to-b before:from-[#342C3F]/70 before:to-[#3E3250]/50 before:border-inherit before:border before:rounded-[1.25rem] before:lg:rounded-[1.875rem] before:absolute before:inset-0 before:z-10 before:bg-origin-border before:[mask-composite:exclude] gradient"

// Motion Variants
export const TITLE_MOTION = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
}

export const MEET_MOTION = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { delay: 0.2,  duration: 0.8, ease: 'easeOut' },
}

export const MEET_MOTION2 = {
  initial: { opacity: 0, rotate: -90, scale: 0.8 },
  whileInView: { opacity: 1, rotate: 0, scale: 1 },
  transition: { delay: 0.8,  duration: 0.8, ease: 'easeOut' },
}

export const MEET_MOTION3 = {
  initial: { opacity: 0, rotate: 90, scale: 0.8 },
  whileInView: { opacity: 1, rotate: 0, scale: 1 },
  transition: { delay: 0.6,  duration: 0.8, ease: 'easeOut' },
}

export const MEET_MOTION4 = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
}

export const MEET_MOTION5 = {
  initial: { opacity: 0, x: 20 },
  whileInView: { opacity: 1, x: 0 },
}

export const CARDS = {
  initial: { opacity: 0, x: 40, y: 20 },
  whileInView: { opacity: 1, x: 0, y: 0 },
  transition: { delay: 0.2, duration: 0.5, ease: "easeInOut" }
}

export const BLOCK_ITEM_1 = {
  initial: { opacity: 0, },
  whileInView: { opacity: 1, },
  transition: { delay: 1.2, duration: 0.8, ease: "easeInOut" }
}

export const BLOCK_ITEM_2 = {
  initial: { opacity: 0, x: 20, scale: 0, },
  whileInView: { opacity: 1, x: 0, scale: 1, },
}

export const BLOCK_ITEM_3 = {
  initial: { opacity: 0, scale: 0.8, },
  whileInView: { opacity: 1, scale: 1, },
  transition: { delay: 1, duration: 0.5, ease: "easeInOut" }
}

export const WORKFORC_1 = {
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
  transition: { delay: 0.2, duration: 0.5, ease: "easeInOut" }
}

export const WORKFORC_2 = {
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 0.65, x: 0 },
  transition: { delay: 0.4, duration: 0.5, ease: "easeInOut" }
}

export const WORKFORC_3 = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { delay: 0.6,  duration: 0.8, ease: 'easeOut' },
}