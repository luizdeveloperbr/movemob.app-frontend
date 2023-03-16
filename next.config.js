/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images:{
    remotePatterns: [{
      hostname: 'via.placeholder.com'
    }],
    unoptimized: true
  }
}

module.exports = nextConfig
