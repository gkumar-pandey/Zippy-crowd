import { IconExternalLink } from "@/public"
import Image from "next/image"

interface LinkCellProps {
    children: React.ReactNode
}

export const FooterLink = ({ children }: LinkCellProps) => {
    return (
        <div className="flex p-2 gap-1">
            <div className="hover:text-[#ccd0d5] text-base ">{children}</div>
            <Image src={IconExternalLink} alt="external-link" />
        </div>
    )
}
