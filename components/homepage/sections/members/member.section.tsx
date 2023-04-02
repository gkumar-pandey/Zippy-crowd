import { Container } from "../../components/container/container.component"
import { Button } from "../../components/primitive/button/button.component"
import { Text } from "../../components/primitive/text/text.component"
import { HeartSvg, PartyPopperSvg } from "@/public"

export const MemberSection = () => {
    const tagBtns = [
        "Hairdresser",
        "Personal Trainer",
        "Yoga Instructor",
        "Dog Groomer",
        "Plumber",
        "Tradie",
        "Interior Designer",
        "+more!",
    ]
    return (
        <section className="pt-12 pb-6 px-[30px] sm:px-0 bg-[#F3F4FF] mt-02" id="member-section">
            <Container>
                <div>
                    <div>
                        <Text variant="title">our members</Text>
                        <div>
                            <div className="sm:w-full  flex flex-col justify-between mb-[42px]  ">
                                <h1 className="2xl:text-[40px] text-[33px] sm:text-[28px] font-semibold mb-[30px] w-8/12 2xl:w-7/12 md:w-10/12 sm:w-full " >
                                    Why spend time promoting what you do, when
                                    you can spend time doing what you love.
                                </h1>
                                <p className=" w-8/12 2xl:w-7/12 md:w-10/12 sm:w-full" >
                                    <Text variant="text">
                                        ZippyCrowd saves time, money and effort on
                                        digital marketing, giving you the freedom to
                                        concentrate on what you do best as a…
                                    </Text>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex  justify-start gap-[6rem] lg:gap-[4rem] px-2 sm:px-0 md:px-0 md:gap-3 pb-[4rem] ">
                        <div className="w-1/4 sm:hidden">
                            <div>
                                <img
                                    src={PartyPopperSvg}
                                    alt="party-popper-svg"
                                    className=" w-2/3 mx-auto "
                                />
                            </div>
                        </div>
                        <div className="w-1/2 sm:w-full md:w-full  lg:w-full  ">
                            {tagBtns.map((label: string, idx: any) => (
                                <Button variant="tagbutton" key={idx}>
                                    {label}{" "}
                                </Button>
                            ))}
                        </div>
                    </div>
                    <div className=" pt-[5rem] mx-2">
                        <img src={HeartSvg} alt="heart-svg" />
                    </div>
                </div>
            </Container>
        </section>
    )
}
