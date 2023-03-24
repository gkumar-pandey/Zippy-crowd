/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
    publicRuntimeConfig: {
        blogPostsPath: "cms/blog-posts",
        helpPagesPath: "cms/help-pages",
    },
}

module.exports = nextConfig
