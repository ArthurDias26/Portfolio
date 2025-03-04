import Button from "../Button"

export default function Project({projectName, image, celImage, icons, description}) {
  return (
    <div className="pl-36 mt-16 mb-32 max-tbsm:pl-0">
        <h3 className="font-bold  font-openSans text-4xl mb-4 max-tbsm:pl-24 max-mbxl:text-[32px] max-mbsm:text-[26px] max-mbsm:pl-10" data-aos="fade-right" data-aos-delay="100">
            {projectName}
        </h3>

        <div className="flex justify-around items-center w-full max-tbsm:flex-col max-tbsm:gap-16">

            <div className="w-[55%] relative max-tbxl:w-[45%] max-tbsm:w-[55%]" data-aos="fade-right" data-aos-delay="100">
                <img className="w-full drop-shadow-[0px_5px_15px_rgba(0,0,0,0.45)] rounded-t-3xl" src={image}
                 alt={`Imagem representativa do projeto ${projectName}`}/>
                 
                <img className="w-1/4 absolute bottom-[20%] left-0 -translate-x-1/2 drop-shadow-[0px_3px_8px_rgba(0,0,0,0.45)]"
                 src={celImage} alt={`Imagem representativa do projeto ${projectName}`} />
            </div>

            <div className="w-[30%] max-tbxl:w-[35%] max-tbsm:w-[55%] max-mbsm:w-4/5" data-aos="fade-left" data-aos-delay="100">
                <h4 className="font-bold text-3xl text-center mb-6 min-w-max max-mbxl:text-2xl max-mbsm:text-xl">Tecnologias Utilizadas</h4>

                <div className="flex gap-3 justify-center">
                    {icons.map((icon, index) => (
                        <span key={index}>{icon}</span>
                    ))}
                </div>

                <div className="flex justify-center items-center my-5">
                    <Button text={'Ir para o site'} />
                </div>

                <p className="text-center max-tbxl:text-sm">{description}</p>

            </div>
        </div>
    </div>
  )
}
