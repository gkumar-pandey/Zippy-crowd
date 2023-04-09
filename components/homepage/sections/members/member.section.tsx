import { Container } from "../../components/container/container.component"
import { Button } from "../../components/primitive/button/button.component"
import { Text } from "../../components/primitive/text/text.component"
import { PartyPopperSvg } from "@/public"
import styles from "./member.module.css"

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
        <section className={`pt-12 pb-6 bg-[#F3F4FF] mt-02 `} >
            <Container>
                <div className={`${styles.member} ${styles.memberSection} relative px-[15px]`}  >
                    <div>
                        <Text variant="title">our members</Text>
                        <div>
                            <div className="sm:w-full  flex flex-col justify-between mb-[42px]  ">
                                <h1 className="2xl:text-[40px] text-[33px] sm:text-[28px] font-semibold mb-[30px] w-8/12 2xl:w-7/12 md:w-10/12 sm:w-full " >
                                    Why spend time promoting what you do, when
                                    you can spend time doing what you love.
                                </h1>
                                <div className=" w-8/12 2xl:w-7/12 md:w-10/12 sm:w-full" >
                                    <Text variant="text">
                                        ZippyCrowd saves time, money and effort on
                                        digital marketing, giving you the freedom to
                                        concentrate on what you do best as a…
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex  justify-start gap-[6rem] lg:gap-[4rem] px-2 sm:px-0 md:px-0 md:gap-3 pb-[4rem] ">
                        <div className="w-1/4 flex justify-end md:justify-center md:items-start sm:hidden ">
                            <img
                                src={PartyPopperSvg}
                                alt="party-popper-svg"
                                className=" w-2/3 "
                            />
                        </div>
                        <div className="w-1/2 sm:w-full md:w-full  lg:w-full  ">
                            {tagBtns.map((label: string, idx: any) => (
                                <Button variant="tagbutton" key={idx}>
                                    {label}{" "}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
