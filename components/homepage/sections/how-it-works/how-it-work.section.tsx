import { Container } from "../../components/container/container.component"
import { Text } from "../../components/primitive/text/text.component"
import {
    FeatureImg1Back,
    FeatureImg1Front,
    FeatureImg2Back,
    FeatureImg2Front,
    FeatureImg3Back,
    FeatureImg3Front,
    HeartSvg
} from "@/public"


export const HowItWorkSection = () => {
    return (
        <section className="bg-[#F3F4FF] pt-[10rem] pb-11 "  >
            <div id="how-zippy-work">
                <Container>
                    <div>
                        <Text variant="title">How it works</Text>
                        <div className="grid  grid-cols-2 sm:grid-cols-1 ">
                            <div className="flex flex-wrap   sm:w-full ">
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
                                    <img
                                        src={FeatureImg1Front}
                                        alt="front-feature-image"
                                        className="absolute"
                                    />
                                    <img
                                        src={FeatureImg1Back}
                                        alt="back-feature-image"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[10rem]">
                        <div className="grid  grid-cols-2 sm:grid-cols-1 ">
                            <div className="flex  flex-wrap sm:w-full  ">
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
                                    <img
                                        src={FeatureImg2Front}
                                        alt="front-feature-image"
                                        className="absolute"
                                    />
                                    <img
                                        src={FeatureImg2Back}
                                        alt="back-feature-image"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[10rem]">
                        <div className="grid  grid-cols-2 sm:grid-cols-1 ">
                            <div className="flex flex-wrap  sm:w-full ">
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
                                    <img
                                        src={FeatureImg3Front}
                                        alt="feature-image-front"
                                        className="absolute"
                                    />
                                    <img
                                        src={FeatureImg3Back}
                                        alt="feature-image-back"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </Container>
            </div>
            <Container>
                <div className=" relative  " >
                    <img src={HeartSvg} alt="heart-svg-img" className="absolute left-5 w-11 h-11" />
                </div>
            </Container>
        </section >
    )
}
