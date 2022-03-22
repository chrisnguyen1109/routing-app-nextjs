/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    redirects: async () => {
        return [
            {
                source: '/',
                destination: '/event',
                permanent: false,
            },
        ];
    },
};

module.exports = nextConfig;
