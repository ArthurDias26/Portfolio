
export default function Button({text, link, external=false, disabled=false, submit=false, extraClass}) {
  return (
    <button className={`py-2 px-10 rounded-3xl font-bold text-lg bg-purple text-white transition duration-500 shadow-lg shadow-purple/60
     hover:bg-fuchsia-800 hover:shadow-fuchsia-800/60 ${extraClass} 
     ${disabled && '!bg-[#b8b8b8] shadow-transparent pointer-events-none select-none'}
      max-mbsm:py-1.5 px-8 text-base
     `} disabled={disabled} type={submit ? 'submit' : 'button'}>
        <a href={link} target={`${external ? '_blank': '_self'}`}>
            {text}
        </a>
    </button>
  )
}
