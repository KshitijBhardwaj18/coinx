import Fundamental from "./Fundamental";
import { Horizonbar } from "./Horizonbar";


export default function Performance() {
    return (
      <section className="flex flex-col justify-center items-start bg-foreground rounded-xl p-6 gap-2 w-full">
        <h3 className="text-[25px] font-semibold text-black">Performance</h3>
        <div className="flex flex-col justify-center items-center w-full gap-4">
            <Horizonbar lowtitle={"Today's Low"} lowvalue={"46,930.22"} hightitle={"Today's High"} highvalue={"49,343.83"}/>
            <Horizonbar lowtitle={"52W Low"} lowvalue={"16,930.22"} hightitle={"52W High"} highvalue={"49,743.83"}/>
        </div>
        <div className="flex justify-center items-center gap-2">
            <h2 className="text-[20px] font-medium text-gray mt-2 ">Fundamentals</h2>
            <div className=" flex justify-center items-center w-4 h-4 rounded-full text-[10px] bg-gray text-foreground ">i</div>
        </div>
        <div className="flex mobile:flex-col justify-between mobile:gap-4 gap-8 items-start w-full">
            <div className="flex flex-col justify-evenly items-center gap-4  mobile:w-full w-1/2 ">
                <Fundamental title={'Bitcoin Price'} value={'$16,815.46'}/>
                <Fundamental title={'24h Low / 24h High'} value={'$16,382.07 / $16,874.12'}/>
                <Fundamental title={'7d Low / 7d High'} value={'$16,382.07 / $16,874.12'}/>
                <Fundamental title={'Trading Volume'} value={'$23,249,202,782'}/>
                <Fundamental title={'Market Cap Rank'} value={'#1'}/>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 mobile:w-full w-1/2 ">
                <Fundamental title={'Market Cap'} value={'$323,507,290,047'}/>
                <Fundamental title={'Market Cap Dominance'} value={'38.343%'}/>
                <Fundamental title={'Volume / Market Cap'} value={'0.0718'}/>
                <Fundamental title={'All-Time High'} value={'$69,044.77 | -75.6% | Nov 10, 2021 (about 1 year)'}/>
                <Fundamental title={'All-Time Low'} value={'$67.81 | 24729.1% | Jul 06, 2013 (over 9 years)'}/>
            </div>
        </div>
      </section>
    );
  }
  