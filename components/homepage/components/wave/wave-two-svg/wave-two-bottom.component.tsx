import Image from "next/image"
import { wave2BottomMd, wave2BottomXs, wave2BottomXl } from "@/public"

export const Wave2Bottom = () => {
    return (
        <div>
            <Image
                src={wave2BottomXl}
                alt="wave2-bottom"
                className="sm:hidden md:hidden  w-full  "
            />
            <Image
                src={wave2BottomMd}
                alt="wave2-bottom-md"
                className="lg:hidden xl:hidden sm:hidden 2xl:hidden w-full"
            />
            <Image
                src={wave2BottomXs}
                alt="wave2-bottom-xs"
                className="lg:hidden xl:hidden md:hidden 2xl:hidden w-full "
            />
        </div>
    )
}