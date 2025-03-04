import Title from "../../layout/Title"
import Project from "../../layout/Project"
import Icon from "../../layout/Icon";

import FrreToFunImage from '../../../assets/images/projects/Free to Fun.png'
import FrreToFunCelImage from '../../../assets/images/projects/Free to fun cel.png'
import PetshopImage from '../../../assets/images/projects/Petshop.png'
import PetshopCelImage from '../../../assets/images/projects/Petshop cel.png'
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { SiShadcnui } from "react-icons/si";

export default function Projects() {
  return (
    <div className="mt-4" id='Projects'>
        <Title text={'PROJETOS'}/>

        <Project projectName='FREE TO FUN' image={FrreToFunImage} celImage={FrreToFunCelImage} 
        icons={[
          <Icon element={<FaReact/>} extraClass={'text-[56px] text-cyan-500'} hoverColor={false}/>,
          <Icon element={<IoLogoJavascript/>} extraClass={'text-[56px] text-yellow-400'} hoverColor={false}/>,
          <Icon element={<FaHtml5/>} extraClass={'text-[56px] text-orange-500'} hoverColor={false}/>,
          <Icon element={<FaCss3Alt/> } extraClass={'text-[56px] text-blue'} hoverColor={false}/>]}
        description={'O Free to Fun é uma plataforma dedicada a ajudar os apaixonados por games a descobrir os melhores jogos gratuitos disponíveis. Nosso objetivo é tornar a busca por diversão acessível e personalizada, oferecendo ferramentas para pesquisa e recomendação de jogos que se adequem ao seu estilo e preferência.'}
        />

        <Project projectName='FREE TO FUN' image={PetshopImage} celImage={PetshopCelImage} 
        icons={[
          <Icon element={<RiNextjsFill />} extraClass={'text-[56px] text-black'} hoverColor={false}/>,
          <Icon element={<BiLogoTypescript/>} extraClass={'text-[56px] text-blue'} hoverColor={false}/>,
          <Icon element={<RiTailwindCssFill/>} extraClass={'text-[56px] text-cyan-500'} hoverColor={false}/>,
          <Icon element={<SiShadcnui/> } extraClass={'text-[48px] text-black'} hoverColor={false}/>]}
        description={'Este projeto é uma simulação de uma landing page para um petshop, desenvolvida com foco mobile first e um design responsivo. A plataforma foi cuidadosamente otimizada para garantir um desempenho ágil e uma excelente performance em SEO, contribuindo para um carregamento rápido e uma melhor visibilidade nos mecanismos de busca.'}
        />
        
    </div>
  )
}
