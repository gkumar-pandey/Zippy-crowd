import Link from "next/link"
import Image from "next/image"
import { Container } from "../../components/container/container.component"
import { Wave3Top } from "../../components/wave/wave-three-svg/wave-three-top.component"
import { Wave3Bottom } from "../../components/wave/wave-three-svg/wave-three-bottom.component"
import { Button } from "../../components/primitive/button/button.component"
import { CtaImg } from "@/public"

export const CTA = () => {
    return (
        <section className="gradient-top-to-bottom  relative ">
            <div className="absolute w-full  ">
                <Wave3Top />
            </div>
            <Container>
                <div className="relative w-5/6 mx-auto md:w-full sm:w-full 2xl:w-full ">
                    <div className="flex justify-center sm:flex-wrap  md:mt-[4rem] xl:mt-[3rem] 2xl:mt-[5rem] ">
                        <div className=" 2xl:w-4/5 ">
                            <Image src={CtaImg} alt="cta-image" />
                        </div>
                        <div className=" flex items-center md:pt-10 text-lg text-[#fff]  sm:justify-start justify-center  w-full ">
                            <p className="w-2/4  sm:w-3/4  ">
                                It’s not what you know, nor who you know, but
                                who knows you.
                            </p>
                        </div>
                    </div>
                    <div className="my-3  ">
                        <div className=" text-3xl sm:text-2xl  sm:w-full sm:my-[2rem] text-[#fff] font-semibold w-4/6  md:w-full leading-[3rem] ">
                            <p>
                                The more people who{" "}
                                <span className="text-teal">trust</span> you and{" "}
                                <span className="text-teal">recommend</span>{" "}
                                your work,{" "}
                                <span className="text-teal">
                                    the more discoverable you become.
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="py-[2rem]  md:text-center ">
                        <Button variant="filled">
                            <Link href={"https://app.zippycrowd.com/login"}>
                                Get Started
                            </Link>
                        </Button>
                    </div>
                </div>
            </Container>
            <div>
                <Wave3Bottom />
            </div>
        </section>
    )
}
