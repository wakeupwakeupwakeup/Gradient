import Image from "next/image";
import Link from "next/link";

export default function Nav() {
    const MenuList  = {
        top: {
            "About": "#about",
            "Services": "#services",
            "Cases": "#cases",
            "Team": "#team",
        },
        bottom: {
            "Boost program": "#boost-program",
            "Products": "#products",
            "Book": "#book",
            "Blog": "#blog",
        }
    }

    function Menu({ list } : any ) {
        return (
            <div className={"flex border-b-2 h-1/2"}>
                {
                    Object.entries(list).map(([key, value], index) => {
                        return (
                            <div className={"flex border-x-2 border-white items-center justify-center w-full"}>
                                <Link href={`${value}`} key={index} className={"whitespace-nowrap uppercase text-xs font-extralight no-underline py-7 px-10"}>
                                    {key}
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    return (
        <div className={"flex w-full border-2 border-white pl-8"}>
            <div className={"flex gap-2 items-center justify-between w-full lg:w-auto lg:pr-12 lg:justify-start"}>
                <div className={"py-3 min-w-[110px]"}>
                    <Image src={"/logo_white_m.svg"} alt={"Logo"} width={100} height={100} />
                </div>
                <div className={"hidden lg:inline"}>
                    <p className={"text-[10px] whitespace-nowrap leading-none"}>bespoke design and <br/> marketing services</p>
                </div>
            </div>
            <div className={"hidden w-full lg:flex lg:flex-col border-l-2"}>
                <Menu list={MenuList.top} />
                <Menu list={MenuList.bottom} />
            </div>
            <div className={"flex items-center border-l-2 border-white px-8 lg:hidden"}>
                <Link href={"#"} className={"text-xs uppercase"}>Menu</Link>
            </div>
        </div>
    )
}