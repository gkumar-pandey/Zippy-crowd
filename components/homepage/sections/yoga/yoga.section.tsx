import Link from "next/link"

import { YogaIllustration, QuoteImg } from "@/public"
import Animate from "../../components/animations/animation"
import { Button, Container, Wave2Bottom, Wave2Top } from "../../components"

export const YogaSection = () => {
    return (
        <section className="gradient-top-to-bottom mt-02">
            <div>
                <Wave2Top />
            </div>
            <Animate.FadeIn>
                <Container>
                    <div className="pt-20 px-[15px]">
                        <div className="flex justify-between items-end  lg:flex-wrap-reverse md:flex-wrap-reverse sm:flex-wrap-reverse  ">
                            <div className="lg:mx-auto lg:w-4/5 md:w-5/6 bottom-0 md:ml-[4rem] w-full  ">
                                <div className="mt-[40px]">
                                    <img
                                        src={QuoteImg}
                                        alt="quote-image"
                                        className="w-[3rem]"
                                    />
                                </div>
                                <div className="mb-[40px]">
                                    <h1 className=" xl:text-[30px] text-[28px]  font-semibold font-sans text-[#fff] mb-5 leading-[3rem] ">
                                        {" "}
                                        <span className="text-[#85FAD7]">
                                            Word of mouth{" "}
                                        </span>
                                        is the{" "}
                                        <span className="text-[#85FAD7]">
                                            most powerful
                                        </span>{" "}
                                        way to grow your small business.
                                    </h1>
                                </div>
                                <div>
                                    <Link
                                        href={
                                            "https://app.zippycrowd.com/login"
                                        }
                                    >
                                        <Button variant="filled">
                                            Get Started
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                            <div className="w-full px-5  flex justify-end lg:justify-center md:justify-center ">
                                <img
                                    src={YogaIllustration}
                                    alt="Yoga illustration"
                                    className="w-3/4 lg:w-2/4 sm:w-full md:w-3/5  "
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </Animate.FadeIn>
            <div className="mt-[5rem] ">
                <Wave2Bottom />
            </div>
        </section>
    )
}
