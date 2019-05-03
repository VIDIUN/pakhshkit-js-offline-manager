'use strict';

const webpack = require("webpack");
const path = require("path");
const PROD = (process.env.NODE_ENV === 'production');
const packageData = require("./package.json");

const plugins = [
  new webpack.DefinePlugin({
    __VERSION__: JSON.stringify(packageData.version),
    __NAME__: JSON.stringify(packageData.name)
  })
];

if (PROD) {
  plugins.push(new webpack.optimize.UglifyJsPlugin({sourceMap: true}));
}

module.exports = {
  context: __dirname + "/src",
  entry: {
    "pakhshkit-offline-manager": "index.js"
  },
  output: {
    path: __dirname + "/dist",
    filename: '[name].js',
    library: ["VidiunPlayer", "OfflineManager"],
    libraryExport: "default",
    libraryTarget: "umd",
    devtoolModuleFilenameTemplate: "./offline-manager/[resource-path]"
  },
  devtool: 'source-map',
  plugins: plugins,
  module: {
    rules: [{
      test: /\.js$/,
      use: [{
        loader: "babel-loader"
      }],
      exclude: [
        /node_modules/
      ]
    }, {
      test: /\.js$/,
      exclude: [

        /node_modules/
      ],
      enforce: 'pre',
      use: [{
        loader: 'eslint-loader',
        options: {
          rules: {
            semi: 0
          }
        }
      }]
    }]
  },
  devServer: {
    contentBase: __dirname + "/src"
  },
  resolve: {
    modules: [
      path.resolve(__dirname, "src"),
      "node_modules"
    ]
  },
  externals: {
    "pakhshkit-js": {
      commonjs: "pakhshkit-js",
      commonjs2: "pakhshkit-js",
      amd: "pakhshkit-js",
      root: ["VidiunPlayer", "core"]
    },
    "shaka-player": {
      commonjs: "shaka-player",
      commonjs2: "shaka-player",
      amd: "shaka-player",
      root: ["VidiunPlayer", "shaka"]
    },
    "pakhshkit-js-providers": {
      commonjs: "pakhshkit-js-providers",
      commonjs2: "pakhshkit-js-providers",
      amd: "pakhshkit-js-providers",
      root: ["VidiunPlayer", "providers"]
    }
  }
};
