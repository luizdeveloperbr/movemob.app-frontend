/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images:{
    remotePatterns: [{
      hostname: 'via.placeholder.com'
    }],
    unoptimized: true
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/equipamentos': { page: '/equipamentos' }
    }
  },
}

module.exports = nextConfig
