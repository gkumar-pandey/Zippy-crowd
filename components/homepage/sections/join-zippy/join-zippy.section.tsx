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
                    className=" h-[120vh] md:h-[100vh]  relative"
                >
                    <div className=" ">
                        <div className="absolute   md:left-0 md:bottom-[20%] md:w-1/4">
                            <Image src={DogImg} alt="img-dog" />
                        </div>
                        <div className=" absolute right-[13%] top-[15%] md:right-0  md:top-[60%] sm:hidden ">
                            <Image src={DecoratorImg} alt="decorator-img" />
                        </div>
                        <div className="absolute right-[35%] top-[30%] w-[40%] md:top-[35%] md:right-[30%] md:w-[45%]  sm:top-[60%]  sm:right-2 sm:w-full ">
                            <Image src={HairImg} alt="hair-cut-img" />
                        </div>
                        <div className="absolute left-0 top-[65%] md:left-[40%] md:top-[70%] md:w-1/4  sm:hidden ">
                            <Image src={BarberImg} alt="barber-img" />
                        </div>
                        <div className="absolute  left-[33%] top-[67%] w-[30%] md:left-[60%] md:top-[5%] md:w-[40%]  sm:left-[20%] sm:w-[80%] sm:top-[30%] ">
                            <Image src={BoxingImg} alt="boxing-img" />
                        </div>
                        <div className="absolute top-[60%] left-[70%] w-[25%] md:left-0 md:top-0 sm:hidden ">
                            <Image src={GardenImg} alt="garden-img" />
                        </div>
                    </div>
                    <div className="flex justify-center absolute bottom-0 w-full">
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
