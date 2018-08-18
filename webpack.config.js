var path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js',
        libraryTarget: 'commonjs2' 
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /(node_modules|bower_components|build)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname,'src/icofont'),
                exclude: /(node_modules|bower_components|build)/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                include: path.resolve(__dirname, 'src/icofont'),
                exclude: /(node_modules|bower_components|build)/,
                loader: 'url-loader'
            }
        ]
    },
    externals: {
        'react': 'commonjs react'
    }
};