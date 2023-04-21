import Link from "next/link"
import { Container } from "../../components/container/container.component"
import { Wave3Top } from "../../components/wave/wave-three-svg/wave-three-top.component"
import { Wave3Bottom } from "../../components/wave/wave-three-svg/wave-three-bottom.component"
import { Button } from "../../components/primitive/button/button.component"
import { CtaImg } from "@/public"
import Animate from "../../components/animations/animation"

export const CTA = () => {
    return (
        <section className=" cta-section relative  ">
            <div className="absolute w-full">
                <Wave3Top />
            </div>
            <Container>
                <div className="relative w-5/6 mx-auto   md:w-full sm:w-full 2xl:w-full pb-[120px]  2xl:pl-[100px] px-[15px] ">
                    <div className=" flex sm:flex-wrap ">
                        <div className=" lg:w-full sm:w-9/12">
                            <Animate.FadeIn>
                                <img src={CtaImg} alt="cta-image" />
                            </Animate.FadeIn>
                        </div>
                        <div className="  flex justify-center items-center md:justify-end md:items-start md:mt-[230px] sm:justify-start sm:mt-[40px] sm:mb-[7px] ">
                            <p className="  w-1/2  md:w-5/6 sm:w-9/12 text-lg  ">
                                <Animate.FadeIn>
                                    It’s not what you know, nor who you know,
                                    but who knows you.
                                </Animate.FadeIn>
                            </p>
                        </div>
                    </div>
                    <div className=" mt-[30px] mb-[50px] text-[28px] font-sans font-semibold ">
                        <Animate.FadeIn>
                            <p className=" w-8/12 md:w-full sm:w-full sm:text-[25px]  ">
                                The more people who{" "}
                                <span className="text-[#a8e6d7]">trust</span>{" "}
                                you and{" "}
                                <span className="text-[#a8e6d7]">
                                    recommend
                                </span>{" "}
                                your work,{" "}
                                <span className="text-[#a8e6d7]">
                                    the more discoverable you become
                                </span>
                                <span>.</span>
                            </p>
                        </Animate.FadeIn>
                    </div>
                    <div className="md:text-center ">
                        <Animate.FadeIn>
                            <Button variant="filled">
                                <Link href={"https://app.zippycrowd.com/login"}>
                                    Get started
                                </Link>
                            </Button>
                        </Animate.FadeIn>
                    </div>
                </div>
            </Container>
        </section>
    )
}
