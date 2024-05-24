import { readdir } from "node:fs/promises";

interface JsonType {
  [key: string]:
    | (JsonType | boolean | number | string)[]
    | JsonType
    | boolean
    | number
    | string;
}

type ExportType = Record<
  string,
  {
    import: string;
    require: string;
    types: string;
  }
>;

const natural = new Intl.Collator(undefined, {
  numeric: true,
  sensitivity: "base",
});

/**
 * Generate exports for icons in package.json.
 * @returns Error or Successor.
 */
async function main() {
  const rawPackageJson = Bun.file("package.json");
  const packageJson: JsonType = await rawPackageJson.json();

  const files = (await readdir("./src", { recursive: true }))
    // gets all icon names
    .filter((file) => file.endsWith(".tsx"))
    // removes the file extension
    .map((file) => file.replace(/\.tsx$/, ""))
    // removes the index and types files
    .filter((file) => !file.includes("index") && !file.includes("types"))
    // sorts the icon names naturally
    .sort((a, b) => natural.compare(a, b));

  const iconExports: ExportType = {
    ...files.reduce((acc, file) => {
      acc[`./${file}`] = {
        import: `./dist/${file}.mjs`,
        require: `./dist/${file}.js`,
        types: `./dist/${file}.d.ts`,
      };
      return acc;
    }, {} as ExportType),
  };

  packageJson.exports = {
    ".": {
      import: "./dist/index.mjs",
      require: "./dist/index.js",
      types: "./dist/index.d.ts",
    },
    "./types": "./dist/types.d.ts",
    ...iconExports,
  };

  await Bun.write(rawPackageJson, `${JSON.stringify(packageJson, null, 2)}\n`);

  return `${files.length} icon exports generated and added to the package.json.`;
}

main().then(console.log).catch(console.error);
