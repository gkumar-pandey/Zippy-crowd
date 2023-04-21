import { Container, Text } from "../../components"
import Animate from "../../components/animations/animation"

export const HowZippyHelpSection = () => {
    return (
        <section className="bg-[#F3F4FF] pt-40 mt-02 px-[30px] sm:px-0 ">
            <Container>
                <div id="how-zippy-help" className="pb-[10rem] px-[15px] ">
                    <Animate.FadeIn>
                        <Text variant="title">how zippy helps</Text>
                    </Animate.FadeIn>

                    <div className="flex flex-col ">
                        <div className=" mb-[150px]  w-6/12 xl:w-6/12 lg:w-7/12 md:w-8/12  sm:w-full ">
                            <Text variant="header">
                                <Animate.FadeIn>
                                    <p>
                                        A customer community you trust and can
                                        rely on.
                                    </p>
                                </Animate.FadeIn>
                            </Text>
                            <Text variant="text">
                                <Animate.FadeIn>
                                    <p>
                                        {" "}
                                        Turn your customers into long-term
                                        advocates, support one another and see
                                        your reach, reputation and revenue grow.
                                    </p>
                                </Animate.FadeIn>
                            </Text>
                        </div>
                        <div className=" w-6/12 xl:w-6/12 lg:w-7/12 md:w-8/12  sm:w-full">
                            <Text variant="header">
                                <Animate.FadeIn>
                                    <p>
                                        Recommendations that power your
                                        business. No bad reviews - ever.
                                    </p>
                                </Animate.FadeIn>
                            </Text>
                            <Text variant="text">
                                <Animate.FadeIn>
                                    <p>
                                        {" "}
                                        Positive reputation only. Reach new
                                        customers through word of mouth from
                                        people who trust you and love your work.
                                    </p>
                                </Animate.FadeIn>
                            </Text>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
