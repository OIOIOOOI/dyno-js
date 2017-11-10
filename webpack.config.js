module.exports = {
    devServer: {
        host: '0.0.0.0'
    },
    entry: './src/scripts.js',
    output: {
        filename: './js/scripts.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    }
}
