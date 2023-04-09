import Link from "next/link"
import { useState } from "react"
import { Container } from "../../components/container/container.component"
import { HeroArrowSvg, HeroImg } from "@/public"
import { Wave1Top } from "../../components/wave/wave-one-svg/wave-one-top.component"
import { Button } from "../../components/primitive/button/button.component"
import { Modal } from "../../components/primitive/modal/modal.component"
import { Text } from "../../components/primitive/text/text.component"
import { YouTubeVideo } from "../../components/primitive/youtube-video/youtube-video.component"
import styles from './hero.module.css'

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
                <div className={`grid grid-cols-2 md:flex sm:grid-cols-1 pb-48 ${styles.heroSectionBgThread} px-[15px] `}  >
                    <div>
                        <div className=" mt-[88px] mb-[50px] lg:mt-[85px] md:mt-[85px] sm:mt-[42px] sm:mb-[50px] " >
                            <h1 className="text-5xl lg:text-[40px] md:text-[40px] sm:text-3xl  font-semibold text-[#fff] leading-[4rem] md:leading-[56px]  md:w-full font-sans">
                                The word-of-mouth platform powering
                            </h1>
                            <h1 className="text-5xl lg:text-[40px]  md:text-[40px] sm:text-3xl font-semibold text-[#85FAD7] animated-text my-3 font-sans"></h1>
                            <div className="flex items-center ">
                                <div className="count mr-1 text-[10px] ">
                                    <span className="px-1">of 3</span>
                                </div>
                                <div className="bar-container">
                                    <div className="bar"></div>
                                </div>
                            </div>
                        </div>
                        <div className="text-[#fff]   ">
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
                            <div className="text-lg w-10/12 lg:w-11/12 md:w-11/12 font-sans mb-4 leading-[2rem]  ">
                                <span className="">
                                    Reach new customers on the{" "}
                                    <strong>strength</strong> of your
                                </span>
                                <strong> positive reputation.</strong>
                            </div>
                            <div className=" flex mt-[40px] gap-5">
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
                    <div className=" flex justify-center items-center md:items-start  md:mt-[180px]  mt-[120px] lg:mt-[180px] sm:mt-[80px] ">
                        <div className="w-[350px] lg:w-[450px] md:w-[270px] sm:w-[395px] " >
                            <img src={HeroImg} alt="Hero image" className="" />
                        </div>
                    </div>
                </div>
            </Container>
            <Wave1Top />
        </section>
    )
}
