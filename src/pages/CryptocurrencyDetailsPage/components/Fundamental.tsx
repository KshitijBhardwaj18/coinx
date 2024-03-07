
interface FundamentalProps{
    title:string,
    value:string
}

export default function Fundamental({title, value}:FundamentalProps){

    const parts = value.split('|').map(part => part.trim());

    return(
        <>
        <div className="flex justify-between items-center w-full h-[30px]">
            <h2 className={`text-light_gray font-medium`}>{title}</h2>
            <p className={`flex max-w-[200px] justify-end gap-1 flex-wrap text-right font-medium text-[14px]`}>
                {parts.map((part,i)=>(
                    <span key={i} className={`${i===1 ? part.charAt(0)==='-'? 'text-primary':'text-secondary' : 'text-black'}`}>{part}</span>
                ))}
            </p>
          </div>
          <hr className="border-[#e3dfdf] w-full  "/>
        </>  
    )
}