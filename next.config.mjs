import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    basePath: "/next-js-app",
    distDir: "docs",
    output: "export",
    images: {
        unoptimized: true
    }
};

const withMDX = createMDX();

export default withMDX(nextConfig);
