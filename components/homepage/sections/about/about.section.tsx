import { Container } from "../../components/container/container.component"
import { Text } from "../../components/primitive/text/text.component"
import { LogoImg } from "@/public"
import Link from "next/link"

export const AboutSection = () => {
    return (
        <section className="bg-[#F3F4FF] mt-02 " id="about">
            <div className="py-[10rem]">
                <Container>
                    <Text variant="title">About us</Text>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-1 ">
                        <div>
                            <div>
                                <Text variant="header">
                                    <p>
                                        We believe in the power of word of
                                        mouth.
                                    </p>
                                </Text>
                            </div>
                            <div   >
                                <Text variant="text">
                                    <p>
                                        We’re on a mission to bring more trust
                                        and recognition into the world of work
                                        and small business.
                                    </p>
                                </Text>
                            </div>
                            <div   >
                                <Text variant="text">
                                    <p>
                                        We built ZippyCrowd to help small
                                        businesses thrive in today’s digital
                                        economy.
                                    </p>
                                </Text>
                            </div>
                            <div>
                                <div>
                                    <Link href={' https:/blog.zippycrowd.com/about-us/'} target='_blank' >
                                        <button>Learn more about us</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end sm:justify-center items-center p-4  sm:w-full sm:mt-12 ">
                            <img
                                src={LogoImg}
                                alt="logo-image"
                                className="w-3/4"
                            />
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}
