import Link from "next/link"
import Image from "next/image"
import { Container } from "../../components/container/container.component"
import { Wave3Top } from "../../components/wave/wave-three-svg/wave-three-top.component"
import { Wave3Bottom } from "../../components/wave/wave-three-svg/wave-three-bottom.component"
import { Button } from "../../components/primitive/button/button.component"
import { CtaImg } from "@/public"

export const CTA = () => {
    return (
        <section className="gradient-top-to-bottom pb-28 relative ">
            <div className="absolute w-full  ">
                <Wave3Top />
            </div>
            <Container>
                <div className="relative w-5/6 mx-auto md:w-full sm:w-full 2xl:w-full ">
                    <div className="grid grid-cols-2 sm:grid-cols-1 ">
                        <div>
                            <img src={CtaImg} alt="cta-image" />
                        </div>
                        <div className="mt-[200px] sm:mt-10">
                            <p className=" sm:w-4/6 sm:mx-0 mx-auto w-2/5 md:w-4/6 leading-8 ">
                                It’s not what you know, nor who you know, but
                                who knows you.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 text-3xl sm:text-2xl  sm:w-full mt-8 mb-12   text-[#fff] font-semibold w-4/6  md:w-full leading-[3rem] ">
                        <p>
                            The more people who{" "}
                            <span className="text-[#a8e6d7]">trust</span> you and{" "}
                            <span className="text-[#a8e6d7]">recommend</span>{" "}
                            your work,{" "}
                            <span className="text-[#a8e6d7]">
                                the more discoverable you become.
                            </span>
                        </p>
                    </div>
                    <div className="md:text-center ">
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
