const { resolve } = require("path");

module.exports = {
  base: "./", //set base here or in the build command
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        sub0: resolve(__dirname, "productlist.html"),
        sub1: resolve(__dirname, "form-login.html"),
        sub2: resolve(__dirname, "dashboard-desktop.html"),
        sub3: resolve(__dirname, "thank-you.html"),
      },
    },
  },
};
