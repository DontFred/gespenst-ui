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
 * Generate icon.stories.tsx for icons with the Icon main component.
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

  await Bun.write(
    "./storybook/icon.stories.tsx",
    `import Icon from "../src";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Icon> = {
  argTypes: {},
  component: Icon,
  title: "Icon/Icon",
};

export default meta;

type Story = StoryObj<typeof Icon>;

${files
  .map((file) => {
    const PascalName = file.replace(/(^\w|-\w)/g, clearAndUpper);
    return `export const ${PascalName}: Story = {
  args: {
    name: "${file}",
  },
};`;
  })
  .join("\n\n")}
`
  );

  return `${files.length} icon stories generated.`;
}

main().then(console.log).catch(console.error);
