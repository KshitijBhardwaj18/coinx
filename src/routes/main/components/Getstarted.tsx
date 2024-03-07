import started from "../../../assets/images/started.png"

interface cointype {
    item: {
        id: string;
        name: string;
        symbol: string;
        thumb: string;
        data: { sparkline: string; price: string; price_change_percentage_24h: { usd: number } };
        
      };
}



export default function Getstarted({data}:any) {


    return (
      <section className="flex flex-col justify-center items-center gap-5">
        <div className="flex flex-col justify-evenly items-center bg-blue rounded-xl p-10 gap-3">
            <h3 className="text-[25px] text-center font-semibold text-foreground max-w-[300px]">Get Started with KoinX for FREE</h3>
            <p className="text-[15px] text-center font-normal  text-foreground ">With our range of features that you can equip for free, KoinX allows you
             to be more educated and aware of your tax reports</p>
            <img src={started} alt="started" />
            <button type='button' className=' px-5 py-2 font-medium text-[18px] rounded-lg  text-black bg-foreground outline-none border-none'>
            Get Started for FREE &#8594;
            </button>
        </div>
        <div className="flex flex-col justify-center items-start bg-foreground rounded-xl p-6 gap-6 w-full">
            <h3 className="text-[25px] font-semibold text-black"> Trending Coins (24H)</h3>
            <div className="flex flex-col justify-center items-start gap-6 w-full">
                {data?.coins?.slice(0,3)?.map((d:cointype)=>(
                    <div key={d?.item?.id} className="flex justify-between items-center w-full">
                        <div className="flex justify-center items-center gap-4">
                        <img src={d?.item?.thumb} alt="symbol" className="w-6 h-6 rounded-full" />
                        <p className="text-[16px] font-medium text-black">{d?.item?.name}({d?.item?.symbol})</p>
                        </div>
                        <span className={`text-[14px] w-[80px] font-mediu px-2 rounded-md ${d?.item?.data?.price_change_percentage_24h?.usd < 0 ? 'text-primary bg-light_red': 'text-secondary bg-green'}`}>
                            {d?.item?.data?.price_change_percentage_24h?.usd < 0 ? (<span>&#9660;</span>) : (<span>&#9650;</span>)}
                            {d?.item?.data?.price_change_percentage_24h?.usd.toFixed(2)}%
                        </span>
                    </div>
                ))}

            </div>

        </div>
        
      </section>
    );
  }
  