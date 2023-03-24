import Image from "next/image"
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
        <section className="pt-12 bg-[#F3F4FF] mt-02" id="member-section">
            <Container>
                <div id="member-section">
                    <div>
                        <Text variant="title">our members</Text>
                        <div>
                            <div className="w-4/6 sm:w-full  flex flex-col justify-between gap-10 ">
                                <Text variant="header">
                                    Why spend time promoting what you do, when
                                    you can spend time doing what you love.
                                </Text>
                                <Text variant="text">
                                    ZippyCrowd saves time, money and effort on
                                    digital marketing, giving you the freedom to
                                    concentrate on what you do best as a…
                                </Text>
                            </div>
                        </div>
                    </div>

                    <div className="flex  justify-between px-2 pb-[4rem]">
                        <div className="w-1/4 sm:hidden">
                            <div className="  ">
                                <Image
                                    src={PartyPopperSvg}
                                    alt="party-popper-svg"
                                    className=" w-1/2 mx-auto "
                                />
                            </div>
                        </div>
                        <div className="w-3/4 sm:w-full ">
                            {tagBtns.map((label: string, idx: any) => (
                                <Button variant="tagbutton" key={idx}>
                                    {label}{" "}
                                </Button>
                            ))}
                        </div>
                    </div>
                    <div className=" pt-[5rem] mx-2">
                        <Image src={HeartSvg} alt="heart-svg" />
                    </div>
                </div>
            </Container>
        </section>
    )
}
