/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images:{
    remotePatterns: [{
      hostname: 'api.lorem.space'
    }],
    unoptimized: true
  }
}

module.exports = nextConfig
