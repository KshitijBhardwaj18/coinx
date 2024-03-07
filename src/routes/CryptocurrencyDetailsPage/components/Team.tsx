import {team} from "../../../constants"

export default function Team() {
    return (
      <section className="flex flex-col justify-center items-start bg-foreground rounded-xl p-6 gap-2 w-full">
        <h3 className="text-[25px] font-semibold text-black">Team</h3>
        <p className="text-[14px] font-normal text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dolorem enim
         saepe molestias tenetur provident laborum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, recusandae.
        </p>
        <div className="flex flex-col justify-start items-center gap-4 w-full">
            {team.map((t,i)=>(
                <div key={i} className="flex mobile:flex-col justify-center items-center bg-light_blue mobile:py-4 py-2 px-4 w-full mobile:gap-4 gap-8 rounded-lg">
                    <div className="flex  flex-col justify-center items-center gap-1 min-w-[110px]">
                        <img src={t.image} alt="img" className="w-[110px] h-[110px]" />
                        <p className="text-[14px] font-medium text-black">{t.name}</p>
                        <p className="text-[12px] font-normal text-gray">Designation here</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <p className="text-[12px] font-normal text-black">{t.details}</p>
                    </div>
                </div>
            ))}
        </div>
      </section>
    );
  }
  