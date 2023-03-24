import { Container } from "../../components/container/container.component"
import { Text } from "../../components/primitive/text/text.component"

export const HowZippyHelpSection = () => {
    return (
        <section className="bg-[#F3F4FF] pt-[5rem] mt-02 " id="how-zippy-help">
            <Container>
                <div id="how-zippy-help" className=" pb-[10rem]">
                    <Text variant="title">how zippy helps</Text>
                    <div>
                        <div className=" w-3/5  mb-[151px] sm:w-full ">
                            <Text variant="header">
                                <p>
                                    A customer community you trust and can rely
                                    on.
                                </p>
                            </Text>
                            <Text variant="text">
                                <p>
                                    {" "}
                                    Turn your customers into long-term
                                    advocates, support one another and see your
                                    reach, reputation and revenue grow.
                                </p>
                            </Text>
                        </div>
                        <div className=" w-3/5 p-2 sm:w-full ">
                            <Text variant="header">
                                <p>
                                    Recommendations that power your business. No
                                    bad reviews - ever.
                                </p>
                            </Text>
                            <Text variant="text">
                                <p>
                                    {" "}
                                    Positive reputation only. Reach new
                                    customers through word of mouth from people
                                    who trust you and love your work.
                                </p>
                            </Text>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
