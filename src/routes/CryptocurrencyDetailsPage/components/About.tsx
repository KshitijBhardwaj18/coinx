import { useParams } from "react-router-dom";
import tax1 from "../../../assets/images/tax1.png";
import tax2 from "../../../assets/images/tax2.png";

export default function About() {
    const { id } = useParams();

    return (
      <section className="flex flex-col justify-center items-start bg-foreground rounded-xl p-6 gap-2 w-full">
         <h3 className="text-[25px] font-semibold text-black">About {id && id?.charAt(0).toUpperCase() + id?.slice(1)}</h3>
         <div className="flex flex-col justify-center items-start gap-2">
            <h2 className="text-[20px] font-medium text-black">What is {id && id?.charAt(0).toUpperCase() + id?.slice(1)}?</h2>
            <p className="text-[14px] font-normal text-black">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus debitis facilis 
             expedita vel id doloremque explicabo quasi qui, est vitae fuga voluptas ipsum earum suscipit voluptates ex obcaecati commodi, quos dolor neque nesciunt eius.
             uam mollitia explicabo odio a dicta labore, quas aliquid ipsam minus quod voluptatibus esse, excepturi quam.
            </p>
         </div>
         <hr className="border-[#e3dfdf] w-full "/>
         <div className="flex flex-col justify-center items-start gap-2">
            <h2 className="text-[20px] font-medium text-black">Lorem ipsum dolor sit amet</h2>
            <p className="text-[14px] font-normal text-black">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus debitis facilis 
            expedita vel id doloremque explicabo quasi qui, est vitae fuga voluptas ipsum earum suscipit voluptates ex obcaecati commodi, quos dolor neque nesciunt eius.
            Praesentium sed, veniam assumenda error voluptatibus quidem consectetur exercitationem ipsam illum impedit iusto quisquam rerum cum aliquid laudantium
            <br/>
            <br/>

            blanditiis delectus officiis eveniet. Blanditiis dolor neque consectetur maxime ipsa esse saepe a, suscipit natus quidem minus veniam error, nobis quae. 
            Repellendus consectetur eaque sequi deserunt dicta quod tempore debitis sapiente temporibus, excepturi quisquam dolores quo non esse repudiandae cupiditate
            corporis unde pariatur adipisci sed exercitationem deleniti! Sit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ipsam voluptate doloremque
            <br/>
            <br/>
             voluptates dolor, eius quidem dolores, magni placeat, animi nostrum excepturi necessitatibus totam ipsum libero non fuga debitis! Itaque tempore fuga blanditiis
              dolorum aliquam mollitia explicabo odio a dicta labore, quas aliquid ipsam minus quod voluptatibus esse, excepturi quam.
            </p>
         </div>
         <hr className="border-[#e3dfdf] w-full "/>
         <h3  className="text-[25px] font-semibold text-black mt-4">Already Holding {id && id?.charAt(0).toUpperCase() + id?.slice(1)}?</h3>
         <div className="flex mobile:flex-col justify-between mobile:items-start items-center gap-4 w-full">
            <div className="flex mini:flex-col justify-center mobile:justify-start items-center blue-gradient rounded-lg p-3 gap-4 mobile:w-full">
                <img src={tax1} alt="tax1" className="w-[150px] h-[150px] rounded-lg" />
                <div className="flex flex-col justify-center items-start gap-2">
                    <h2 className="text-[20px] font-medium text-foreground">Calculate your Profits</h2>
                    <button type='button' className=' px-5 py-2 font-medium text-[15px] rounded-lg  text-black bg-foreground outline-none border-none'>
                     Check Now &#8594;
                    </button>
                </div>
            </div>
            <div className="flex mini:flex-col justify-center mobile:justify-start items-center red-gradient rounded-lg p-3 gap-4 mobile:w-full">
                <img src={tax2} alt="tax1" className="w-[150px] h-[150px] rounded-lg" />
                <div className="flex flex-col justify-center items-start gap-2">
                    <h2 className="text-[20px] font-medium text-foreground">Calculate your tax liability</h2>
                    <button type='button' className=' px-5 py-2 font-medium text-[15px] rounded-lg  text-black bg-foreground outline-none border-none'>
                     Check Now &#8594;
                    </button>
                </div>
            </div>
         </div>
         <hr className="border-[#e3dfdf] w-full "/>
         <p className="text-[14px] font-normal text-black">
            voluptates dolor, eius quidem dolores, magni placeat, animi nostrum excepturi necessitatibus totam ipsum libero non fuga debitis! Itaque tempore fuga blanditiis
            dolorum aliquam mollitia explicabo odio a dicta labore, quas aliquid ipsam minus quod voluptatibus esse, excepturi quam.
         </p>
    
        
      </section>
    );
  }
  