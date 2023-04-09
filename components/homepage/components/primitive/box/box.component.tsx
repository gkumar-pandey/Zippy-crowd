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
                    <div className="border border-[#3be0ca] rounded-md p-[15px]">
                        {children}
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className={questionContainerStyle}>
                <div>
                    <button className={`${isActive ? ' bg-[#3be0ca] ' : 'bg-[#e9e9ed]'} ${quesWrapperStyle}  `} onClick={onClick} >{children}</button>
                </div>
            </div>
        )
    }
}
