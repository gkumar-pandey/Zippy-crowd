import Image from "next/image"
import { wave2TopXl, wave2TopMd, wave2TopXs } from "@/public"

export const Wave2Top = () => {
    return (
        <div>
            <Image
                src={wave2TopXl}
                alt="wave2-top"
                className="sm:hidden md:hidden  w-full  "
            />
            <Image
                src={wave2TopMd}
                alt="wave2-top-md"
                className="lg:hidden xl:hidden sm:hidden 2xl:hidden w-full"
            />
            <Image
                src={wave2TopXs}
                alt="wave2-top-xs"
                className="lg:hidden xl:hidden md:hidden 2xl:hidden w-full "
            />
        </div>
    )
}
