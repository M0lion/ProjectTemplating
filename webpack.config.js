module.exports = (_, { mode }) => {
  return {
    entry: mode === "development" ? "./src/test.tsx" : "./src/main.ts",
    devtool: mode === "development" ? "source-map" : false,
    resolve: {
      extensions: [".ts", ".tsx"]
    },
    target: "node",
    node: {
      __dirname: false,
      __filename: false
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: "ts-loader"
        }
      ]
    },
    output: {
      devtoolModuleFilenameTemplate: "[absolute-resource-path]"
    }
  };
};
