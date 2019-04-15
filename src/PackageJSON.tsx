import { tagParser } from "./main";

const PackageJSON = (props: { name: string }) => (
  <file name="package.json">
    {`{
	"name": "${props.name}",
	"description": "${props.name}",
	"version": "0.0.1",
	"license": "MIT",
	"main": "dist/main.js",
	"devDependencies": {
	  "@babel/core": "^7.4.3",
	  "@babel/plugin-transform-react-jsx": "^7.3.0",
	  "@babel/preset-env": "^7.4.3",
	  "@types/node": "^11.13.4",
	  "@types/source-map-support": "^0.5.0",
	  "babel-loader": "^8.0.5",
	  "mocha": "*",
	  "source-map-support": "^0.5.12",
	  "ts-loader": "^5.3.3",
	  "typescript": "^3.4.3",
	  "webpack": "^4.30.0",
	  "webpack-cli": "^3.3.0"
	},
	"scripts": {
	  "build:dev": "webpack --mode development",
	  "build": "webpack --mode production",
	  "test": "node dist/main.js"
	}
  }
`}
  </file>
);

export default PackageJSON;
