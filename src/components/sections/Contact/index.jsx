import { useState, useRef } from "react"

import Title from "../../layout/Title"
import Input from "../../layout/Input"
import Button from "../../layout/Button"
import Modal from "../../layout/Modal"

import { Formik, Form} from "formik"
import * as yup from 'yup'

import emailjs from "@emailjs/browser"

import { HiOutlineMail } from "react-icons/hi"

export default function Contact() {

    const [emailCopied, setEmailCopied] = useState(false)
    const emailRef = useRef(null)

    const [modalVisible, setModalVisible] = useState(false)
    const [modalInfo, setModalInfo] = useState({})

    const formRef = useRef(null)

    function handleCopy(){
        const email = emailRef.current.textContent
        navigator.clipboard.writeText(email)
        setEmailCopied(true)

        setTimeout(() => setEmailCopied(false), 850)
    }
    
    function handleSubmit(values, {resetForm}){
        resetForm()
        emailjs.sendForm(import.meta.env.VITE_APP_SERVICE_ID, import.meta.env.VITE_APP_TEMPLATE_ID, formRef.current, import.meta.env.VITE_APP_PUBLIC_KEY)
        .then((data) =>{
            if(data.status === 200){
                    setModalVisible(true)
                    setModalInfo({
                        title: 'Sucesso!',
                        message: 'E-mail enviado com sucesso!'
                    })
            }
            else{
                setModalVisible(true)
                setModalInfo({
                    title: 'Erro!',
                    message: 'Ocorreu um erro, tente novamente mais tarde'
                })
            }   
        }).catch((error) => {
            setModalVisible(true)
            console.log(error)
            setModalInfo({
                title: 'Erro!',
                message: 'Ocorreu um erro, tente novamente mais tarde'
            })
        })
    }

    const schema = yup.object().shape({
        name: yup.string().required('O campo é obrigatório')
        .min(3, "O nome deve ter ao menos 3 caracteres"),

        email: yup.string().required('O campo é obrigatório')
        .email("Use um email valido"),

        topic: yup.string().required('O campo é obrigatório')
        .min(3, "O assunto deve ter ao menos 3 caracteres"),

        message: yup.string().required('O campo é obrigatório')
        .min(10, "Escreva uma mensagem com ao menos 10 caracteres"),
    })

  return (
    <div id="Contact" className="min-h-screen pt-12 flex justify-center items-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full">
            <Title text={'ENTRE EM CONTATO'}/>
        </div>

        <div className="w-full flex justify-center items-center flex-wrap 
        max-[1025px]:flex-col-reverse max-[1025px]:gap-12 max-[1025px]:py-10">

            <div className="w-9/12 flex flex-col justify-start items-center max-[1025px]:w-full" data-aos="fade-up-right" data-aos-delay="100">
                <div className="w-7/12 max-mbxl:w-4/5 border-2 border-black pl-12 pr-4 py-2 rounded-2xl relative md:pl-16">

                    <div className="h-[calc(100%_+_4px)] w-8 bg-purple absolute -left-1 -top-[2px] rounded-l-2xl md:w-12"></div>

                    <h3 className="text-center text-4xl font-bold mb-2 max-mbsm:text-2xl">Se interessou?</h3>
                    <p className=" text-center text-lg leading-tight mb-4 max-mbsm:text-base">
                        Preencha o formulário com suas informações para iniciar uma conversa via E-mail. 
                    </p>

                    <Formik
                        initialValues={{
                            name:'',
                            email:'',
                            topic: '',
                            message:''
                        }}
                        onSubmit={handleSubmit}

                        validateOnMount={true}
                        validationSchema={schema}
                    >
                        {({isValid}) => (
                            <Form ref={formRef}>
                                <Input label={'Nome'} type={'text'} name={'name'}/>
                                <Input label={'E-mail'} type={'email'} name={'email'}/>
                                <Input label={'Assunto'} type={'text'} name={'topic'}/>
                                <Input label={'Mensagem'} type={'text'} name={'message'} as="textarea"/>

                                <div className="flex justify-center items-center mt-4">
                                    <Button text={'Enviar'} submit={true} disabled={!isValid}/>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>

            <div className="w-max flex flex-col justify-center items-center select-none"  data-aos="fade-up" data-aos-delay="100">
                    <HiOutlineMail className={`text-7xl transition duration-300 ${emailCopied && 'text-green-500'}`}/>

                    <h3 className={`text-2xl font-bold mb-3 transition duration-300 ${emailCopied && 'text-green-500'}
                                   max-mbsm:text-xl`}>
                        {emailCopied ? 'E-mail Copiado!' : 'Quer o meu E-mail?'}
                        </h3>

                    <div className="w-full">
                        <p ref={emailRef} className={`w-full border-2 border-black text-center text-base px-1.5 transition duration-300
                                                    ${emailCopied && 'text-green-500'} max-mbsm:text-sm`}>
                            arthurbdias.contato@gmail.com
                        </p>

                        <button onClick={handleCopy} className={`w-full text-center text-lg text-white font-bold transition duration-300
                             ${emailCopied ? ' hover:bg-green-500 bg-green-500' : 'bg-purple hover:bg-darkBlue'}
                             max-mbsm:text-base`}>
                            Copiar E-mail
                        </button>
                    </div>
            </div>
        </div>

        <Modal isVisible={modalVisible} Title={modalInfo.title} Text={modalInfo.message} onClose={() => setModalVisible(false)}/>
    </div>
  )
}
