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
import styles from './how-it-work.module.css'


interface TextProps {
    boldText: string,
    normalText: string,
    image: string,
    backImage: string,
}

const TextImgContainer = ({ boldText, normalText, image, backImage }: TextProps) => {
    return (<div className="grid grid-cols-2 sm:grid-cols-1  ">
        <div className="flex flex-wrap sm:w-full md:pr-[15px] ">
            <div>
                <div className="w-10/12 lg:w-full lg:pr-2 md:w-full sm:w-full " >
                    <Text variant="header">
                        {boldText}
                    </Text>
                </div>
                <div className=" w-10/12 lg:w-full md:w-full sm:w-full lg:pr-2 " >
                    <Text variant="text">
                        {normalText}
                    </Text>
                </div>
            </div>
        </div>
        <div className="flex items-center justify-end  md:pl-[15px] ">
            <div className="relative w-[445px] ">
                <img
                    src={image}
                    alt="front-feature-image"
                    className="absolute"
                />
                <img
                    src={backImage}
                    alt="back-feature-image"
                />
            </div>
        </div>
    </div>)
}


export const HowItWorkSection = () => {
    return (
        <section className="bg-[#F3F4FF]  pb-11 border border-white "  >
            <div className={styles.howItWork} >
                <Container>
                    <div>
                        <div>
                            <Text variant="title">How it works</Text>
                            <TextImgContainer boldText={'Connect your loyal customer community to your business.'} normalText="Claim your business profile on ZippyCrowd, share your work and watch your community support you." image={FeatureImg1Front} backImage={FeatureImg1Back} />
                        </div>

                        <div className="mt-[400px] lg:mt-[100px] md:mt-[100px] sm:mt-[96px]">
                            <TextImgContainer boldText={'Get recommended by customers who trust you and love your work.'} normalText="Get notified every time you’re recommended by your customer community and win more business through word of mouth that people trust." image={FeatureImg2Front} backImage={FeatureImg2Back} />
                        </div>
                        <div className="mt-[400px] lg:mt-[100px] md:mt-[100px] sm:mt-[96px] ">
                            <TextImgContainer boldText={'Build trust and reputation that makes you stand out.'} normalText="Your reputation on ZippyCrowd makes your business more discoverable. This builds trust in you and your business, helping you reach more customers." image={FeatureImg3Front} backImage={FeatureImg3Back} />
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
