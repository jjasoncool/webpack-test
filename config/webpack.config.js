const path = require("path");

const Halloween = {
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "Halloween.js",
        library: "Halloween",
        libraryTarget: "umd",
    },
    mode: "development",
};

const bootstrap = {
    entry: "./src/bootstrap.js",
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "bootstrap.js",
    },
    mode: "development",
};

module.exports = [Halloween, bootstrap];
