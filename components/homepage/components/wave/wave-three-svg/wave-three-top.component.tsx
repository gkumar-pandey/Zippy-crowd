import Image from "next/image"
import { wave3TopXl, wave3TopXs, wave3TopMd } from "@/public"

export const Wave3Top = () => {
    return (
        <div>
            <Image
                src={wave3TopXl}
                alt="wave3-top"
                className="sm:hidden md:hidden  w-full  "
            />
            <Image
                src={wave3TopMd}
                alt="wave3-top-md"
                className="lg:hidden xl:hidden sm:hidden 2xl:hidden w-full"
            />
            <Image
                src={wave3TopXs}
                alt="wave3-top-xs"
                className="lg:hidden xl:hidden md:hidden 2xl:hidden w-full "
            />
        </div>
    )
}
