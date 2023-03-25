import Link from "next/link"
import { Container } from "../../components/container/container.component"
import { Wave2Top } from "../../components/wave/wave-two-svg/wave-two-top.component"
import { Wave2Bottom } from "../../components/wave/wave-two-svg/wave-two-bottom.component"
import { Button } from "../../components/primitive/button/button.component"
import {
    DogImg,
    DecoratorImg,
    BarberImg,
    BoxingImg,
    HairImg,
    GardenImg,
} from "@/public"
import Image from "next/image"

export const JoinZippy = () => {
    return (
        <section className=" gradient-top-to-bottom mt-02">
            <div>
                <Wave2Top />
            </div>
            <Container>
                <div
                    id="join-zippy-section"
                    className="pt-[100%] sm:p-0   relative sm:block "
                >
                    <div className="  mb-28">
                        <div className="absolute top-[68%] sm:relative w-1/4 sm:w-3/4 sm:block sm:top-0 sm:mb-[40px] ">
                            <img src={DogImg} alt="img-dog" className="" />
                        </div>
                        <div className="absolute w-[38%] right-[13%]  top-[7%] sm:relative sm:right-0 sm:block sm:w-3/4 sm:ml-[25%] sm:mb-[40px] ">
                            <img src={BoxingImg} alt="boxing-img" />
                        </div>
                        <div className="absolute w-1/2 left-[25%] top-[36%] sm:relative  sm:block sm:w-[100%] sm:left-0  ">
                            <img src={HairImg} alt="hair-cut-img" />
                        </div>
                        <div className="absolute top-0 left-0 w-1/4 md:left-0 md:top-0 sm:hidden ">
                            <img src={GardenImg} alt="garden-img" />
                        </div>
                        <div className="absolute w-1/4 left-[38%] top-[71%] md:left-[40%] md:top-[70%] md:w-1/4  sm:hidden ">
                            <img src={BarberImg} alt="barber-img" />
                        </div>
                        <div className=" absolute w-1/4 left-3/4 top-[65%] md:right-0  md:top-[60%] sm:hidden ">
                            <img src={DecoratorImg} alt="decorator-img" />
                        </div>
                    </div>
                    <div className=" flex justify-center  bottom-0  ">
                        <Link href={"https://app.zippycrowd.com/login"}>
                            <Button variant="filled">
                                Join us on ZippyCrowd
                            </Button>
                        </Link>
                    </div>
                </div>
            </Container>

            <Wave2Bottom />
        </section>
    )
}
