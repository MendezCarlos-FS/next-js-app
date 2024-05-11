import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    basePath: "/next-js-app",
    distDir: "docs",
};

const withMDX = createMDX();

export default withMDX(nextConfig);
