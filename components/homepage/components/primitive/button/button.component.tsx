import {
    filledClasses,
    outlineClasses,
    tagClasses,
} from "./button.component.style"

interface ButtonProps {
    children: React.ReactNode
    variant: string
    onClick?: () => void
}

export const Button = ({ variant, children, onClick }: ButtonProps) => {
    let classes
    switch (variant) {
        case "outlined":
            classes = outlineClasses
            break
        case "tagbutton":
            classes = tagClasses
            break
        default:
            classes = filledClasses
            break
    }

    return (
        <>
            <button className={classes} onClick={onClick}>
                {children}
            </button>
        </>
    )
}
