import { readdir } from "node:fs/promises";

const natural = new Intl.Collator(undefined, {
  numeric: true,
  sensitivity: "base",
});

/**
 * Get all icon name types.
 * @returns Error or Successor.
 */
async function main() {
  const files = (await readdir("./src", { recursive: true }))
    // gets all icon names
    .filter((file) => file.endsWith(".tsx"))
    // removes the file extension
    .map((file) => file.replace(/\.tsx$/, ""))
    // removes the index file
    .filter((file) => !file.includes("index"))
    // sorts the icon names naturally
    .sort((a, b) => natural.compare(a, b));

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  await Bun.write(
    "./src/types.ts",
    `export type IconNames =\n  | ${files.map((file) => `"${file}"`).join("\n  | ")};\n`
  );
  return `${files.length} icon names generated.`;
}

main().then(console.log).catch(console.error);
