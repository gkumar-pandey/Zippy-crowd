import { navLinkStyle } from "./nav-link.component.style"

interface NavlabelProps {
    children: React.ReactNode
}

export const NavLink = ({ children }: NavlabelProps) => {
    return <div className={navLinkStyle}>{children}</div>
}
