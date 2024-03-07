import { sectionLinks } from "../../../constants";
import { useState } from "react";

export function Sectionbar() {
    const [active, setactive] = useState('Overview');


  return (
    <section className="flex justify-center items-center border-b-2 border-light_gray w-full ">
      <ul className="list-non flex w-max overflow-x-scroll scroll_style justify-start items-center gap-10 flex-1 h-[40px]">
        {sectionLinks.map((nav) => (
          <li
            key={nav.id}
            className={` flex justify-start items-center font-medium cursor-pointer text-[14px] h-full w-auto ${active === nav.title ? 'text-blue border-b-[3px] border-blue':'text-gray'}`} onClick={()=> setactive(nav.title)}
          >
            <a>{nav.title}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}
