
export default function Title({text, color='black'}) {
  return (
    <div className={`text-center select-none py-3 text-5xl font-extrabold border-b-4 text-${color} border-${color}
          max-mbxl:text-[38px] max-mbxl:border-b-2 max-mbsm:text-[30px]`}>
        <h2 className="font-openSans">{text}</h2>
    </div>
  )
}
