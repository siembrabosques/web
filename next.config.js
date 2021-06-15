module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Important: return the modified config
        config.module.rules.push({
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
                'file-loader',
                {
                    loader: 'image-webpack-loader',
                },
            ],
        })
        return config
    },
}
