import { Container } from "../../components/container/container.component"
import { Text } from "../../components/primitive/text/text.component"
import { LogoImg } from "@/public"
import Image from "next/image"

export const AboutSection = () => {
    return (
        <section className="bg-[#F3F4FF] mt-02 " id="about">
            <div className="py-[10rem]">
                <Container>
                    <Text variant="title">About us</Text>
                    <div className="flex justify-between sm:flex-col ">
                        <div className="w-3/6 pr-4  md:w-2/4 md:p-0 sm:w-full ">
                            <div>
                                <Text variant="header">
                                    <p>
                                        We believe in the power of word of
                                        mouth.
                                    </p>
                                </Text>
                            </div>
                            <div>
                                <Text variant="text">
                                    <p>
                                        We’re on a mission to bring more trust
                                        and recognition into the world of work
                                        and small business.
                                    </p>
                                </Text>
                            </div>
                            <div>
                                <Text variant="text">
                                    <p>
                                        We built ZippyCrowd to help small
                                        businesses thrive in today’s digital
                                        economy.
                                    </p>
                                </Text>
                            </div>
                            <div>
                                <div className="mx-2 ">
                                    <button>Learn more about us</button>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center p-4  w-2/5   md:w-2/4  sm:w-full ">
                            <Image
                                src={LogoImg}
                                alt="logo-image"
                                className="w-full"
                            />
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}
