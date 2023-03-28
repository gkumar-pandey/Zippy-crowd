import { useState } from "react"

import Link from "next/link"
import { Container } from "../../components/container/container.component"
import { Wave2Top } from "../../components/wave/wave-two-svg/wave-two-top.component"
import { Wave2Bottom } from "../../components/wave/wave-two-svg/wave-two-bottom.component"
import { Button } from "../../components/primitive/button/button.component"
import { HairIllustration } from "@/public"
import { Modal } from "../../components/primitive/modal/modal.component"
import { Text } from "../../components/primitive/text/text.component"
import { YouTubeVideo } from "../../components/primitive/youtube-video/youtube-video.component"


export const SignUpSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const onClick = () => {
        setIsModalOpen(!isModalOpen)
    }

    return (
        <section className="gradient-top-to-bottom">
            <Modal isOpen={isModalOpen} onClick={onClick}>
                <Text variant="header">
                    <p>Get to know ZippyCrowd</p>
                </Text>
                <div>
                    <YouTubeVideo />
                </div>
            </Modal>
            <div>
                <Wave2Top />
            </div>

            <div className="py-10">
                <Container>
                    <div>
                        <div className=" flex lg:flex-wrap-reverse md:flex-wrap-reverse sm:flex-wrap-reverse ">
                            <div className="px-3 md:w-4/5   md:mx-auto   w-full lg:w-3/4 lg:mx-auto py-3  ">
                                <div>
                                    <h1 className="text-3xl  mb-2 2xl:w-4/5 md:w-11/12 sm:text-2xl font-semibold font-sans text-[#fff] leading-[3rem] ">
                                        {" "}
                                        <span className="text-[#85FAD7]">
                                            Build business{" "}
                                        </span>
                                        on the{" "}
                                        <span className="text-[#85FAD7]">
                                            strength{" "}
                                        </span>{" "}
                                        of your{" "}
                                        <span className="text-[#a8e6d7]">
                                            reputation.
                                        </span>
                                    </h1>
                                </div>
                                <div>
                                    <p className="font-semibold text-[#fff] text-lg mb-2 ">
                                        Not the size of your marketing budget.
                                    </p>
                                </div>
                                <div className="mt-10  flex sm:flex-col gap-[32px]  ">
                                    <Link
                                        href={
                                            "https://app.zippycrowd.com/login"
                                        }
                                    >
                                        <Button variant="filled">
                                            Sign up for free
                                        </Button>
                                    </Link>
                                    <div>
                                        <Button
                                            variant="outlined"
                                            onClick={onClick}
                                        >
                                            Watch Demo
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className=" w-full p-5 ">
                                <img
                                    src={HairIllustration}
                                    alt="Yoga illustration"
                                    className=" w-2/3 lg:w-2/4 mx-auto"
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="mt-[5rem] ">
                <Wave2Bottom />
            </div>
        </section>
    )
}
