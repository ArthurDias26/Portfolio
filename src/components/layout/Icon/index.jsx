export default function Icon({element, link, hoverColor='#fde59e', extraClass, activated=false}) {

  return (
    <div  style={{'--hover-color': hoverColor }} className={`text-7xl inline-block ${hoverColor && 'hover:text-[--hover-color]'} 
    group/edit transition duration-300 relative 
    ${activated ? `pointer-events-none text-${hoverColor}` : ''}
    ${extraClass}
    `}>

        <a href={link} target="_blank" className="flex justify-center items-end">

          <span className={`group-hover/edit:-translate-y-4 transition
            ${activated && `-translate-y-4 drop-shadow-[0px_-5px_25px_rgba(255,255,255,0.95)]`}`} 
            style={{'color': activated ? hoverColor : '' }}>
            {element}
          </span>

        </a>

    </div>
  )
}
