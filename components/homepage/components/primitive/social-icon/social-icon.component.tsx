import Image from "next/image"
import Link from "next/link"
import { socialIconStyle } from "./social-icon.component.style"

interface IconProps {
    img: any
    link: string
}

export const SocialIcon = ({ img, link }: IconProps) => (
    <Link href={link} target="_blank">
        <Image src={img} alt="" className={socialIconStyle} />
    </Link>
)
