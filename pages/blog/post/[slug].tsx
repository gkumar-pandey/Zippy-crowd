import { BlogLayout } from "@/components/blog"
import { readdirSync, readFileSync } from "fs"
import { GetStaticPropsContext } from "next"
import { MDXRemoteSerializeResult, MDXRemote } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"
import Head from "next/head"
import getConfig from "next/config"

interface StaticSlugPath {
    params: {
        slug: string
    }
}

const {
    publicRuntimeConfig: { blogPostsPath },
} = getConfig()

export function getStaticPaths() {
    const filenames: string[] = readdirSync(blogPostsPath)
    const paths: StaticSlugPath[] = filenames.map((filename) => {
        return {
            params: {
                slug: filename.replace(/\.mdx$/, ""),
            },
        }
    })

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps(
    context: GetStaticPropsContext<{ slug: string }>
) {
    const filename: string = `${blogPostsPath}/${context.params?.slug}.mdx`
    const data: string = readFileSync(filename, "utf-8")

    const source: MDXRemoteSerializeResult = await serialize(data, {
        parseFrontmatter: true,
    })
    return { props: { source } }
}

interface PostPageProps {
    source: MDXRemoteSerializeResult
}

export default function Page(props: PostPageProps) {
    const { source } = props

    const frontmatter = source.frontmatter || {}
    const metaEntries = Object.keys(frontmatter)
        .filter((key) => key.startsWith("meta-"))
        .map((key) => ({
            name: key.replace("meta-", ""),
            content: frontmatter[key],
        }))

    return (
        <BlogLayout>
            <Head>
                <title>{`${frontmatter.title} - zippycrowd.com`}</title>
                {metaEntries.map((props) => (
                    <meta key={props.name} {...props} />
                ))}
            </Head>
            <div className="prose mx-auto">
                <h1>{source.frontmatter?.title}</h1>
                <p>{source.frontmatter?.date}</p>
                <MDXRemote {...source} />
            </div>
        </BlogLayout>
    )
}
