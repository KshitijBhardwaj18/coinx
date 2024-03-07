import { Recommendedcard } from "./Recommendedcard";



export default function Recommended({data}:any) {

    return (
      <section className="flex flex-col justify-center items-start bg-foreground rounded-xl p-6 gap-4 w-full">
        <h3 className="text-[25px] font-semibold text-black">You May Also Like </h3>
        <Recommendedcard data={data}/>
        <h3 className="text-[25px] font-semibold text-black">Trending Coins</h3>
        <Recommendedcard data={data}/>
      </section>
    );
  }
  