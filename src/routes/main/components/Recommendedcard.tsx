import { useRef } from "react";

import { twMerge } from "tailwind-merge";

interface cointype {
  item: {
    id: string;
    name: string;
    symbol: string;
    thumb: string;
    data: {sparkline: string; price: string; price_change_percentage_24h: { usd: number } };
    
  };
}

export function Recommendedcard({data}:any) {
  const scrollRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  function scroll(direction: string) {
    scrollRef.current.scrollBy({
      left: 490 * (direction == "left" ? -1 : 1),
      behavior: "smooth",
    });
  }
 

  return (
    <div className="flex w-full relative">
      <div
        className="flex w-max overflow-x-scroll scroll_style gap-3"
        ref={scrollRef}
      >
        {data?.coins?.map((d: cointype) => (
          <div
            key={d?.item?.id}
            className={twMerge(
              `flex flex-col justify-center items-start p-5 gap-2 bg-foreground min-w-[300px] rounded-lg  border-[#E3E3E3] border-[1px]`,
              d.item.data.price.includes("sub title") && "hidden"
            )}
          >
            <div className="flex justify-start items-center gap-1">
              <img
                src={d?.item?.thumb}
                alt="img"
                className="w-6 h-6 rounded-full"
              />
              <h2 className="text-[14px] font-normal text-black">
                ({d?.item?.symbol})
              </h2>
              <span
                className={`text-[14px] flex font-medium ${
                  d?.item?.data?.price_change_percentage_24h?.usd < 0
                    ? "text-primary bg-light_red"
                    : "text-secondary bg-green"
                } px-1 rounded-md`}
              >
                <span
                  className={`${
                    d?.item?.data?.price_change_percentage_24h?.usd < 0
                      ? "hidden"
                      : "block"
                  }`}
                >
                  +
                </span>
                {d?.item?.data?.price_change_percentage_24h?.usd.toFixed(2)}%
              </span>
            </div>
            <span className="text-[20px] text-medium text-black">
              {d?.item?.data?.price}
            </span>
            <img
              src={d?.item?.data?.sparkline}
              alt="img"
              className="w-full h-full"
            />
          </div>
        ))}
      </div>
      <div className="flex select-none justify-between items-center w-full p-3 absolute bottom-[30%] pointer-events-none">
        <div
          className="flex justify-center items-center w-[30px] h-[30px] rounded-full bg-foreground pointer-events-auto cursor-pointer shadow-md"
          onClick={() => scroll("left")}
        >
          <span className="text-[25px] text-black font-medium">&lt;</span>
        </div>
        <div
          className="flex justify-center items-center w-[30px] h-[30px] rounded-full bg-foreground pointer-events-auto cursor-pointer shadow-md"
          onClick={() => scroll("right")}
        >
          <span className="text-[25px] text-black font-medium">&gt;</span>
        </div>
      </div>
    </div>
  );
}
