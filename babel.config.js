/**
 * @type {import("@babel/core").ConfigFunction}
 */
module.exports = function (api) {
  api.cache(true)

  const presets = []
  const plugins = ['./babel-plugins/console-plugin/console.js']

  return {
    presets: presets,
    plugins: plugins,
  }
}
