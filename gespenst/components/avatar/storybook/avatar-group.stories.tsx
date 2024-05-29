import { AvatarGroup } from "../src";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AvatarGroup> = {
  argTypes: {},
  args: {
    members: [
      {
        fallback: "JD",
        name: "John Doe",
        src: "https://github.com/1.png",
      },
      {
        fallback: "JD",
        name: "Jane Doe",
        src: "https://github.com/3.png",
      },
      {
        fallback: "MD",
        name: "Mario Doe",
        src: "https://github.com/4.png",
      },
      {
        fallback: "LD",
        name: "Luigi Doe",
        src: "https://github.com/5.png",
      },
    ],
  },
  component: AvatarGroup,
  title: "Components/Avatar/AvatarGroup",
};

export default meta;

type Story = StoryObj<typeof AvatarGroup>;

export const Default: Story = {
  args: {},
};

export const Limited: Story = {
  args: {
    limit: 3,
  },
};
