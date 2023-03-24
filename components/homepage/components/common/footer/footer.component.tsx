import Image from "next/image"
import Link from "next/link"
import {
    IconBackToTop,
    FbIconSvg,
    instagramIconSvg,
    twitterIconSvg,
    linkedinIconSvg,
    FooterLogo,
} from "@/public"
import { Container } from "../../container/container.component"
import { SocialIcon } from "../../primitive/social-icon/social-icon.component"
import { Button } from "../../primitive/button/button.component"
import { FooterLink } from "../../primitive/footerlink/footerlink.component"

export const Footer = () => {
    const socialIconData = [
        { icon: FbIconSvg, link: "https://www.facebook.com/zippycrowd/" },
        { icon: twitterIconSvg, link: "https://twitter.com/zippy_crowd" },
        {
            icon: linkedinIconSvg,
            link: "https://www.linkedin.com/company/6643469/",
        },
        {
            icon: instagramIconSvg,
            link: "https://www.instagram.com/zippycrowd/",
        },
    ]

    const handleBackToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <section className="pt-10  footer-header footer" id="footer-section">
            <div className="">
                <Container>
                    <div className=" footer-container ">
                        <div>
                            <div className="px-3">
                                <Image src={FooterLogo} alt="footer-logo" />
                            </div>
                        </div>
                        <div className=" my-10">
                            <div className="flex gap-5 font-sans lg:flex-wrap xl:flex-wrap sm:flex-wrap  2xl:flex-wrap  ">
                                <div>
                                    <div className="px-3 text-lg text-[#fff]">
                                        <h2 className="p-2 text-[#CCD0D5] font-sans text-lg ">
                                            Company
                                        </h2>
                                        <FooterLink>
                                            <Link
                                                href={
                                                    "https://blog.zippycrowd.com/about-us/"
                                                }
                                                target="_blank"
                                            >
                                                About us
                                            </Link>
                                        </FooterLink>
                                        <FooterLink>
                                            <Link
                                                href={
                                                    "https://blog.zippycrowd.com/work-with-us/"
                                                }
                                                target="_blank"
                                            >
                                                Work with us
                                            </Link>
                                        </FooterLink>
                                        <FooterLink>
                                            <Link
                                                href={
                                                    "https://blog.zippycrowd.com/contact-us/"
                                                }
                                                target="_blank"
                                            >
                                                Contact us
                                            </Link>
                                        </FooterLink>
                                    </div>
                                </div>
                                <div>
                                    <div className="px-3 text-lg text-[#fff]">
                                        <h2 className="p-2 text-[#CCD0D5] font-sans text-lg ">
                                            Resources
                                        </h2>
                                        <p className="p-2">FAQs</p>
                                        <FooterLink>
                                            <Link
                                                href={
                                                    "https://blog.zippycrowd.com/"
                                                }
                                                target="_blank"
                                            >
                                                Community
                                            </Link>
                                        </FooterLink>
                                        <FooterLink>
                                            <Link
                                                href={
                                                    "https://blog.zippycrowd.com/"
                                                }
                                                target="_blank"
                                            >
                                                Blog
                                            </Link>
                                        </FooterLink>
                                    </div>
                                </div>
                                <div>
                                    <div className="px-3  text-lg text-[#fff]">
                                        <h2 className="p-2 text-[#CCD0D5] font-sans text-lg ">
                                            Legal
                                        </h2>
                                        <FooterLink>
                                            <Link
                                                href={
                                                    "https://blog.zippycrowd.com/legal-hub/gdpr-addendum/"
                                                }
                                                target="_blank"
                                            >
                                                GDPR
                                            </Link>
                                        </FooterLink>
                                        <FooterLink>
                                            <Link
                                                href={
                                                    "https://blog.zippycrowd.com/legal-hub/"
                                                }
                                                target="_blank"
                                            >
                                                Security
                                            </Link>
                                        </FooterLink>
                                        <FooterLink>
                                            <Link
                                                href={
                                                    "https://blog.zippycrowd.com/legal-hub/privacy-policy/"
                                                }
                                                target="_blank"
                                            >
                                                Privacy
                                            </Link>
                                        </FooterLink>
                                    </div>
                                </div>

                                <div className="lg:w-full xl:w-full 2xl:w-full ">
                                    <div className="px-3 text-lg font-sans text-[#fff]">
                                        <h2 className="p-2 text-[#ccd0d5] font-sans text-lg ">
                                            Platform
                                        </h2>
                                        <p className="p-2 text-base">
                                            Features
                                        </p>
                                        <FooterLink>
                                            <Link
                                                href={
                                                    "https://blog.zippycrowd.com/product/getting-started/"
                                                }
                                            >
                                                Getting Started
                                            </Link>
                                        </FooterLink>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex my-5 items-center justify-between sm:flex-wrap ">
                            <div className="flex gap-5 sm:justify-start sm:w-full">
                                <Link href={"https://app.zippycrowd.com/login"}>
                                    <Button variant="filled">
                                        Get Started
                                    </Button>
                                </Link>
                                <Link href={"https://app.zippycrowd.com/login"}>
                                    <Button variant="outlined">Login</Button>
                                </Link>
                            </div>
                            <div>
                                <div
                                    className="flex mx-3 items-center justify-center text-[#fff] font-sans sm:py-[1rem]  "
                                    onClick={handleBackToTop}
                                >
                                    <Image
                                        src={IconBackToTop}
                                        alt="Back To top icon"
                                    />
                                    <button>Back to top</button>
                                </div>
                            </div>
                        </div>
                        <div className="flex py-[2rem] items-center w-full  sm:flex-wrap-reverse  ">
                            <div className=" sm:w-full text-center py-5">
                                <p>© Copyright 2022. All rights reserved</p>
                            </div>
                            <div className=" w-2/6 sm:w-full justify-evenly flex gap-3  sm:justify-start">
                                <button>
                                    <Link
                                        href={
                                            "https://blog.zippycrowd.com/legal-hub/privacy-policy/"
                                        }
                                        target="_blank"
                                    >
                                        Privacy policy
                                    </Link>
                                </button>
                                <button>
                                    <Link
                                        href={
                                            "https://blog.zippycrowd.com/legal-hub/terms/"
                                        }
                                        target="_blank"
                                    >
                                        Terms
                                    </Link>
                                </button>
                            </div>

                            <div className="flex justify-end w-3/6 sm:my-[4rem] sm:w-full  sm:justify-center  ">
                                <div className="flex items-center justify-between">
                                    {socialIconData.map(
                                        ({ icon, link }, idx) => (
                                            <SocialIcon
                                                img={icon}
                                                link={link}
                                                key={idx}
                                            />
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}
