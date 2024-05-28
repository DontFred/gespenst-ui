import { Kbd } from "../src";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Kbd> = {
  args: {
    children: "/",
  },
  component: Kbd,
  title: "Core/Typo/Kbd",
};

export default meta;

type Story = StoryObj<typeof Kbd>;

export const Default: Story = {};

export const Tags: Story = {
  args: {
    alt: true,
    cmd: true,
    ctrl: true,
    meta: true,
    shift: true,
  },
};
