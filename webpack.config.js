const path = require('path');
module.exports = {
    entry: './src/app.jsx',
    output: {
        path: path.join(__dirname, 'public', 'scripts'),
        filename: 'app.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}