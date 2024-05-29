import { Avatar } from "../src";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Avatar> = {
  argTypes: {
    fallback: {
      control: {
        type: "text",
      },
    },
    name: {
      control: {
        type: "text",
      },
    },
    src: {
      control: {
        type: "text",
      },
    },
  },
  component: Avatar,
  title: "Components/Avatar",
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    fallback: "AB",
    name: "John Doe",
    src: "https://github.com/1.png",
  },
};

export const NoImage: Story = {
  args: {
    fallback: "AB",
    name: "John Doe",
    noImage: true,
  },
};

export const NoImageClean: Story = {
  args: {
    noImage: true,
  },
};
