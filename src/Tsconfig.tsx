import { tagParser } from "./main";

const Tsconfig = () => (
  <file name="tsconfig.json">
    {`{
	"compilerOptions": {
		"outDir": "./dist/",
		"sourceMap": true,
		"noImplicitAny": true,
		"module": "commonjs",
		"target": "es5",
		"jsx": "react",
		"jsxFactory": "tagParser",
		"allowJs": true
	}
}
  `}
  </file>
);

export default Tsconfig;
