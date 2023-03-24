import { HeadingStyle, TextStyle, titleStyle } from "./text.component.style"

interface TextProps {
    children: React.ReactNode
    variant: string
}

export const Text = ({ variant, children }: TextProps) => {
    let classes
    switch (variant) {
        case "title":
            classes = titleStyle
            break
        case "header":
            classes = HeadingStyle
            break

        case "text":
            classes = TextStyle
            break
        default:
            break
    }

    return <div className={classes}>{children}</div>
}
