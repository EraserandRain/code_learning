/** @type {import('next').NextConfig} */
const repo = 'learn'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

const nextConfig = {
    reactStrictMode: true,
    assetPrefix: assetPrefix,
    basePath: basePath,
    output: 'export'
}

module.exports = nextConfig
