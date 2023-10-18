import Nav from "@/components/Nav";
import Image from "next/image";
import FeatureList from "@/components/FeatureList";

export default function Home() {
  return (
   <div>
       {/* Main block*/}
       <div className={"bg-image flex-col"}>
           <div className={"block-p"}>
               <div>
                   <Nav />
               </div>
               <div className={"py-16"}>
                   <div className={"mb-16"}>
                       <div className={"flex flex-row justify-end items-center mb-16"}>
                           <span className={"text-3xl font-extralight mr-2 gradient-text"}>2023</span>
                           <span className={"text-xs font-light gradient-text"}>hi there, let's<br />get started!</span>
                       </div>
                       <div className={"flex-col w-44"}>
                           <h1 className={"heading mb-2"}>Influence your audience</h1>
                           <div>
                               <span className={"text-xs font-normal"}>boost your brand with our marketing expertise</span>
                           </div>
                       </div>
                   </div>
                   <div>
                       <div>
                           <div className={"mb-3.5"}>
                               <Image src={"/star.svg"} alt={"star"} width={30} height={30}/>
                           </div>
                           <div className={"w-2/3"}>
                               <p className={"text-xs font-extralight"}>
                                   We believe in the power of digital media to transform businesses and connect them with their audiences in meaningful ways.
                               </p>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           <div className={"grid grid-cols-2 grid-rows-2 gap-y-9 text-xs py-12 px-5"}>
               <span>digital branding</span>
               <span>influence marketing</span>
               <span>content creation</span>
               <span>design/development</span>
           </div>
       </div>
       {/* Block #2*/}
       <div className={"block-p"}>
           <div className={"text-xs font-extralight my-20"}>
               <div className={"flex mb-3.5"}>
                   <Image src={"/star.svg"} alt={"star"} width={30} height={30}/>
                   <Image src={"/star.svg"} alt={"star"} width={30} height={30}/>
                   <Image src={"/star.svg"} alt={"star"} width={30} height={30}/>
               </div>
               <p className={"pb-6"}>
                   Our creative design bureau is based in the heart of London and specializes in digital branding, website design, and influence marketing.
               </p>
               <p>
                   We believe in the power of digital media to transform businesses and connect them with their audiences in meaningful ways.
               </p>
           </div>
           <div>
               <span className={"heading-top"}>London 2006</span>
               <h2 className={"heading"}>We turn your digital dreams into reality</h2>
           </div>
           <div className={"text-xs font-extralight my-20"}>
               <p className={"pb-6"}>
                   Our team of experienced designers and marketing professionals work closely with each client to understand their unique vision and develop tailored solutions that align with their goals.
               </p>
               <p>
                   From designing eye-catching logos and brand identities, to building custom websites that engage and convert visitors, to crafting effective influencer marketing campaigns, we are dedicated to helping our clients succeed in the digital space.
               </p>
           </div>
       </div>
       {/* Block #3*/}
       <div>
         <FeatureList />
       </div>
   </div>
  )
}
