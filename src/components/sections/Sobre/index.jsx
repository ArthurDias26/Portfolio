import { useState } from "react"

import Title from "../../layout/Title"
import Icon from "../../layout/Icon"
import Button from "../../layout/Button"

import { FaLinkedin, FaGithub, FaReact, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa6"
import { IoDocumentText, IoLogoJavascript } from "react-icons/io5"
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiTypescript } from "react-icons/si"

export default function Sobre() {

    const [technologies, settechnologies] = useState({})

    const technologiesData = {
        reactjs: {
            name: 'reactjs',
            desc: 'O React é uma biblioteca JavaScript de código aberto desenvolvida pelo Facebook, amplamente utilizada para a construção de interfaces de usuário (UIs) interativas e dinâmicas. Baseado em componentes reutilizáveis, o React permite criar aplicações modulares e eficientes, onde cada componente representa uma parte isolada da interface.',
            link: 'https://react.dev'
        },
        tailwind: {
            name: 'tailwind',
            desc: 'O Tailwind CSS é um framework CSS utilitário que permite a criação de interfaces de usuário rápidas e personalizáveis. Diferente de frameworks tradicionais, o Tailwind não fornece componentes prontos, mas sim classes utilitárias pré-definidas que podem ser combinadas diretamente no HTML para estilizar elementos.',
            link: 'https://tailwindcss.com/'
        },
        javascript: {
            name: 'javascript',
            desc: 'O JavaScript é uma linguagem de programação de alto nível, leve e amplamente utilizada para o desenvolvimento web. Originalmente criada para adicionar interatividade às páginas web, ela agora é uma das linguagens mais populares e versáteis, podendo ser usada tanto no front-end quanto no back-end, por meio de ambientes como o Node.js.',
            link: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript'
        },
        next: {
            name: 'next',
            desc: 'Next.js é uma estrutura da web de desenvolvimento front-end React de código aberto criada por Vercel que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para aplicativos da web baseados em React.',
            link: 'https://nextjs.org/'
        },
        typeScript: {
            name: 'typescript',
            desc: 'TypeScript é um superconjunto de JavaScript, ou seja, um conjunto de ferramentas e formas mais eficientes de escrever código JavaScript, adicionando recursos que não estão presentes de maneira nativa na linguagem.',
            link: 'https://www.typescriptlang.org/'
        },
        git: {
            name: 'git',
            desc: 'O Git é um sistema de controle de versão distribuído que permite rastrear alterações no código, colaborar em equipe e gerenciar o histórico do projeto. Ele facilita o trabalho com ramificações (branches), mesclagem de mudanças e reversão de versões, sendo essencial para o desenvolvimento de software em equipe.',
            link: 'https://git-scm.com/docs/git/pt_BR'
        }
    }

  return (
    <div id="About" className="h-screen min-h-max pb-5 mb-10 text-white bg-gradient-to-tr from-blue to-fuchsia-950 shadow-[0px_0px_20px_15px_rgba(138,_93,_178,_1)]">

        <Title text={'SOBRE MIM'} color="white"/>

        <div className="flex justify-center items-center min-h-[80%] max-tbsm:flex-col">
            <div className="w-1/2 max-tbsm:w-4/5 max-mbsm:w-full max-mbsm:px-[3.5vw]" data-aos="fade-right" data-aos-delay="100">

                <p className="m-auto w-4/5 text-center text-2xl mt-14 max-tbxl:text-[22px] max-mbxl:text-lg max-mbxl:w-[92%]
                max-mbsm:w-full max-mbsm:text-[17px]">
                    Arthur Barbosa Dias, 18 anos, estudante de Análise e Desenvolvimento de Sistemas, em busca da primeira oportunidade como Desenvolvedor Front-End com foco em construir interfaces modernas e responsivas. Sou comprometido com aprendizado contínuo, possuo facilidade para trabalhar em equipe e estou motivado a contribuir para o desenvolvimento de soluções inovadoras.
                </p>

                <div className="flex justify-center items-center mt-6 gap-6">
                    <Icon element={<FaLinkedin/>} link={'https://www.linkedin.com/in/arthur-barbosa-dias/'} extraClass={'text-[46px] max-tbxl:text-[40px] max-mbxl:text-[34px]'}/>
                    <Icon element={<FaGithub/>} link={'https://github.com/ArthurDias26'} extraClass={'text-[46px] max-tbxl:text-[40px] max-mbxl:text-[34px]'}/>
                    <Icon element={<IoDocumentText/>} link={'/Currículo Arthur Dias.pdf'} download={"Currículo Arthur Dias.pdf"} extraClass={'text-[46px] max-tbxl:text-[40px] max-mbxl:text-[34px]'}/>
                </div>
            </div>

            <div className="w-1/2 max-tbsm:w-4/5 max-mbsm:w-full max-mbsm:px-[3.5vw]" data-aos="fade-left" data-aos-delay="100">
                <h3 className="text-center text-4xl font-bold mt-20 mb-6 max-tbxl:text-3xl max-mbxl:mt-12 max-mbxl:text-2xl max-mbsm:text-xl">
                    Tecnologias que Utilizo:
                </h3>

                <div className="grid grid-cols-3 grid-rows-2 w-max gap-10 m-auto">
                    <button onClick={() => {settechnologies(technologiesData.reactjs);}}>
                        <Icon element={<FaReact/>} activated={technologies.name == 'reactjs' ? true : false}
                         hoverColor="cyan" extraClass={'text-6xl max-tbxl:text-[54px] max-mbxl:text-[48px]'}/>
                    </button>

                    <button onClick={() => {settechnologies(technologiesData.next);}}>
                        <Icon element={<RiNextjsFill/>} activated={technologies.name == 'next' ? true : false}
                         hoverColor="black" extraClass={'text-6xl max-tbxl:text-[54px] max-mbxl:text-[48px]'}/>
                    </button>
                    
                    <button onClick={() => {settechnologies(technologiesData.tailwind);}}>
                        <Icon element={<RiTailwindCssFill/>} activated={technologies.name == 'tailwind' ? true : false}
                         hoverColor="cyan" extraClass={'text-6xl max-tbxl:text-[54px] max-mbxl:text-[48px]'}/>
                    </button>
                    
                    <button onClick={() => {settechnologies(technologiesData.javascript);}}>
                        <Icon element={<IoLogoJavascript/>} activated={technologies.name == 'javascript' ? true : false}
                         hoverColor="yellow" extraClass={'text-6xl max-tbxl:text-[54px] max-mbxl:text-[48px]'}/>
                    </button>
                    
                    <button onClick={() => {settechnologies(technologiesData.typeScript);}}>
                        <Icon element={<SiTypescript/>} activated={technologies.name == 'typescript' ? true : false}
                         hoverColor="blue" extraClass={'text-[58px] max-tbxl:text-[48px] max-mbxl:text-[42px]'}/>
                    </button>
                    
                    <button onClick={() => {settechnologies(technologiesData.git);}}>
                        <Icon element={<FaGitAlt/>} activated={technologies.name == 'git' ? true : false}
                         hoverColor="orange" extraClass={'text-6xl max-tbxl:text-[54px] max-mbxl:text-[48px]'}/>
                    </button>
                    
                </div>

                <p className="text-center m-auto min-h-28 w-2/3 text-lg my-6 max-tbxl:text-sm max-tbsm:min-h-16 max-mbxl:w-[92%]
                max-mbsm:w-full max-mbsm:text-xs">
                    {technologies.desc ? technologies.desc : 'Clique em algum ícone e veja sua descrição!'}
                </p>

                <div className="flex justify-center items-end">
                    <Button text={'Ver documentação'} link={technologies.link} external={true} disabled={technologies.link ? false : true}/>
                </div>

            </div>
        </div>
        
        
    </div>
  )
}

