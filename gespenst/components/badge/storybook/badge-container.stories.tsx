import { Button } from "../../button/src";
import { BadgeContainer } from "../src";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof BadgeContainer> = {
  argTypes: {
    content: {
      control: {
        type: "text",
      },
    },
    size: {
      control: {
        type: "select",
      },
      options: ["sm", "md", "lg"],
    },
    variant: {
      control: {
        type: "select",
      },
      options: [
        "amber",
        "amber-subtle",
        "blue",
        "blue-subtle",
        "gray",
        "gray-subtle",
        "green",
        "green-subtle",
        "inverted",
        "pink",
        "pink-subtle",
        "purple",
        "purple-subtle",
        "red",
        "red-subtle",
        "teal",
        "teal-subtle",
      ],
    },
  },
  args: {
    children: <Button>Click Me</Button>,
    content: "Badge",
  },
  component: BadgeContainer,
  title: "Components/Badge/BadgeContainer",
};

export default meta;

type Story = StoryObj<typeof BadgeContainer>;

export const Default: Story = {
  args: {},
};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};

export const Amber: Story = {
  args: {
    variant: "amber",
  },
};

export const AmberSubtle: Story = {
  args: {
    variant: "amber-subtle",
  },
};

export const Blue: Story = {
  args: {
    variant: "blue",
  },
};

export const BlueSubtle: Story = {
  args: {
    variant: "blue-subtle",
  },
};

export const Green: Story = {
  args: {
    variant: "green",
  },
};

export const GreenSubtle: Story = {
  args: {
    variant: "green-subtle",
  },
};

export const Pink: Story = {
  args: {
    variant: "pink",
  },
};

export const PinkSubtle: Story = {
  args: {
    variant: "pink-subtle",
  },
};

export const Purple: Story = {
  args: {
    variant: "purple",
  },
};

export const PurpleSubtle: Story = {
  args: {
    variant: "purple-subtle",
  },
};

export const Red: Story = {
  args: {
    variant: "red",
  },
};

export const RedSubtle: Story = {
  args: {
    variant: "red-subtle",
  },
};

export const Teal: Story = {
  args: {
    variant: "teal",
  },
};

export const TealSubtle: Story = {
  args: {
    variant: "teal-subtle",
  },
};

export const Gray = {
  args: {
    variant: "gray",
  },
};

export const GraySubtle: Story = {
  args: {
    variant: "gray-subtle",
  },
};

export const Inverted: Story = {
  args: {
    variant: "inverted",
  },
};
