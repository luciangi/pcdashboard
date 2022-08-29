const webpack = require('webpack');

module.exports = function override(config, env) {
    // TODO: check if still needed
    config.resolve.fallback = {
        "fs": false,
        "net": false,
        "child_process": false,
        "util": require.resolve("util/"),
        "os": require.resolve("os-browserify/browser"),
        "url": require.resolve("url/"),
        "path": require.resolve("path-browserify"),
        "assert": require.resolve("assert/"),
        "buffer": require.resolve("buffer/"),
        "zlib": require.resolve("browserify-zlib"),
        "stream": require.resolve("stream-browserify"),
        "tty": require.resolve("tty-browserify")
    }

    config.plugins.push(
        // Remove node: from import specifiers, because
        // webpack does not yet support node: scheme
        // https://github.com/webpack/webpack/issues/13290
        new webpack.NormalModuleReplacementPlugin(
          /^node:/,
          (resource) => {
            resource.request = resource.request.replace(/^node:/, '');
          },
        ),
      );

    return config
}
 