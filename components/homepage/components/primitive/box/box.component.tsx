import { BeakSvg } from "@/public"
import Image from "next/image"
import {
    ansWrapper,
    beakSvgStyle,
    questionContainerStyle,
    quesWrapperStyle,
} from "./box.component.style"

interface BoxProps {
    children: React.ReactNode
    variant: string
}

export const Box = ({ children, variant }: BoxProps) => {
    if (variant == "ansbox") {
        return (
            <div className={ansWrapper}>
                <div className="ans-container relative">
                    <Image
                        src={BeakSvg}
                        alt="beak-image"
                        className={beakSvgStyle}
                    />
                    <div className="border border-green rounded-md p-2">
                        {children}
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className={questionContainerStyle}>
                <div>
                    <button className={quesWrapperStyle}>{children}</button>
                </div>
            </div>
        )
    }
}
