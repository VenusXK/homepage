/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/home/www/deploy.zjh.asia',
    output: 'export',
    images: {
        domains:['mysite-bucket.oss-cn-wulanchabu.aliyuncs.com']
    },
}

module.exports = nextConfig



