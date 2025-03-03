import Icon from "../../layout/Icon"
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import Button from "../../layout/Button";

export default function Introduction() {
  return (
    <div className="w-full h-screen pl-36 flex flex-col justify-center items-start bg-gradient-to-tr from-darkBlue to-purple
     text-white select-none shadow-[0px_0px_20px_15px_rgba(138,_93,_178,_1)]
       max-tbxl:pl-24 max-tbsm:pl-16 max-mbxl:pl-12 max-mbsm:pl-6
     ">
        <div className="">
            <h3 className="text-3xl font-openSans max-tbsm:text-2xl max-mbxl:text-lg max-mbsm:text-base">
                Olá 👋 eu sou Arthur Dias
            </h3>

            <h1 className="pl-3">
                <div className="flex items-end">
                    <span className="text-8xl font-openSans font-bold underline pl-2 w-max max-tbxl:text-7xl max-tbsm:text-[54px]
                     max-mbxl:text-[44px] max-mbsm:text-[34px] max-mbsm:pl-1">
                        FRONT-END
                    </span>
                    
                    <span className="ml-5 w-max flex gap-3 max-mbxl:ml-2 max-mbsm:gap-1">
                        <Icon element={<FaLinkedin/>} link={'https://br.linkedin.com/'} extraClass={'max-tbsm:text-5xl max-mbxl:text-3xl max-mbsm:text-[26px]'}/>
                        <Icon element={<FaGithub/>} link={'https://github.com/ArthurDias26'} extraClass={'max-tbsm:text-5xl max-mbxl:text-3xl max-mbsm:text-[26px]'}/>
                        <Icon element={<IoDocumentText/>} link={'https://github.com/'} extraClass={'max-tbsm:text-5xl max-mbxl:text-3xl max-mbsm:text-[26px]'}/>

                    </span>
                </div>

                <br/>
                <span className="text-[144px] leading-[0.80] font-openSans font-black h-max max-tbxl:text-[118px] max-tbsm:text-[92px]
                max-mbxl:text-[72px] max-mbsm:text-[56px]">
                    DEVELOPER
                </span>
            </h1>

            <p className="font-nunito text-center text-xl w-1/2 m-auto max-tbsm:text-lg max-mbxl:text-base max-mbxl:w-2/3
             max-mbsm:text-sm max-mbsm:w-[95%] max-mbsm:max-w-[375px]">
                Tenho 18 anos, estou cursando Analise e desenvolvimento de sistemas e estou buscando a minha primeira vaga como desenvolvedor.
            </p>
        </div>

        <div className="absolute bottom-14 left-1/2 -translate-x-1/2">
            <Button text={'Veja Mais'} link={'#Projects'}/>
        </div>
    </div>
  )
}
