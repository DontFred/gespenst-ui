import TableStory from "./table-story";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TableStory> = {
  component: TableStory,
  title: "Core/Typo/Table",
};

export default meta;

type Story = StoryObj<typeof TableStory>;

export const Default: Story = {};
