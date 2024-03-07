import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useApiCall from "../../hooks/useApiCall";
import { deepCompare } from "../../utils";

import Hero from "./components/Hero"






export default function CryptocurrencyDetailsPage() {

  const { id } = useParams();
  const navigate = useNavigate();

  const coininfo = useApiCall(`/coins/${id}`);

  useEffect(() => {
    if (coininfo.data && deepCompare(coininfo.data, {})) {
      navigate("/error");
    }
  }, [coininfo.data]);


    const info = useApiCall("/search/trending");
  
    useEffect(() => {
      if (info.data && deepCompare(info.data, {})) {
        navigate("/error");
      }
    }, [info.data]);

    console.log(info.data)


  return (
    <>
      <div className="flex flex-col justify-start items-start bg-background mobile:top-[80px] widescreen:top-[90px] paddingx w-full absolute mt-2">
        <div className="flex justify-center items-center gap-1">
          <p className="text-[14px] text-gray">Cryptocurrencies</p>
          <span className="text-[25px] text-black font-normal">&raquo;</span>
          <p className="text-[14px] text-black">{id && id?.charAt(0).toUpperCase() + id?.slice(1)}</p>
        </div>
        <div className="flex mobile:flex-col justify-between mobile:gap-5 widescreen:gap-10 items-start w-full mt-3 ">
          <div className="flex flex-col widescreen:w-[65%] w-full gap-6">
            <Hero symbol={coininfo?.data?.symbol || ""} logo={coininfo?.data?.image?.thumb || ""}/>
            
            
          </div>
          <div className="flex widescreen:w-[35%] w-full">
            
          </div>
        </div>
      </div>
    </>
  );
}
