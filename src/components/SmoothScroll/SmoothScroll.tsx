import { useEffect, useRef, useState } from "react"
import { motion as m, useMotionValueEvent, useScroll, useSpring, useTransform } from "framer-motion"

interface SmoothScrollProps {
  children: React.ReactNode
}

const SmoothScroll = ({ children }: SmoothScrollProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const contentRef = useRef<HTMLDivElement>(null)
  const [contentHeight, setContentHeight] = useState(0)
  const [windowHeight, setWindowHeight] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      contentRef.current && setContentHeight(contentRef.current.scrollHeight)
      setWindowHeight(window.innerHeight)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [contentRef])

  // Intercapt normal scroll and animate to the next section
  const { scrollYProgress } = useScroll()
  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.1,
    stiffness: 80,
    damping: 20,
    restDelta: 0.001,
  })

  useMotionValueEvent(smoothProgress, 'change', (latest) =>  {
    if (latest === 0) {
      setIsLoading(false)
    }
  })

  const y = useTransform(smoothProgress, value => {
    return value * -(contentHeight - windowHeight)
  })

  return (
    <>
      <div style={{ height: contentHeight }} />
      <m.div
        className="w-screen fixed top-0 flex-col transition-opacity duration-200 ease-in-out"
        style={{ y: isLoading ? 0 : y, opacity: isLoading ? 0 : 1 }}
        ref={ contentRef }
      >
        { children }
      </m.div>
    </>
  )
}

export { SmoothScroll }