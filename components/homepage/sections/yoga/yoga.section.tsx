import Link from "next/link"
import { Container } from "../../components/container/container.component"
import { Button } from "../../components/primitive/button/button.component"
import { Wave2Top } from "../../components/wave/wave-two-svg/wave-two-top.component"
import { Wave2Bottom } from "../../components/wave/wave-two-svg/wave-two-bottom.component"
import { YogaIllustration, QuoteImg } from "@/public"


export const YogaSection = () => {
    return (
        <section className="gradient-top-to-bottom mt-02">
            <div>
                <Wave2Top />
            </div>
            <Container>
                <div className="py-10">
                    <div className="flex justify-between items-end  lg:flex-wrap-reverse md:flex-wrap-reverse sm:flex-wrap-reverse  ">
                        <div className="lg:mx-auto lg:w-4/5  bottom-0  w-full   ">
                            <div className="mt-[40px]" >
                                <img
                                    src={QuoteImg}
                                    alt="quote-image"
                                    className="w-[3rem]"
                                />
                            </div>
                            <div className="mb-[40px]" >
                                <h1 className="text-3xl sm:text-2xl font-semibold font-sans text-[#fff] mb-5 leading-[3rem] ">
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
                                <Link href={"https://app.zippycrowd.com/login"}>
                                    <Button variant="filled">
                                        Get Started
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full px-5">
                            <img
                                src={YogaIllustration}
                                alt="Yoga illustration"
                                className="w-3/4 lg:w-2/4 sm:w-full md:w-3/5 mx-auto"
                            />
                        </div>
                    </div>
                </div>
            </Container>
            <div className="mt-[5rem] ">
                <Wave2Bottom />
            </div>
        </section>
    )
}
