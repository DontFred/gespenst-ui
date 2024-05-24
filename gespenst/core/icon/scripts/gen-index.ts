import { readdir } from "node:fs/promises";

const natural = new Intl.Collator(undefined, {
  numeric: true,
  sensitivity: "base",
});

/**
 * Clear and upper the text.
 * @param text - The text to clear and upper.
 * @returns The cleared and uppered text.
 */
function clearAndUpper(text: string) {
  return text.replace(/-/, "").toUpperCase();
}

/**
 * Generate index.tsx for icons with the Icon main component.
 * @returns Error or Successor.
 */
async function main() {
  const files = (await readdir("./src", { recursive: true }))
    // gets all icon names
    .filter((file) => file.endsWith(".tsx"))
    // removes the file extension
    .map((file) => file.replace(/\.tsx$/, ""))
    // removes the index and types files, if svgr is used the wrong extensions
    .filter((file) => !file.includes("index") && !file.includes("types"))
    // sorts the icon names naturally
    .sort((a, b) => natural.compare(a, b));

  const entries = files.map((file) => {
    const PascalName = file.replace(/(^\w|-\w)/g, clearAndUpper);
    return {
      imports: `import { ${PascalName} } from "./${file}";`,
      map: `${/.*[.-].*/.test(file) ? `"${file}"` : file}: ${PascalName},`,
    };
  });

  const file = `${entries.map(({ imports }) => imports).join("\n")}\n
import type { SVGProps } from "react";

const icons = {
  ${entries.map(({ map }) => map).join("\n  ")}
};

/**
 * Icon component \\
 * A wrapper for all icons. You can select an icon by passing the name of the icon as a prop. \\
 * @param IconsProps - extends SVGProps<SVGSVGElement>
 * @param IconsProps.name - the name of the icon you want to render
 * @returns JSX.Element
 */
export default function Icon({
  name,
  ...rest
}: { name: keyof typeof icons } & SVGProps<SVGSVGElement>) {
  const IconComponent = icons[name];
  return icons[name] ? <IconComponent {...rest} /> : null;
}
`;

  await Bun.write("./src/index.tsx", file);
  return "Index file generated successfully!";
}

main().then(console.log).catch(console.error);
