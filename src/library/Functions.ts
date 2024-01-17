// Functions
export const scrollDownToSection = (id: string) => {
  if (window.innerWidth <= 1024) {
    const target = document.getElementById(id)
    target?.scrollIntoView({ behavior: 'smooth' })
  } else if (window.innerWidth > 1024) {
    ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 2,
    }).scrollTo(`.${id}`, true, "center center")
  }
}

export const splitWords = (str: string) => str.split(/\s+/)