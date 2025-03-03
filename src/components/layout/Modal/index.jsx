import ReactDom from 'react-dom'
import Button from '../Button'

export default function Modal({isVisible, Title, Text, onClose, extraClass}) {
  if(!isVisible){
    return null
  }

  return (
    ReactDom.createPortal(
    <div className={`fixed z-50 top-0 left-0 w-full h-screen flex justify-center items-center bg-black/50`}>
        <div className={` ${extraClass} flex flex-col items-center gap-4 px-14 py-6 bg-white rounded-2xl`}>
            <h2 className='text-4xl font-semibold'>{Title}</h2>
            <p>{Text}</p>
            <button onClick={onClose} className='py-2 px-6 bg-blue rounded-xl text-white font-bold text-lg transition duration-300
             hover:bg-darkBlue'>
                Fechar
            </button>
        </div>
    </div>,
    document.querySelector('#portal')
    )
  )
}
