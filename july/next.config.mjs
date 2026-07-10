/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    eslint: {
        // Skip ESLint during production builds
        ignoreDuringBuilds: true,
    },
    typescript: {
        // Skip TypeScript errors during production builds
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
