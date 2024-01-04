const path = require('path');

// copied from https://webpack.js.org/guides/getting-started/#using-a-configuration

// this file tells webpack what files to package together and where to put it
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};