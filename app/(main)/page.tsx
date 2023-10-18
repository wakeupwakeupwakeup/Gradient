import Nav from "@/components/Nav";
import Image from "next/image";
import FeatureList from "@/components/FeatureList";
import Services from "@/components/Services";

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
       {/* Block #4*/}
       <div className={"block-p"}>
           <div>
               <div>
                   <span className={"heading-top"}>London 2006</span>
                   <h2 className={"heading"}>We turn your digital dreams into reality</h2>
               </div>
               <div className={"text-xs font-extralight my-20"}>
                   <p className={"pb-6"}>
                       We specialize in creating unique and innovative designs that not only capture the essence of your business but also help you achieve your goals. We believe that great design is about creating a seamless user experience that engages and delights your audience, and we work hard to ensure that every design we create meets this high standard.
                   </p>
               </div>
           </div>
           <div>
               <Services />
           </div>
           <div>
               <div className={"text-xs font-extralight my-20"}>
                   <div className={"flex mb-3.5"}>
                       <Image src={"/star.svg"} alt={"star"} width={30} height={30}/>
                   </div>
                   <p className={"pb-6"}>
                       Influenzilla is a leading design and marketing agency that offers creative solutions to businesses of all sizes. Our team of experts specializes in creating unique and effective designs that help our clients stand out in a crowded market.
                   </p>
                   <p>
                       Our mission is to help our clients achieve their business objectives through innovative and effective design solutions. We believe that great design is more than just aesthetics. It's about creating a seamless user experience that engages and delights your audience.
                   </p>
               </div>
           </div>
       </div>
       {/* Block #5*/}
       <div className={"block-p"}>
           <div>
               <div className={"flex flex-col h-[452px] justify-between"}>
                   <span className={"text-xs font-light gradient-text"}>hi there, let's<br />get started!</span>
                   <h2 className={"heading"}>Expertise and experience</h2>
                   <p>
                       We believe that building long-lasting relationships with our clients is key to achieving success. We are passionate about what we do, and we are committed to delivering exceptional results for every client we work with.
                   </p>
               </div>
           </div>
           <div>
               <div className={"text-xs font-extralight my-20"}>
                   <div className={"flex mb-3.5"}>
                       <Image src={"/star.svg"} alt={"star"} width={30} height={30}/>
                       <Image src={"/star.svg"} alt={"star"} width={30} height={30}/>
                       <Image src={"/star.svg"} alt={"star"} width={30} height={30}/>
                   </div>
                   <p className={"pb-6"}>
                       Our team of talented designers and marketers works closely with each of our clients, taking the time to understand their unique needs and goals, and developing customized solutions that exceed their expectations.
                   </p>
                   <p>
                       We take pride in our ability to create a cohesive brand identity, effective marketing strategies, and user-friendly websites and applications that help our clients achieve success.
                   </p>
               </div>
           </div>
           <div>
               <Nav />
           </div>
       </div>
   </div>
  )
}
