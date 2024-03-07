import { Recommendedcard } from "./Recommendedcard";



export default function Recommended({data}:any) {

    return (
      <section className="flex flex-col justify-center items-start bg-foreground rounded-xl p-6 gap-4 w-full">
        <h3 className="text-[20px] font-[600] text-[#202020]">You May Also Like </h3>
        <Recommendedcard data={data}/>
        <h3 className="text-[20px] font-[600] text-[#202020]">Trending Coins</h3>
        <Recommendedcard data={data}/>
      </section>
    );
  }
  