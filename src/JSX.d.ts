declare namespace JSX {
  interface IntrinsicElements {
    file: {
      name: string;
      children?: string;
    };
    folder: {
      name: string;
      children?: JSX.Element | JSX.Element[];
    };
  }

  type Element = FolderDescription | FileDescription;

  interface ElementChildrenAttribute {
    children: {};
  }
}

interface FolderDescription {
  discriminator: "FOLDER";
  name: string;
  contents?: FileDescription[];
}

interface FileDescription {
  discriminator: "FILE";
  name: string;
  contents?: string;
}
