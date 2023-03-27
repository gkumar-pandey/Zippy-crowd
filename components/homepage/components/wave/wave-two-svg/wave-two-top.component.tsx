import { wave2TopXl, wave2TopMd, wave2TopXs } from "@/public"

export const Wave2Top = () => {
    return (
        <div>
            <img
                src={wave2TopXl}
                alt="wave2-top"
                className="hidden xl:block 2xl:block w-full  "
            />
            <img
                src={wave2TopMd}
                alt="wave2-top-md"
                className="hidden lg:block md:block w-full"
            />
            <img
                src={wave2TopXs}
                alt="wave2-top-xs"
                className="hidden sm:block w-full "
            />
        </div>
    )
}
