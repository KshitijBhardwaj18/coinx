import useApiCall from "../../../hooks/useApiCall";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deepCompare } from "../../../utils";
import TradingViewWidget from "./Chart";

export default function Hero({symbol,logo,rank}: {
  symbol: string;
  logo: string;
  rank: number;
}) {
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

  const data = id != undefined ? info.data?.[id] : undefined;

  console.log(data);

  return (
    <>
    <div className="flex pl-1 sm:hidden items-center gap-2">
        <img src={logo} alt="symbol" className="w-[40px] h-[40px] rounded-full" />
        <h3 className="text-[25px] md:text-[20px] font-semibold text-black">
          {id && id?.charAt(0).toUpperCase() + id?.slice(1)}
        </h3>
        <p className="text-[14px] md:text-[14px] font-[600] text-[#5D667B]">
          {symbol.toUpperCase()}
        </p>
        <div className="flex justify-center items-center px-3 py-2 rounded-lg bg-[#808A9D] ml-4">
          <span className="text-[16px] md:text-[14px] text-foreground">
            Rank #{rank}
          </span>
        </div>
      </div>
    <section className="flex flex-col justify-center items-start bg-foreground rounded-xl p-6 gap-2 w-full">
      <div className="hidden sm:flex justify-center items-center gap-1">
        <img src={logo} alt="symbol" className="w-[40px] h-[40px] rounded-full" />
        <h3 className="text-[25px] md:text-[20px] font-semibold text-black">
          {id && id?.charAt(0).toUpperCase() + id?.slice(1)}
        </h3>
        <p className="text-[14px] flex flex-col justify-center md:text-[14px] font-[700] text-[#5D667B]">
          {symbol.toUpperCase()}
        </p>
        <div className="flex justify-center items-center px-3 py-2 rounded-xl bg-[#808A9D] ml-4">
          <span className="text-[16px] md:text-[14px] text-foreground">
            Rank #{rank}
          </span>
        </div>
      </div>
      <div className="flex justify-center items-start gap-4 sm:mt-4">
        <div className="flex flex-col justify-center items-start">
          <div className="flex justify-center items-center gap-6">
            <span className="text-[28px] md:text-[28px] font-[600] text-[#0B1426]">
              ${data?.usd.toLocaleString()}
            </span>
            <div className=" flex justify-center items-center gap-2">
              <span
                className={`text-[14px]  font-mediu  rounded-md ${
                  data?.usd_24h_change &&
                  data?.usd_24h_change < 0
                    ? "text-primary bg-light_red"
                    : "text-secondary bg-green"
                }`}
              >
                {data?.usd_24h_change && data?.usd_24h_change < 0 ? (
                  <span>&#9660;</span>
                ) : (
                  <span>&#9650;</span>
                )}
                {data?.usd_24h_change?.toFixed(2)}%
              </span>
              <span className="text-[14px] md:text-[12px] font-medium ml-3 text-[#5D667B]">
                (24H)
              </span>
            </div>
          </div>
          <span className="text-[16px] md:text-[14px] font-medium text-black">
            &#8377; {data?.inr.toLocaleString()}
          </span>
        </div>
      </div>
      <hr className="border-[#e3dfdf] w-full  " />
      <div className="flex justify-center items-center w-full h-[500px]">
        {symbol && <TradingViewWidget symbol={symbol} />}
      </div>
    </section>
    </>
  );
}
