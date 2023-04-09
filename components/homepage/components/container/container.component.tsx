interface ContainerProps {
    children: React.ReactNode
}

export const Container = (props: ContainerProps) => {
    const { children } = props

    return <div className="max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px]   mx-auto my-0 relative "> {children}</div>
}
