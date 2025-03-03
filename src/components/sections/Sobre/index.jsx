import { useState } from "react"

import Title from "../../layout/Title"
import Icon from "../../layout/Icon"
import Button from "../../layout/Button"

import { FaLinkedin, FaGithub, FaReact, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa6"
import { IoDocumentText, IoLogoJavascript } from "react-icons/io5"
import { RiTailwindCssFill } from "react-icons/ri";

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
        html: {
            name: 'html',
            desc: 'O HTML (HyperText Markup Language) é a linguagem de marcação padrão usada para estruturar e apresentar conteúdo na web. Ele define a organização dos elementos em uma página, como títulos, parágrafos, imagens, links, tabelas e formulários, utilizando uma hierarquia de tags. O HTML funciona como a base de qualquer site ou aplicação web.',
            link: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML'
        },
        css: {
            name: 'css',
            desc: 'O CSS (Cascading Style Sheets) é uma linguagem de estilo usada para definir a aparência e o layout de elementos em páginas da web. Ele permite estilizar o HTML aplicando cores, fontes, espaçamentos, alinhamentos, tamanhos e outras propriedades visuais. Com o CSS, é possível criar desde designs simples até interfaces complexas e responsivas.',
            link: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS'
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
            <div className="w-1/2 max-tbsm:w-4/5 max-mbsm:w-full max-mbsm:px-[3.5vw]">

                <p className="m-auto w-4/5 text-center text-2xl mt-14 max-tbxl:text-[22px] max-mbxl:text-lg max-mbxl:w-[92%]
                max-mbsm:w-full max-mbsm:text-[17px]">
                    Arthur Barbosa Dias, 18 anos, estudante de Análise e Desenvolvimento de Sistemas, em busca da primeira oportunidade como Desenvolvedor Front-End com foco em construir interfaces modernas e responsivas. Sou comprometido com aprendizado contínuo, possuo facilidade para trabalhar em equipe e estou motivado a contribuir para o desenvolvimento de soluções inovadoras.
                </p>

                <div className="flex justify-center items-center mt-6 gap-6">
                    <Icon element={<FaLinkedin/>} link={'https://br.linkedin.com/'} extraClass={'text-[46px] max-tbxl:text-[40px] max-mbxl:text-[34px]'}/>
                    <Icon element={<FaGithub/>} link={'https://github.com/ArthurDias26'} extraClass={'text-[46px] max-tbxl:text-[40px] max-mbxl:text-[34px]'}/>
                    <Icon element={<IoDocumentText/>} link={'https://github.com/'} extraClass={'text-[46px] max-tbxl:text-[40px] max-mbxl:text-[34px]'}/>
                </div>
            </div>

            <div className="w-1/2 max-tbsm:w-4/5 max-mbsm:w-full max-mbsm:px-[3.5vw]">
                <h3 className="text-center text-4xl font-bold mt-20 mb-6 max-tbxl:text-3xl max-mbxl:mt-12 max-mbxl:text-2xl max-mbsm:text-xl">
                    Tecnologias que Utilizo:
                </h3>

                <div className="grid grid-cols-3 grid-rows-2 w-max gap-10 m-auto">
                    <button onClick={() => {settechnologies(technologiesData.reactjs);}}>
                        <Icon element={<FaReact/>} activated={technologies.name == 'reactjs' ? true : false}
                         hoverColor="cyan" extraClass={'text-6xl max-tbxl:text-[54px] max-mbxl:text-[48px]'}/>
                    </button>
                    
                    <button onClick={() => {settechnologies(technologiesData.tailwind);}}>
                        <Icon element={<RiTailwindCssFill/>} activated={technologies.name == 'tailwind' ? true : false}
                         hoverColor="cyan" extraClass={'text-6xl max-tbxl:text-[54px] max-mbxl:text-[48px]'}/>
                    </button>
                    
                    <button onClick={() => {settechnologies(technologiesData.javascript);}}>
                        <Icon element={<IoLogoJavascript/>} activated={technologies.name == 'javascript' ? true : false}
                         hoverColor="yellow" extraClass={'text-6xl max-tbxl:text-[54px] max-mbxl:text-[48px]'}/>
                    </button>
                    
                    <button onClick={() => {settechnologies(technologiesData.html);}}>
                        <Icon element={<FaHtml5/>} activated={technologies.name == 'html' ? true : false}
                         hoverColor="orange" extraClass={'text-6xl max-tbxl:text-[54px] max-mbxl:text-[48px]'}/>
                    </button>
                    
                    <button onClick={() => {settechnologies(technologiesData.css);}}>
                        <Icon element={<FaCss3Alt/>} activated={technologies.name == 'css' ? true : false}
                         hoverColor="blue" extraClass={'text-6xl max-tbxl:text-[54px] max-mbxl:text-[48px]'}/>
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

