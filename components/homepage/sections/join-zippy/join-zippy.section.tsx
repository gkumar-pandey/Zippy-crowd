import Link from "next/link"

import { Container } from "../../components/container/container.component"
import { Wave2Top } from "../../components/wave/wave-two-svg/wave-two-top.component"
import { Wave2Bottom } from "../../components/wave/wave-two-svg/wave-two-bottom.component"
import { Button } from "../../components/primitive/button/button.component"
import {
    DogImg,
    DecoratorImg,
    BarberImg,
    BoxingImg,
    HairImg,
    GardenImg,
} from "@/public"
import Animate from "../../components/animations/animation"

// Image components
const DogImgComp = () => {
    return (
        <div className="absolute w-[33%] top-0 left-0 lg:w-[25%] lg:top-[74%] md:w-[25%] md:top-[74%] sm:relative   sm:w-3/4 sm:block sm:top-0 sm:mb-[40px] ">
            <Animate.FadeIn>
                <img src={DogImg} alt="img-dog" className="" />
            </Animate.FadeIn>
        </div>
    )
}

const BoxingImgComp = () => {
    return (
        <div className="absolute w-[33%]   left-[33%] top-[72%] lg:w-[38%]  lg:left-[45%] lg:top-[7%] md:w-[38%]  md:left-[45%] md:top-[7%]   sm:relative sm:block sm:w-3/4  sm:left-[23%] sm:mb-[40px] ">
            <Animate.FadeIn>
                <img src={BoxingImg} alt="boxing-img" />
            </Animate.FadeIn>
        </div>
    )
}

const HairImgComp = () => {
    return (
        <div className="absolute w-[42%] left-[25%] top-[31%] lg:w-[50%] lg:top-[35%] md:w-[50%] md:top-[35%] sm:relative sm:block sm:w-[100%] sm:left-0  ">
            <Animate.FadeIn>
                <img src={HairImg} alt="hair-cut-img" />
            </Animate.FadeIn>
        </div>
    )
}

const GardenImgComp = () => {
    return (
        <div className="absolute left-[75%] top-[60%] lg:left-0 lg:top-0 lg:w-[25%] md:left-0 md:top-0 md:w-[25%] sm:hidden ">
            <Animate.FadeIn>
                <img src={GardenImg} alt="garden-img" />
            </Animate.FadeIn>
        </div>
    )
}

const BarberImgComp = () => {
    return (
        <div className="absolute  left-0 top-[67%] lg:left-[38%] lg:w-[25%] lg:top-[78%] md:left-[38%] md:w-[25%] md:top-[78%]   sm:hidden ">
            <Animate.FadeIn>
                <img src={BarberImg} alt="barber-img" />
            </Animate.FadeIn>
        </div>
    )
}

const DecoratorImgComp = () => {
    return (
        <div className=" absolute w-[21%]  left-[75%] top-[17%] lg:w-[25%] lg:top-[70%] md:w-[25%] md:top-[69%] sm:hidden ">
            <Animate.FadeIn>
                <img src={DecoratorImg} alt="decorator-img" />
            </Animate.FadeIn>
        </div>
    )
}

// Main Component

export const JoinZippy = () => {
    return (
        <section className=" gradient-top-to-bottom ">
            <div className="mt-[-20px]">
                <Wave2Top />
            </div>
            <Container>
                <div id="join-zippy-section" className="px-[15px]">
                    <div className="mt-[30px] sm:p-0 relative sm:block ">
                        <div className="sm:pt-0 pt-[100%] mb-28">
                            <DogImgComp />
                            <BoxingImgComp />
                            <HairImgComp />
                            <GardenImgComp />
                            <BarberImgComp />
                            <DecoratorImgComp />
                        </div>
                    </div>
                    <div className=" flex justify-center  bottom-0  ">
                        <Link href={"https://app.zippycrowd.com/login"}>
                            <Animate.FadeIn>
                                <Button variant="filled">
                                    Join us on ZippyCrowd
                                </Button>
                            </Animate.FadeIn>
                        </Link>
                    </div>
                </div>
            </Container>
            <Wave2Bottom />
        </section>
    )
}
