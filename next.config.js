/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns: [{
      hostname: 'api.lorem.space'
    }],
    unoptimized: true
  }
}

module.exports = nextConfig
