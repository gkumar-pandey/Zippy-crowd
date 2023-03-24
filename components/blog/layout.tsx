import Link from "next/link"
import Head from "next/head"
import { ReactNode } from "react"

interface BlogLayoutProps {
    children: ReactNode
}

export function BlogLayout(props: BlogLayoutProps) {
    const { children } = props
    return (
        <div className="bg-gray-100 min-h-screen">
            <Head>
                <title>ZippyCrowd Blog</title>
            </Head>
            <header className="bg-white p-8 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Blog Title</h1>
                <nav>
                    <Link href="/" className="px-4 py-2 hover:bg-gray-300">
                        Home
                    </Link>
                    <Link href="#" className="px-4 py-2 hover:bg-gray-300">
                        About
                    </Link>
                    <Link href="#" className="px-4 py-2 hover:bg-gray-300">
                        Contact
                    </Link>
                </nav>
            </header>
            <main className="container mx-auto p-8">{children}</main>
        </div>
    )
}
