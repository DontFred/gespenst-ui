import { Description } from "../src";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Description> = {
  argTypes: {},
  args: {
    label: "Section Title",
  },
  component: Description,
  title: "Components/Description",
};

export default meta;

type Story = StoryObj<typeof Description>;

export const Default: Story = {
  args: {},
};

export const WithTooltip: Story = {
  args: {
    tooltip: "Additional context about what this section refers to.",
  },
};

export const WithDescription: Story = {
  args: {
    children: "Data about this section.",
  },
};

export const WithDescriptionAndTooltip: Story = {
  args: {
    children: "Data about this section.",
    tooltip: "Additional context about what this section refers to.",
  },
};
