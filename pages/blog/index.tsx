// @ts-nocheck
import getConfig from "next/config"
import Image from "next/image"
import { readdirSync, readFileSync } from "fs"
import Link from "next/link"
import { serialize } from "next-mdx-remote/serialize"
import { MDXRemoteSerializeResult } from "next-mdx-remote"
import { BlogLayout } from "@/components/blog"

const {
    publicRuntimeConfig: { blogPostsPath },
} = getConfig()

interface PageProp {
    posts: {
        slug: string
        result: MDXRemoteSerializeResult
    }[]
}

export async function getStaticProps() {
    const files = readdirSync(blogPostsPath)

    const posts = files.map(async (fileName) => {
        const slug = fileName.replace(/\.mdx$/, "")
        const data = readFileSync(`${blogPostsPath}/${fileName}`, "utf-8")
        const result = await serialize(data, { parseFrontmatter: true })
        return { slug, result }
    })

    return {
        props: {
            posts: await Promise.all(posts),
        },
    }
}

export default function Page(props: PageProp) {
    const { posts } = props
    return (
        <BlogLayout>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0">
                {posts?.map(({ slug, result }) => (
                    <div
                        key={slug}
                        className="border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col"
                    >
                        <Link href={`/blog/post/${slug}`}>
                            <Image
                                alt={result.frontmatter?.title}
                                src={`${result.frontmatter?.thumbnail}`}
                            />
                            <h1 className="p-4">{result.frontmatter?.title}</h1>
                        </Link>
                    </div>
                ))}
            </div>
        </BlogLayout>
    )
}
