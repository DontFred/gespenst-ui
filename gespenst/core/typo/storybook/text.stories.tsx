import { Text } from "../src";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Text> = {
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
    size: {
      control: {
        type: "select",
      },
      options: [10, 12, 14, 16, 20, 24, 32, 48],
    },
    variant: {
      control: {
        type: "select",
      },
      options: [
        "button-12",
        "button-14",
        "button-16",
        "copy-13",
        "copy-14",
        "copy-16",
        "copy-18",
        "copy-20",
        "copy-24",
        "heading-16",
        "heading-20",
        "heading-24",
        "heading-32",
        "heading-40",
        "heading-48",
        "heading-56",
        "heading-64",
        "heading-72",
        "label-12",
        "label-13",
        "label-14",
        "label-16",
        "label-18",
        "label-20",
      ],
    },
  },
  args: {
    children: "Hello, world!",
  },
  component: Text,
  title: "Core/Typo/Text",
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    size: 16,
  },
};

export const Size10: Story = {
  args: {
    size: 10,
  },
};

export const Size12: Story = {
  args: {
    size: 12,
  },
};

export const Size14: Story = {
  args: {
    size: 14,
  },
};

export const Size16: Story = {
  args: {
    size: 16,
  },
};

export const Size20: Story = {
  args: {
    size: 20,
  },
};

export const Size24: Story = {
  args: {
    size: 24,
  },
};

export const Size32: Story = {
  args: {
    size: 32,
  },
};

export const Size48: Story = {
  args: {
    size: 48,
  },
};

export const Heading16: Story = {
  args: {
    variant: "heading-16",
  },
};

export const Heading20: Story = {
  args: {
    variant: "heading-20",
  },
};

export const Heading24: Story = {
  args: {
    variant: "heading-24",
  },
};

export const Heading32: Story = {
  args: {
    variant: "heading-32",
  },
};

export const Heading40: Story = {
  args: {
    variant: "heading-40",
  },
};

export const Heading48: Story = {
  args: {
    variant: "heading-48",
  },
};

export const Heading56: Story = {
  args: {
    variant: "heading-56",
  },
};

export const Heading64: Story = {
  args: {
    variant: "heading-64",
  },
};

export const Heading72: Story = {
  args: {
    variant: "heading-72",
  },
};

export const Button12: Story = {
  args: {
    variant: "button-12",
  },
};

export const Button14: Story = {
  args: {
    variant: "button-14",
  },
};

export const Button16: Story = {
  args: {
    variant: "button-16",
  },
};

export const Label12: Story = {
  args: {
    variant: "label-12",
  },
};

export const Label13: Story = {
  args: {
    variant: "label-13",
  },
};

export const Label14: Story = {
  args: {
    variant: "label-14",
  },
};

export const Label16: Story = {
  args: {
    variant: "label-16",
  },
};

export const Label18: Story = {
  args: {
    variant: "label-18",
  },
};

export const Label20: Story = {
  args: {
    variant: "label-20",
  },
};

export const Copy13: Story = {
  args: {
    variant: "copy-13",
  },
};

export const Copy14: Story = {
  args: {
    variant: "copy-14",
  },
};

export const Copy16: Story = {
  args: {
    variant: "copy-16",
  },
};

export const Copy18: Story = {
  args: {
    variant: "copy-18",
  },
};

export const Copy20: Story = {
  args: {
    variant: "copy-20",
  },
};

export const Copy24: Story = {
  args: {
    variant: "copy-24",
  },
};
