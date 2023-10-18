import Image from "next/image";
import Link from "next/link";

export default function Nav() {
    return (
        <div className={"flex w-full border-2 border-white pl-8"}>
            <div className={"w-full"}>
                <div className={"py-3"}>
                    <Image src={"/logo_white_m.svg"} alt={"Logo"} width={100} height={100} />
                </div>
            </div>
            <div className={"flex border-l-2 border-white px-8"}>
                <div className={"flex items-center"}>
                    <Link href={"#"} className={"text-xs uppercase"}>Menu</Link>
                </div>
            </div>
                
    
        </div>
    )
}