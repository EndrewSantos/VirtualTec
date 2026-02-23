/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/VirtualTec',
  images: {
    unoptimized: true
  }
}

export default nextConfig