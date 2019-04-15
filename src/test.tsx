import { tagParser, createFiles } from "./main";
import { writeFileSync } from "fs";
import PackageJSON from "./PackageJSON";
import Tsconfig from "./Tsconfig";
import Webpack from "./Webpack";

writeFileSync("test.test", "test");

const ProjectTtest = (props: { name: string }) => (
  <folder name={props.name}>
    <folder name="src">
      <file name="main.ts">console.log("hello world!");</file>
    </folder>
    <PackageJSON name={props.name} />
    <file name=".gitignore">node_modules</file>
    <Tsconfig />
    <Webpack entry="src/main.ts" />
  </folder>
);

/* let test = (
  <folder name="test">
    <file name="test.txt">test</file>
    <file name="test2.txt">test</file>
  </folder>
);
console.log(test);
createFiles(test, "test"); */

let test = <ProjectTtest name="TestProject" />;

console.log(JSON.stringify(test, null, 2));

createFiles(test, "dist/test");
