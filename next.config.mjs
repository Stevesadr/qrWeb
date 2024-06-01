/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        port: "https",
        hostname: "qr-code.ir",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
