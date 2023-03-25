import Link from "next/link"
import { Container } from "../../components/container/container.component"
import { HeroArrowSvg, HeroImg } from "@/public"
import { Wave1Top } from "../../components/wave/wave-one-svg/wave-one-top.component"
import { Button } from "../../components/primitive/button/button.component"
import { Modal } from "../../components/primitive/modal/modal.component"
import { useState } from "react"
import { Text } from "../../components/primitive/text/text.component"
import { YouTubeVideo } from "../../components/primitive/youtube-video/youtube-video.component"

export const HeroSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const onClick = () => {
        setIsModalOpen(!isModalOpen)
    }

    return (
        <section className="gradient-top-to-bottom pt-[4rem]">
            <Modal isOpen={isModalOpen} onClick={onClick}>
                <Text variant="header">Get to know ZippyCrowd</Text>
                <div>
                    <YouTubeVideo />
                </div>
            </Modal>
            <Container>
                <div className="flex sm:flex-wrap pb-48  " id="hero-section">
                    <div className=" mt-[85px]  ">
                        <div>
                            <h1 className="text-5xl sm:text-3xl md:text-4xl font-semibold text-[#fff] leading-[4rem]  w-3/4 md:w-full font-sans">
                                The word-of-mouth platform powering
                            </h1>
                            <h1 className="text-5xl sm:text-3xl md:text-4xl font-semibold text-[#85FAD7] animated-text my-3 font-sans"></h1>
                            <div className="flex items-center ">
                                <div className="count mr-1">
                                    <span className="px-1">of 3</span>
                                </div>
                                <div className="bar-container">
                                    <div className="bar"></div>
                                </div>
                            </div>
                        </div>
                        <div className="text-[#fff]  mt-[50px] ">
                            <div className="flex font-sans text-lg mb-4 relative   ">
                                <div className=" leading-[2rem]">
                                    <span>
                                        Get{" "}
                                        <span className="font-semibold">
                                            recommended
                                        </span>{" "}
                                    </span>
                                    <br />
                                    <span>
                                        Collect{" "}
                                        <span className="font-semibold">
                                            testimonials
                                        </span>{" "}
                                    </span>
                                </div>
                                <div className="absolute left-[200px] top-[20px]   ">
                                    <img
                                        src={HeroArrowSvg}
                                        alt="Hero-arrow"
                                    />
                                </div>
                            </div>
                            <div className="text-lg font-sans mb-4 leading-[2rem]  ">
                                <span className="">
                                    Reach new customers on the{" "}
                                    <strong>strength</strong> of your
                                </span>
                                <br />
                                <strong> positive reputation.</strong>
                            </div>
                            <div className=" flex my-[2rem] gap-5">
                                <Button variant="filled" onClick={onClick}>
                                    Watch Demo
                                </Button>
                                <Link href={"https://app.zippycrowd.com/login"}>
                                    <Button variant="outlined">
                                        Get Started
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center ">
                        <div>
                            <img src={HeroImg} alt="Hero image" />
                        </div>
                    </div>
                </div>
            </Container>
            <Wave1Top />
        </section>
    )
}
