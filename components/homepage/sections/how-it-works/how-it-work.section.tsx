import { Container } from "../../components/container/container.component"
import { Text } from "../../components/primitive/text/text.component"
import {
    FeatureImg1Back,
    FeatureImg1Front,
    FeatureImg2Back,
    FeatureImg2Front,
    FeatureImg3Back,
    FeatureImg3Front,
} from "@/public"
import Image from "next/image"

export const HowItWorkSection = () => {
    return (
        <section className="bg-[#F3F4FF]" id="how-zippy-work">
            <Container>
                <div className="pt-[10rem]">
                    <Text variant="title">How it works</Text>
                    <div className="flex sm:flex-wrap ">
                        <div className="flex flex-wrap w-2/4  sm:w-full ">
                            <div>
                                <Text variant="header">
                                    <p>
                                        Connect your loyal customer community to
                                        your business.
                                    </p>
                                </Text>
                                <Text variant="text">
                                    <p>
                                        {" "}
                                        Claim your business profile on
                                        ZippyCrowd, share your work and watch
                                        your community support you.
                                    </p>
                                </Text>
                            </div>
                        </div>
                        <div className=" flex items-center justify-center  ">
                            <div className="relative w-[90%]">
                                <Image
                                    src={FeatureImg1Front}
                                    alt="front-feature-image"
                                    className="absolute"
                                />
                                <Image
                                    src={FeatureImg1Back}
                                    alt="back-feature-image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-[10rem]">
                    <div className="flex sm:flex-wrap">
                        <div className="flex w-2/4 flex-wrap sm:w-full  ">
                            <div>
                                <Text variant="header">
                                    <p>
                                        Get recommended by customers who trust
                                        you and love your work.
                                    </p>
                                </Text>
                                <Text variant="text">
                                    <p>
                                        Get notified every time you’re
                                        recommended by your customer community
                                        and win more business through word of
                                        mouth that people trust.
                                    </p>
                                </Text>
                            </div>
                        </div>
                        <div className=" flex items-center justify-center  ">
                            <div className="relative w-[90%]">
                                <Image
                                    src={FeatureImg2Front}
                                    alt="front-feature-image"
                                    className="absolute"
                                />
                                <Image
                                    src={FeatureImg2Back}
                                    alt="back-feature-image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-[10rem]">
                    <div className="flex sm:flex-wrap">
                        <div className="flex flex-wrap w-2/4  sm:w-full ">
                            <div>
                                <Text variant="header">
                                    <p>
                                        Build trust and reputation that makes
                                        you stand out.
                                    </p>
                                </Text>
                                <Text variant="text">
                                    <p>
                                        {" "}
                                        Claim your business profile on
                                        ZippyCrowd, share your work and watch
                                        your community support you..
                                    </p>
                                </Text>
                            </div>
                        </div>
                        <div className=" flex items-center justify-center ">
                            <div className="relative">
                                <Image
                                    src={FeatureImg3Front}
                                    alt="feature-image-front"
                                    className="absolute"
                                />
                                <Image
                                    src={FeatureImg3Back}
                                    alt="feature-image-back"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
