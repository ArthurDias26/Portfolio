import Header from "./components/layout/Header"
import Introduction from "./components/sections/Introduction"
import Projects from "./components/sections/Projects"
import Sobre from "./components/sections/Sobre"
import Contact from "./components/sections/Contact"


export default function App() {
  return (
    <div>
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
