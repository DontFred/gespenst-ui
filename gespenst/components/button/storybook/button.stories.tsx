import Icon from "../../../core/icon/src";
import { Button } from "../src";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  argTypes: {
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
      options: ["primary", "secondary", "tertiary", "error", "warning"],
    },
  },
  args: {
    children: "Upload",
  },
  component: Button,
  title: "Components/Button",
};

export default meta;

type Story = StoryObj<typeof Button>;

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

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
  },
};

export const Rounded: Story = {
  args: {
    shape: "round",
  },
};

export const SvgOnly: Story = {
  args: {
    children: <Icon name="arrow-up" />,
    svgOnly: true,
  },
};

export const WithPrefix: Story = {
  args: {
    prefix: <Icon name="arrow-left" />,
  },
};

export const WithSuffix: Story = {
  args: {
    suffix: <Icon name="arrow-right" />,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};
