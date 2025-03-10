import Header from "./components/layout/Header"
import Introduction from "./components/sections/Introduction"
import Projects from "./components/sections/Projects"
import Sobre from "./components/sections/Sobre"
import Contact from "./components/sections/Contact"
import { useEffect } from "react"
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function App() {

  useEffect(() => {
    Aos.init({
        duration: 500,
        once: true
    })
}, [])

  return (
    <div className="max-w-[100vw] overflow-hidden">
      <Header/>
      <main>
        <Introduction/>
        <Projects/>
        <Sobre/>
        <Contact/>
      </main>
    </div>
  )
}
