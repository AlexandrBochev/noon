import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer"
import { Routes, Route } from "react-router-dom"
import { useEffect, useLayoutEffect, useState } from "react"
import { gsap } from "gsap"
import { MainContext } from "./providers/MainContext"
import { Home } from "./pages/Home/Home"
import { Blog } from "./pages/Blog/Blog"
import { BlogContent } from "./pages/Blog/BlogContent/BlogContent"
import { TermsOfUse } from "./pages/TermsOfUse/TermsOfUse"

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [posY, setPosY] = useState<number>(0);

  useEffect(() => {
    const mouseMove = (e: any) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  useLayoutEffect(() => {
    if (ScrollSmoother && window.innerWidth > 1024) {
      ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 2, // how long (in seconds) it takes to "catch up" to the native scroll position
        onUpdate(self) {
          if (self?.scrollTrigger?.end && self?.scrollTrigger?.progress) {
            setPosY(self.scrollTrigger.end * self.scrollTrigger.progress);
          }
        },
      });
    }
  }, []);

  return (
    <MainContext.Provider value={{ posY, mousePosition, }}>
      <div id="smooth-wrapper" className="relative w-full h-full overflow-hidden">
        <div id="smooth-content">
          <Header />
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/blog" element={ <Blog /> } />
            <Route path="/blog/:_id" element={ <BlogContent /> } />
            <Route path="/terms-of-use" element={ <TermsOfUse /> } />
          </Routes>
          <Footer />
        </div>
      </div>
    </MainContext.Provider>
  );
}
