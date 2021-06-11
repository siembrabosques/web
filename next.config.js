module.exports = {
    pageExtensions: ['page.tsx', 'page.ts'],
    async redirects() {
        return [
            {
                source: '/',
                destination: '/en',
                permanent: true,
            },
        ]
    },
}