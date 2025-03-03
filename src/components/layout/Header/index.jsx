import { useState } from "react"

import Icon from "../Icon"

import { FaLinkedin, FaGithub } from "react-icons/fa6"
import { IoDocumentText, IoCloseSharp} from "react-icons/io5"
import { GiHamburgerMenu } from "react-icons/gi"

export default function Header() {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [showMenu, setShowMenu] = useState(false)

  window.onresize = function(){
    setScreenWidth(window.innerWidth)
}

  return (
    <header className='flex justify-end items-center py-5 pr-12 absolute top-0 left-0 w-full select-none text-white'>
        {screenWidth > 520 ? (
          <div className='flex justify-center items-center gap-6'>
            <a href="#Projects" className='text-xl hover:text-lightYellow transition'>Projetos</a>
            <a href="#About" className='text-xl hover:text-lightYellow transition'>Sobre</a>
            <a href="#Contact" className='text-xl hover:text-lightYellow transition'>Contato</a>
          </div>
        ): 
        (
          <div className="text-[28px]" onClick={() => setShowMenu(true)}>
            <GiHamburgerMenu/>
          </div>
        )}
        
        <hr className='w-full h-[2px] bg-white absolute bottom-0 left-0'/>






        <div className={`w-[70vw] h-screen fixed top-0 right-[-75vw] flex flex-col items-center justify-between py-16 bg-darkBlue z-30
                        transition-all duration-500 ${showMenu && '!right-0'}`}>

            <span className="absolute top-3 right-3 text-3xl"  onClick={() => setShowMenu(false)}>
              <IoCloseSharp/>
            </span>
          
            <div className='flex flex-col justify-center items-center gap-12 max-mbsm:gap-6'>
                <a href="#Projects" className='text-2xl font-bold hover:text-lightYellow transition max-mbsm:text-xl'>Projetos</a>
                <a href="#About" className='text-2xl font-bold hover:text-lightYellow transition max-mbsm:text-xl'>Sobre</a>
                <a href="#Contact" className='text-2xl font-bold hover:text-lightYellow transition max-mbsm:text-xl'>Contato</a>
            </div>

            <div className="flex justify-center items-center mt-6 gap-6">
              <Icon element={<FaLinkedin/>} link={'https://br.linkedin.com/'} extraClass={'text-[36px]'}/>
              <Icon element={<FaGithub/>} link={'https://github.com/ArthurDias26'} extraClass={'text-[36px]'}/>
              <Icon element={<IoDocumentText/>} link={'https://github.com/'} extraClass={'text-[36px]'}/>
           </div>
       </div>
    </header>
  )
}
