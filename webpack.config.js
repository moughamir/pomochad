const path = require("path");

module.exports = {
  entry: "./js_src/index",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  }
};
