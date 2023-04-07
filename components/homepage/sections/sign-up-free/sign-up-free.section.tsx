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

            <div className="py-10 ">
                <Container>
                    <div className="flex items-center lg:flex-wrap-reverse md:flex-wrap-reverse sm:flex-wrap-reverse ">
                        <div className=" ml-[100px] lg:pl-[26px]  md:w-4/5 md:mx-auto w-full lg:w-3/4 lg:mx-auto sm:m-0 ">
                            <h1 className="xl:text-3xl 2xl:text-3xl text-[28px]  mb-2  w-10/12 md:w-11/12 sm:text-2xl font-semibold font-sans text-[#fff] leading-[3rem] sm:w-full ">
                                <span className="text-[#85FAD7]">
                                    Build business{" "}
                                </span>
                                on the{" "}
                                <span className="text-[#85FAD7]">
                                    strength{" "}
                                </span>{" "}
                                of your{" "}
                                <span className="text-[#85FAD7]">
                                    reputation
                                </span>
                                .
                            </h1>
                            <p className="font-semibold text-[#fff] text-lg mb-2 ">
                                Not the size of your marketing budget.
                            </p>
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
                        <div className=" w-full p-5 flex justify-end lg:justify-center md:justify-start ">
                            <img
                                src={HairIllustration}
                                alt="Yoga illustration"
                                className=" w-5/6 lg:w-2/4 md:w-4/6 md:ml-[4.6rem] sm:w-full "
                            />
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
