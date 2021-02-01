const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@actions": path.resolve(__dirname, "src/actions/"),
      "@constants": path.resolve(__dirname, "src/constants/"),
      "@reducers": path.resolve(__dirname, "src/reducers/"),
    },
  },
};
