import { wave1Xl, wave1md, wave1Xs } from "@/public"

export const Wave1Top = () => {
    return (
        <div>
            <img
                src={wave1Xl}
                alt="wave-1-xl"
                className="md:hidden sm:hidden w-full"
            />
            <img
                src={wave1md}
                alt="wave-1-md"
                className="lg:hidden xl:hidden 2xl:hidden sm:hidden w-full"
            />
            <img
                src={wave1Xs}
                alt="wave-1-xs"
                className="md:hidden xl:hidden 2xl:hidden lg:hidden w-full"
            />
        </div>
    )
}
