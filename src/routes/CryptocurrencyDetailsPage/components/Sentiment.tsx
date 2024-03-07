import { events } from "../../../constants";
import { useRef } from "react";

export default function Sentiment() {
  const scrollRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  function scroll(direction: string) {
    scrollRef.current.scrollBy({
      left: 490 * (direction == "left" ? -1 : 1),
      behavior: "smooth",
    });
  }

  return (
    <section className="flex flex-col justify-center items-start bg-foreground rounded-xl p-6 gap-2 w-full">
      <h3 className="text-[25px] font-semibold text-black">Sentiment</h3>
      <div className="flex justify-center items-center gap-2">
        <h2 className="text-[20px] font-medium text-gray mt-2">Key Events</h2>
        <div className="flex justify-center items-center w-4 h-4 rounded-full text-[10px] bg-gray text-foreground">
          i
        </div>
      </div>
      <div className="flex w-full relative">
        <div
          className="flex w-max overflow-x-scroll scroll_style gap-3"
          ref={scrollRef}
        >
          {events.map((event, i) => (
            <div
              key={i}
              className={`flex justify-center items-start p-3 gap-2 min-w-[500px] rounded-lg`}
              style={{ background: event.color }}
            >
              <img
                src={event.image}
                alt="img"
                className=" w-[50px] h-[50px] rounded-full"
              />
              <div className="flex flex-col justify-center items-start gap-2">
                <h2 className="text-[12px] font-medium text-black">
                  {event.title}
                </h2>
                <p className="text-[12px] font-normal text-light_gray">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex select-none justify-between items-center w-full p-3 absolute bottom-[30%] pointer-events-none">
          <div
            className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-foreground pointer-events-auto cursor-pointer shadow-md"
            onClick={() => scroll("left")}
          >
            <span className="text-[25px] text-black font-medium">&lt;</span>
          </div>
          <div
            className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-foreground pointer-events-auto cursor-pointer shadow-md"
            onClick={() => scroll("right")}
          >
            <span className="text-[25px] text-black font-medium">&gt;</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2">
        <h2 className="text-[20px] font-medium text-gray mt-2 ">
          Analyst Estimates
        </h2>
        <div className=" flex justify-center items-center w-4 h-4 rounded-full text-[10px] bg-gray text-foreground ">
          i
        </div>
      </div>
      <div className="flex mini:flex-col justify-between items-center gap-6 mt-2 w-full">
        <div className="flex justify-center items-center w-[100px] h-[100px] text-[30px] text-secondary rounded-full bg-light_green min-w-[100px]">
          76%
        </div>
        <div className="flex flex-col justify-center items-center gap-2 w-[70%]">
          <div className="flex justify-start items-center gap-5 w-full">
            <span className="text-[14px] font-normal text-light_gray">Buy</span>
            <div className="flex justify-start items-start h-[8px] rounded-sm w-full">
              <div className="flex h-full w-[76%] bg-secondary relative rounded-sm">
                <span className="text-[14px] font-normal absolute -right-12 -top-[6px] text-light_gray ">
                  76%
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center gap-5 w-full">
            <span className="text-[14px] font-normal text-light_gray">
              Hold
            </span>
            <div className="flex justify-start items-start h-[8px] rounded-sm w-full">
              <div className="flex h-full w-[8%] bg-light_gray relative rounded-sm">
                <span className="text-[14px] font-normal absolute -right-12 -top-[6px] text-light_gray ">
                  8%
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center gap-5 w-full">
            <span className="text-[14px] font-normal text-light_gray">
              Sell
            </span>
            <div className="flex justify-start items-start h-[8px] rounded-sm w-full">
              <div className="flex h-full w-[16%] bg-primary relative rounded-sm">
                <span className="text-[14px] font-normal absolute -right-12 -top-[6px] text-light_gray ">
                  16%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
