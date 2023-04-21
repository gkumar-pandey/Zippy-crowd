import Head from "next/head"
import { Navbar, Footer } from "./components"
import {
    HeroSection,
    MemberSection,
    JoinZippy,
    HowItWorkSection,
    YogaSection,
    HowZippyHelpSection,
    SignUpSection,
    AboutSection,
    FAQSection,
    CTA,
} from "./sections"

export function HomePage() {
    return (
        <div>
            <Head>
                <title>ZippyCrowd</title>
            </Head>
            <Navbar />
            <HeroSection />
            <MemberSection />
            <JoinZippy />
            <HowItWorkSection />
            <YogaSection />
            <HowZippyHelpSection />
            <SignUpSection />
            <AboutSection />
            <FAQSection />
            <CTA />
            <Footer />
        </div>
    )
}
