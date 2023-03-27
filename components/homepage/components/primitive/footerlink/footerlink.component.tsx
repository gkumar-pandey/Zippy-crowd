import { IconExternalLink } from "@/public"

interface LinkCellProps {
    children: React.ReactNode;
    type: string;
}

export const FooterLink = ({ children, type }: LinkCellProps) => {
    return (
        <div className="flex items-center py-2  gap-1">
            <div className="hover:text-[#ccd0d5] text-base cursor-pointer ">{children}</div>
            {type == "external" && <img src={IconExternalLink} alt="external-link" className="w-3 h-3 " />}
        </div>
    )
}
