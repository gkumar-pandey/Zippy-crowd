interface ContainerProps {
    children: React.ReactNode
}

export const Container = (props: ContainerProps) => {
    const { children } = props

    return <div className="max-w-[1140px] px-[15px] mx-auto my-0"> {children}</div>
}
