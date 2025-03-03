import Title from "../../layout/Title"
import Project from "../../layout/Project"
import Icon from "../../layout/Icon";

import FrreToFunImage from '../../../assets/images/projects/Free to Fun.png'
import FrreToFunCelImage from '../../../assets/images/projects/Free to fun cel.png'
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";


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

        <Project projectName='FREE TO FUN' image={FrreToFunImage} celImage={FrreToFunCelImage} 
        icons={[
          <Icon element={<FaReact/>} extraClass={'text-[56px] text-cyan-500'} hoverColor={false}/>,
          <Icon element={<IoLogoJavascript/>} extraClass={'text-[56px] text-yellow-400'} hoverColor={false}/>,
          <Icon element={<FaHtml5/>} extraClass={'text-[56px] text-orange-500'} hoverColor={false}/>,
          <Icon element={<FaCss3Alt/> } extraClass={'text-[56px] text-blue'} hoverColor={false}/>]}
        description={'O Free to Fun é uma plataforma dedicada a ajudar os apaixonados por games a descobrir os melhores jogos gratuitos disponíveis. Nosso objetivo é tornar a busca por diversão acessível e personalizada, oferecendo ferramentas para pesquisa e recomendação de jogos que se adequem ao seu estilo e preferência.'}
        />
        
    </div>
  )
}
