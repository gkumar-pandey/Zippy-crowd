interface headingProps {
    children: React.ReactNode
}

interface BtnProps {
    children: React.ReactNode
}

const HeadingText = ({ children }: headingProps) => (
    <p className="text-lg font-semibold uppercase mb-2 ">{children}</p>
)
const NormalText = ({ children }: headingProps) => (
    <p className="text-sm font-normal mb-3.5 ">{children}</p>
)
const PinkBtn = ({ children }: BtnProps) => (
    <button className="bg-[#e188af] py-1.5 px-2.5 text-base font-semibold  rounded-full ">
        {children}
    </button>
)

export const PricingModalContent = () => {
    return (
        <div>
            <div className=" ">
                <HeadingText>basic account</HeadingText>
                <NormalText>
                    Our basic account is free and we promise to keep it this
                    way.
                </NormalText>
                <PinkBtn>Free!</PinkBtn>
            </div>
            <div className="py-7 ">
                <HeadingText>ENTERPRISE ACCOUNTS</HeadingText>
                <NormalText>
                    Our enterprise accounts will have additional benefits as
                    part of a paid-plan so you can more effectively nurture your
                    reputation.
                </NormalText>
                <PinkBtn>Coming soon</PinkBtn>
            </div>
            <div>
                <p className="text-base font-semibold float-right">
                    For now,{" "}
                    <span className=" underline cursor-pointer ">
                        try our free account
                    </span>{" "}
                </p>
            </div>
        </div>
    )
}
