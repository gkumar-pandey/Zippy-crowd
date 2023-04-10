import Link from "next/link"

import { Container } from "../../components/container/container.component"
import { Text } from "../../components/primitive/text/text.component"
import Animate from "../../components/animations/animation"
import { LogoImg } from "@/public"




export const AboutSection = () => {
    return (
        <section className="bg-[#F3F4FF] mt-02 " id="about">
            <div className="pt-[158px] pb-[220px] lg:pt-[151px] lg:pb-[158px] md:pt-[151px] md:pb-[158px] sm:pt-[158px] sm:pb-[113px] ">
                <Container>
                    <div className="px-[15px]" >
                        <Animate.FadeIn>
                            <Text variant="title">About us</Text>
                        </Animate.FadeIn>
                        <div className="grid grid-cols-2 gap-2 sm:grid-cols-1  ">
                            <div>
                                <div className=" w-9/12 lg:w-full md:w-full sm:w-full " >
                                    <Text variant="header">
                                        <Animate.FadeIn>
                                            <p>
                                                We believe in the power of word of
                                                mouth.
                                            </p>
                                        </Animate.FadeIn>
                                    </Text>
                                </div>
                                <div className="w-9/12 lg:w-10/12 md:w-full sm:w-full" >
                                    <Text variant="text">
                                        <Animate.FadeIn>
                                            <p>
                                                We’re on a mission to bring more trust
                                                and recognition into the world of work
                                                and small business.
                                            </p>
                                        </Animate.FadeIn>
                                    </Text>
                                </div>
                                <div className="w-11/12 lg:w-full pr-4 md:w-full sm:w-full" >
                                    <Text variant="text">
                                        <Animate.FadeIn>
                                            <p>
                                                We built ZippyCrowd to help small
                                                businesses thrive in today’s digital
                                                economy.
                                            </p>
                                        </Animate.FadeIn>
                                    </Text>
                                </div>
                                <div>
                                    <div>
                                        <Link href={' https:/blog.zippycrowd.com/about-us/'} target='_blank' >
                                            <Animate.FadeIn>
                                                <button>Learn more about us</button>
                                            </Animate.FadeIn>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:pt-0 sm:w-full items-center sm:mt-12 flex justify-center md:items-start md:pt-[6rem] ">
                                <Animate.FadeIn>
                                    <img
                                        src={LogoImg}
                                        alt="logo-image"
                                        className="w-[445px]  px-5 "
                                    />
                                </Animate.FadeIn>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}
