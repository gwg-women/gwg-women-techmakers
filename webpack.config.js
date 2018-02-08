var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    plugins: [
        new webpack.ProvidePlugin({
        $: 'jQuery',
        jQuery: 'jQuery'
        })
    ]
};