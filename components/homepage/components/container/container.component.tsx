interface ContainerProps {
    children: React.ReactNode
}

export const Container = (props: ContainerProps) => {
    const { children } = props

    return <div className="max-w-[1140px] px-4  mx-auto my-0"> {children}</div>
}
