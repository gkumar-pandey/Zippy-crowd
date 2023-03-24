import Image from "next/image"
import { wave3BottomMd, wav3BottomXl, wave3BottomXs } from "@/public"

export const Wave3Bottom = () => {
    return (
        <div>
            <Image
                src={wav3BottomXl}
                alt="wave3-top"
                className="sm:hidden md:hidden  w-full  "
            />
            <Image
                src={wave3BottomMd}
                alt="wave3-top-md"
                className="lg:hidden xl:hidden sm:hidden 2xl:hidden w-full"
            />
            <Image
                src={wave3BottomXs}
                alt="wave3-top-xs"
                className="lg:hidden xl:hidden md:hidden 2xl:hidden w-full "
            />
        </div>
    )
}
