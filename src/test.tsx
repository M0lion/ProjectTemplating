import { tagParser, createFiles } from "./main";
import { writeFileSync } from "fs";
import PackageJSON from "./PackageJSON";
import Tsconfig from "./Tsconfig";
import Webpack from "./Webpack";

const ProjectTtest = (props: { name: string; main: string }) => (
  <folder name={props.name}>
    <folder name="src">
      <file name={`${props.main}.ts`}>console.log("hello world!");</file>
    </folder>
    <PackageJSON name={props.name} />
    <file name=".gitignore">node_modules</file>
    <Tsconfig />
    <Webpack entry={`./src/${props.main}.ts`} />
  </folder>
);

let test = <ProjectTtest name="TestProject" main="main" />;

console.log(JSON.stringify(test, null, 2));

createFiles(test, "../test");
