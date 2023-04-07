const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: "C:/git-rep/mynobuild",
  devServer: {
    proxy : 'http://127.0.0.1:7860'
  }
});

// module.exports = {
//   devServer: {
//         proxy : 'http://127.0.0.1:7860/sdapi/v1'
//       }
// }