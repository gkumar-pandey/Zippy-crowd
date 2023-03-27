import { BeakSvg } from "@/public"
import {
    ansWrapper,
    beakSvgStyle,
    questionContainerStyle,
    quesWrapperStyle,
} from "./box.component.style"

interface BoxProps {
    children: React.ReactNode
    variant: string
    onClick?: any;
    activeQuestion?: any;
    idx?: any;
}

export const Box = ({ children, variant, onClick, activeQuestion, idx }: BoxProps) => {
    let isActive = activeQuestion == idx

    if (variant == "ansbox") {
        return (
            <div className={`${ansWrapper}`}>
                <div className="ans-container relative">
                    <img
                        src={BeakSvg}
                        alt="beak-image"
                        className={beakSvgStyle}
                    />
                    <div className="border border-[#3be0ca] rounded-md p-2">
                        {children}
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className={questionContainerStyle}>
                <div>
                    <button className={`${quesWrapperStyle} ${isActive && ' bg-[#3be0ca] '}`} onClick={onClick} >{children}</button>
                </div>
            </div>
        )
    }
}
