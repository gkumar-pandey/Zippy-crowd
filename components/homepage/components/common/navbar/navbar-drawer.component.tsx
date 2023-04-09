import Link from "next/link"

import { SpeechHeart, handShakeSvg, celebrateSvg } from "@/public"
import { Button } from "../../primitive/button/button.component"

interface NavTabProps {
    img?: any
    label: string
    link?: string
    scrollToSection?: any
}

const NavTab = ({ img, label, link, scrollToSection }: NavTabProps) => {
    return (
        <div className="flex  bg-white py-[20px] px-[40px] my-8 items-center rounded-lg" onClick={() => scrollToSection(link)} >
            <img src={img} alt="hand-shake" />
            <p className="text-[#000] mx-3 font-sans text-lg ">
                {label}
            </p>
        </div>
    )
}

export const NavbarDrawer = ({ scrollToSection, priceModalHandler }: { scrollToSection: any, priceModalHandler: any }) => {
    return (
        <div className="fixed top-[60px] inset-0 z-50 flex items-start justify-center modal  bg-[#5c15ad] xl:hidden 2xl:hidden lg:hidden ">
            <div className="flex flex-col justify-between items-center w-full  h-full">
                <div className="flex flex-col w-2/4 sm:w-full px-[15px]  h-full justify-evenly " >
                    <div>
                        <NavTab img={handShakeSvg} label="About us" link="about" scrollToSection={scrollToSection} />
                        <NavTab img={SpeechHeart} label="How Zippy Works" link="how-zippy-work" scrollToSection={scrollToSection} />
                        <NavTab img={celebrateSvg} label="Why Zippy" link="how-zippy-help" scrollToSection={scrollToSection} />
                    </div>

                    <p className=" m-auto my-5 font-sans text-lg text-white font-semibold" onClick={priceModalHandler} >
                        Pricing
                    </p>
                    <div className="gap-5  w-full flex justify-start items-center m-2">
                        <Link href='https://app.zippycrowd.com/login' >
                            <Button variant="filled">Get started</Button>
                        </Link>
                        <Link href={'https://app.zippycrowd.com/login'} >
                            <Button variant="outlined">Login</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
