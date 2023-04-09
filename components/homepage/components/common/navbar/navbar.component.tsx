import { useEffect, useState } from "react"
import Link from "next/link"

import styles from './navbar.module.css'
import { Container } from "../../container/container.component"
import { NavLink } from "../../primitive/nav-link/nav-link.component"
import { NavLogo } from "@/public"
import { NavbarDrawer } from "./navbar-drawer.component"
import { Modal } from "../../primitive/modal/modal.component"
import { PricingModalContent } from "../../pricing-modal/pricing-modal.component"

export const Navbar = () => {
    const [showDrawer, setShowDrawer] = useState(false);
    const [showPriceModal, setShowPriceModal] = useState(false)
    const [navbarShow, setNavbarShow] = useState(true)
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    // function for smooth scrolling 
    const scrollToSection = (event: any) => {
        const targetElement: any = document.getElementById(event)
        targetElement.scrollIntoView({ behavior: "smooth" })
    }

    const priceModalHandler = () => {
        setShowPriceModal(!showPriceModal)
    }


    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const visible = prevScrollPos > currentScrollPos;
            setPrevScrollPos(currentScrollPos);
            setNavbarShow(visible);
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [navbarShow, prevScrollPos])


    return (
        <div className={`bg-[#5c15ad] py-5 w-full fixed top-0 z-10 ${navbarShow ? styles.navbar__visible : styles.navbarAnimation} `} >
            <Container>
                <nav className=" px-[15px] lg:px-0 flex justify-between">
                    <div className="my-auto cursor-pointer ">
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
                                How Zippy works
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
                            <p onClick={priceModalHandler} >Pricing</p>
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
                        <button className="bg-[#85fad7] rounded text-sm font-semibold  text-[#000] py-[6px] px-[19px] md:hidden sm:hidden hover:transform hover:-translate-y-0.5 hover:shadow-xl ">
                            <Link
                                href={"https://app.zippycrowd.com/home/control"}
                            >
                                Get started
                            </Link>
                        </button>
                        <button
                            className="border-2 text-[#85fad7] hidden font-sans font-semibold text-sm py-1 px-4 rounded md:block sm:block  "
                            onClick={() => setShowDrawer(!showDrawer)}
                        >
                            {showDrawer ? "Close Menu" : "Menu"}
                        </button>
                    </div>
                </nav>
                {showDrawer && <NavbarDrawer scrollToSection={scrollToSection} priceModalHandler={priceModalHandler} />}
                {<Modal isOpen={showPriceModal} onClick={priceModalHandler} >
                    <PricingModalContent />
                </Modal>}
            </Container>
        </div>
    )
}
