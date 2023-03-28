import Link from "next/link"
import {
    IconBackToTop,
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    LinkedinIcon,
    FooterLogo,
} from "@/public"
import { Container } from "../../container/container.component"
import { SocialIcon } from "../../primitive/social-icon/social-icon.component"
import { Button } from "../../primitive/button/button.component"
import { FooterLink } from "../../primitive/footerlink/footerlink.component"


const FooterLinkTittle = ({ title }: { title: string }) => <>
    <h2 className=" text-[#CCD0D5] font-sans text-lg ">
        {title}
    </h2>
</>

const FooterLinkList = ({ title, link }: { title: string, link: string, }) => {

    const handleSmoothScroll = () => {
        const ScrollSection = document.querySelector(`${link}`);
        ScrollSection?.scrollIntoView({ behavior: "smooth" })

    }

    if (link[0] == '#') {
        return <>
            <FooterLink type="section" >
                <p onClick={handleSmoothScroll} >{title}</p>
            </FooterLink>
        </>
    }

    return <>
        <FooterLink type="external" >
            <Link
                href={link}
                target="_blank"

            >
                {title}
            </Link>
        </FooterLink></>
}


export const Footer = () => {
    const socialIconData = [
        { icon: FacebookIcon, link: "https://www.facebook.com/zippycrowd/" },
        { icon: TwitterIcon, link: "https://twitter.com/zippy_crowd" },
        {
            icon: LinkedinIcon,
            link: "https://www.linkedin.com/company/6643469/",
        },
        {
            icon: InstagramIcon,
            link: "https://www.instagram.com/zippycrowd/",
        },
    ]




    const handleBackToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <section className="pt-10  footer-header footer" id="footer-section">
            <div className="footer-bg-img" >
                <Container>
                    <div className="footer-container pb-5 " >
                        <div >
                            <img src={FooterLogo} alt="footer-logo" className=" md:w-2/5 sm:w-9/12 " />
                        </div>
                        <div className="my-12">
                            <div className="grid gap-y-10 2xl:w-1/2  2xl:grid-cols-3 sm:grid-cols-2 grid-cols-4">
                                <div className="text-lg text-[#fff]">
                                    <FooterLinkTittle title="Company" />
                                    <FooterLinkList title="About us" link='https://blog.zippycrowd.com/about-us/' />
                                    <FooterLinkList title="Work with us" link="https://blog.zippycrowd.com/work-with-us/" />
                                    <FooterLinkList title="Contact us" link="https://blog.zippycrowd.com/contact-us/ " />
                                </div>
                                <div className=" text-lg text-[#fff]">
                                    <FooterLinkTittle title="Resources" />
                                    <FooterLinkList title="FAQs" link="#faq-section" />
                                    <FooterLinkList title="Community" link="https://blog.zippycrowd.com/" />
                                    <FooterLinkList title="Blog" link="https://blog.zippycrowd.com/" />
                                </div>
                                <div className=" text-lg text-[#fff]">
                                    <FooterLinkTittle title="Legal" />
                                    <FooterLinkList title="GDPR" link="https://blog.zippycrowd.com/legal-hub/gdpr-addendum/" />
                                    <FooterLinkList title="Security" link="https://blog.zippycrowd.com/legal-hub/" />
                                    <FooterLinkList title="Privacy" link="https://blog.zippycrowd.com/legal-hub/privacy-policy/" />
                                </div>
                                <div className="lg:w-full xl:w-full 2xl:w-full ">
                                    <div className="text-lg font-sans text-[#fff]">
                                        <FooterLinkTittle title="Platform" />
                                        <FooterLinkList title="Features" link="#how-zippy-work" />
                                        <FooterLinkList title="Getting Started" link="https://blog.zippycrowd.com/product/getting-started/" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-1 sm:gap-y-10 ">
                            <div className="flex gap-10">
                                <Link href={"https://app.zippycrowd.com/login"}>
                                    <Button variant="filled">
                                        Get started
                                    </Button>
                                </Link>
                                <Link href={"https://app.zippycrowd.com/login"}>
                                    <Button variant="outlined">Login</Button>
                                </Link>
                            </div>
                            <div className="flex justify-end sm:justify-start " >
                                <div
                                    className="flex items-center gap-2 cursor-pointer "
                                    onClick={handleBackToTop}
                                >
                                    <img
                                        src={IconBackToTop}
                                        alt="Back To top icon"
                                    />
                                    <button>Back to top</button>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center w-full justify-between  sm:flex-wrap-reverse  ">
                            <div className="sm:w-full py-5">
                                <p>© Copyright 2022. All rights reserved</p>
                            </div>
                            <div className=" w-2/6  md:justify-start 2xl:w-4/6 2xl:justify-start 2xl:pl-4 sm:w-full justify-evenly flex gap-3  sm:justify-start">
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

                            <div className=" flex justify-end  sm:my-[4rem] sm:w-full  sm:justify-center  ">
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
