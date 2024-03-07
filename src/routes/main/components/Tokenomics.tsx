

export default function Tokenomics() {
    return (
      <section className="flex flex-col justify-center items-start bg-foreground rounded-xl p-6 gap-2 w-full">
        <h3 className="text-[25px] font-semibold text-black">Tokenomics</h3>
        <h2 className="text-[20px] font-medium text-black mt-2">Initial Distribution</h2>
        <div className="flex mini:flex-col justify-start items-center mini:gap-2 gap-8">
            <figure className={`flex justify-center items-center mobile:p-5 p-8 circular-bar rounded-full mobile:w-[100px] mobile:h-[100px] w-[180px] h-[180px]`}>
                <div className="flex bg-foreground rounded-full w-full h-full"/>
            </figure>
            <div className="flex flex-col justify-center items-start gap-2">
                <div className="flex justify-center items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-barblue"/>
                    <span className="text-[14px] font-normal text-black">Crowdscale investors: 80%</span>
                </div>
                <div className="flex justify-centert items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-barorgange"/>
                    <span className="text-[14px] font-normal text-black">Foundation: 20%</span>
                </div>
            </div>
        </div>
        <p className="text-[14px] font-normal text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat corporis 
        cupiditate minus repudiandae fuga eum, nisi, assumenda, aliquam facere perspiciatis praesentium tenetur. Ullam corporis magnam 
        officia fuga dolorum quidem velit deserunt fugit atque molestiae ut minima aspernatur est, similique modi maiores? Illo nobis, 
        impedit neque molestias minima soluta natus aliquid sunt maiores quod nihil, voluptate corporis quibusdam dolores fugit maxime
         repellendus modi, ipsa saepe dolorum perferendis assumenda? Suscipit, maxime corrupti?</p>

        
        
      </section>
    );
  }