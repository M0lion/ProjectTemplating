import { tagParser } from "./main";

const Webpack = (props: { entry: string }) => (
  <file name="webpack.config.js">
    {`module.exports = (_, { mode }) => {
	return {
	  entry: "${props.entry}",
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
  `}
  </file>
);

export default Webpack;
