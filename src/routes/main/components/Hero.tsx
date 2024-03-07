import useApiCall from "../../../hooks/useApiCall";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deepCompare } from "../../../utils";
import TradingViewWidget from "./Chart";

export default function Hero({symbol, logo}: {symbol: string, logo: string}) {
  const { id } = useParams();
  const navigate = useNavigate();

  const info = useApiCall("/simple/price", {
    params: {
      ids: id,
      vs_currencies: "inr,usd",
      include_24hr_change: true,
    },
  });

  useEffect(() => {
    if (info.data && deepCompare(info.data, {})) {
      navigate("/error");
    }
  }, [info.data]);

  const data = id != undefined ? info.data?.[id] : undefined

  console.log(data);

  return (
    <>
    <div className="flex  flex-row sm:hidden items-center gap-2  ">
        <img src={logo} alt="symbol" className="w-[40px] h-[40px]" />
        <h3 className="text-[24px] md:text-[20px] font-[700] text-[#0B1426;
]">
          {id && id?.charAt(0).toUpperCase() + id?.slice(1)}
        </h3>
        <p className="text-[16px] md:text-[16px] font-[600] flex flex-col justify-center text-[#5D667B]">{symbol.toUpperCase()}</p>
        <div className="flex justify-center items-center px-4 py-2 rounded-xl bg-[#808A9D] ml-8">
          <span className="text-[16px] md:text-[14px] text-foreground">
            Rank #1
          </span>
        </div>
      </div>
    <section className="flex flex-col justify-center items-start bg-foreground rounded-xl h-[500px] p-4 gap-2 w-full">

      <div className="sm:flex  sm:flex-row justify-center items-center gap-2 hidden ">
        <img src={logo} alt="symbol" className="w-[40px] h-[40px]" />
        <h3 className="text-[24px] md:text-[20px] font-[700] text-[#0B1426;
]">
          {id && id?.charAt(0).toUpperCase() + id?.slice(1)}
        </h3>
        <p className="text-[16px] md:text-[16px] font-[600] flex flex-col justify-center text-[#5D667B]">{symbol.toUpperCase()}</p>
        <div className="flex justify-center items-center px-4 py-2 rounded-xl bg-[#808A9D] ml-8">
          <span className="text-[16px] md:text-[14px] text-foreground">
            Rank #1
          </span>
        </div>
      </div>
      <div className="flex justify-center items-start gap-4 sm:mt-6 ">
        <div className="flex flex-col justify-center items-start">
          <div className="flex justify-center items-center gap-6">
            <span className="text-[28px] md:text-[28px] font-inter font-[600] text-[#0B1426] leading-[38.4px]">
              ${data?.usd}
            </span>
            <div className=" flex justify-center items-center gap-10">
              <span className={`text-[14px]  font-medium px-2 rounded-md ${info?.data?.bitcoin?.usd_24h_change && info?.data?.bitcoin?.usd_24h_change < 0 ? 'text-primary bg-light_red': 'text-secondary bg-green'}`}>
                  {data?.usd_24h_change && data?.usd_24h_change < 0 ? (<span>&#9660;</span>) : (<span>&#9650;</span>)}
                  {data?.usd_24h_change?.toFixed(2)}%
              </span>
              <span className="text-[14px] md:text-[12px] font-medium text-gray">
                (24H)
              </span>
            </div>
          </div>
          <span className="text-[16px] md:text-[14px] font-medium text-black">
            &#8377; {data?.inr}
          </span>
        </div>
      </div>
      <TradingViewWidget/>
    </section>
    </>
  );
}
