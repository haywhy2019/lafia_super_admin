/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        // ignoreDuringBuilds: true,
      },
      images: {
        domains: ["kycbucket.s3.eu-west-2.amazonaws.com"],
      },
};

export default nextConfig;
