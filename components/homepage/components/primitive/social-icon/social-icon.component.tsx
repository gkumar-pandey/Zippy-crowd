import Image from "next/image"
import Link from "next/link"
import { socialIconStyle } from "./social-icon.component.style"

interface IconProps {
    img: any
    link: string
}

export const SocialIcon = ({ img, link }: IconProps) => (
    <Link href={link} target="_blank" className="flex justify-center items-center " >
        <img src={img} alt="" className={socialIconStyle} />
    </Link>
)
