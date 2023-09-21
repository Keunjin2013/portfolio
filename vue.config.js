const { defineConfig } = require('@vue/cli-service')

const path = require("path")

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  outputDir: path.resolve(__dirname, "./docs"),
  publicPath: "/portfolio/",
})
