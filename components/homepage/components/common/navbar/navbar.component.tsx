import { useEffect, useState } from "react"
import Link from "next/link"
import { Container } from "../../container/container.component"
import { NavLink } from "../../primitive/nav-link/nav-link.component"
import { NavLogo } from "@/public"
import { NavbarDrawer } from "./navbar-drawer.component"
import { Modal } from "../../primitive/modal/modal.component"
import { PricingModalContent } from "../../pricing-modal/pricing-modal.component"
import styles from './navbar.module.css'

export const Navbar = () => {
    const [showDrawer, setShowDrawer] = useState(false);
    const [showPriceModal, setShowPriceModal] = useState(false)
    const [navbarShow, setNavbarShow] = useState(false)
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    const scrollToSection = (event: any) => {
        const targetElement: any = document.getElementById(event)
        targetElement.scrollIntoView({ behavior: "smooth" })
    }

    const onClick = () => {
        setShowDrawer(!showDrawer)
    }

    const pricingHandler = () => {
        setShowPriceModal(!showPriceModal)
    }

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollPos > currentScrollPos;

        setPrevScrollPos(currentScrollPos);
        setNavbarShow(visible);

        console.log(visible)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    // console.log(styles.navbarAnimation)

    return (
        <div className={`bg-[#5c15ad] py-5 w-full fixed top-0 z-50 ${navbarShow ? styles.navbar__visible : styles.navbarAnimation}   `} >
            <Container>
                <nav className="  flex justify-between ">
                    <div className="my-auto">
                        <img src={NavLogo} alt="zippy-nav-logo" />
                    </div>
                    <div className="flex justify-between text-white py-1 gap-x-[30px] md:hidden sm:hidden">
                        <NavLink>
                            <p onClick={() => scrollToSection("about")}>
                                About
                            </p>
                        </NavLink>
                        <NavLink>
                            <p
                                onClick={() =>
                                    scrollToSection("how-zippy-work")
                                }
                            >
                                How Zippy Works
                            </p>
                        </NavLink>
                        <NavLink>
                            <p
                                onClick={() =>
                                    scrollToSection("how-zippy-help")
                                }
                            >
                                Why Zippy
                            </p>
                        </NavLink>
                        <NavLink>
                            <p onClick={pricingHandler} >Pricing</p>
                        </NavLink>
                    </div>
                    <div className="flex justify-between text-white gap-x-[50px] items-center ">
                        <div className="md:hidden sm:hidden">
                            <NavLink>
                                <Link
                                    href={
                                        "https://app.zippycrowd.com/home/control"
                                    }
                                >
                                    Log in
                                </Link>
                            </NavLink>
                        </div>
                        <button className="bg-[#85fad7] rounded text-sm font-semibold  text-[#000] py-[6px] px-[19px] md:hidden sm:hidden">
                            <Link
                                href={"https://app.zippycrowd.com/home/control"}
                            >
                                Get Started
                            </Link>
                        </button>
                        <button
                            className="border-2 text-[#85fad7] hidden font-sans font-semibold text-sm py-1 px-4 rounded md:block sm:block"
                            onClick={onClick}
                        >
                            {showDrawer ? "Close Menu" : "Menu"}
                        </button>
                    </div>
                </nav>
                {showDrawer && <NavbarDrawer />}
                {<Modal isOpen={showPriceModal} onClick={pricingHandler} >
                    <PricingModalContent />
                </Modal>}
            </Container>
        </div>
    )
}
