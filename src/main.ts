import { lstatSync, mkdirSync, writeFileSync, existsSync } from "fs";
import { join } from "path";

export function tagParser(
  element: string | ((props: any, children: any[]) => JSX.Element),
  props: any,
  ...children: any
): JSX.Element {
  if (typeof element === "string") {
    if (element === "file") {
      return {
        discriminator: "FILE",
        name: props.name,
        contents: children
      };
    } else if (element === "folder") {
      return {
        discriminator: "FOLDER",
        name: props.name,
        contents: Array.isArray(children) ? children : [children]
      };
    } else {
      throw `${element} - unknown intrinsic element`;
    }
  } else {
    return element(props, children);
  }
}

function _createFiles(el: JSX.Element, folder: string) {
  let path = join(folder, el.name);
  if (el.discriminator === "FOLDER") {
    mkdirSync(path);
    for (let i in el.contents) {
      _createFiles(el.contents[i], path);
    }
  } else {
    writeFileSync(path, el.contents);
  }
}

export function createFiles(files: JSX.Element, target: string) {
  if (!existsSync(target)) {
    throw `${join(__dirname, target)} - does not exist!`;
  }

  if (!lstatSync(target).isDirectory()) {
    throw `${join(__dirname, target)} - not a directory!`;
  }

  try {
    _createFiles(files, target);
  } catch (e) {
    console.log(e);
  }
}
