import Image from "next/image"
import { SpeechHeart, handShakeSvg, celebrateSvg } from "@/public"
import { Button } from "../../primitive/button/button.component"

interface NavTabProps {
    img?: any
    label: string
    link?: string
}

const NavTab = ({ img, label, link }: NavTabProps) => {
    return (
        <div className="flex  bg-white my-5 mx-2 p-5 items-center  rounded-lg">
            <Image src={img} alt="hand-shake" />
            <p className="text-[#000] mx-3 font-sans text-lg font-semibold">
                {label}
            </p>
        </div>
    )
}

export const NavbarDrawer = () => {
    return (
        <div className="fixed top-[60px] inset-0 z-50 flex items-start  justify-center modal  bg-[#5c15ad] ">
            <div className="flex flex-col  w-full ">
                <NavTab img={handShakeSvg} label="About us" />
                <NavTab img={SpeechHeart} label="How Zippy Works" />
                <NavTab img={celebrateSvg} label="Why Zippy" />
                <p className=" m-auto my-5 font-sans text-lg text-white font-semibold">
                    Pricing
                </p>
                <div className="gap-5  w-full flex justify-start m-2">
                    <Button variant="filled">Get started</Button>
                    <Button variant="outlined">Login</Button>
                </div>
            </div>
        </div>
    )
}
