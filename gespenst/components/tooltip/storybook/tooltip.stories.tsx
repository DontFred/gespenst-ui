import { Fragment } from "react/jsx-runtime";

import { Tooltip } from "../src";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Tooltip> = {
  argTypes: {
    position: {
      control: {
        type: "select",
      },
      options: [
        "top",
        "top-start",
        "top-end",
        "bottom",
        "bottom-start",
        "bottom-end",
        "left",
        "left-start",
        "left-end",
        "right",
        "right-start",
        "right-end",
      ],
    },
    type: {
      control: {
        type: "select",
      },
      options: ["error", "primary", "success", "violet", "warning"],
    },
  },
  args: {
    children: "Hover me",
    text: "Tooltip text",
  },
  component: Tooltip,
  decorators: [
    (Story) => (
      <div
        style={{
          padding: 50,
        }}
      >
        <Story />
      </div>
    ),
  ],
  title: "Components/Tooltip",
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {},
};

export const PositionTop: Story = {
  args: {
    position: "top",
  },
};

export const PositionTopStart: Story = {
  args: {
    position: "top-start",
  },
};

export const PositionTopEnd: Story = {
  args: {
    position: "top-end",
  },
};

export const PositionLeft: Story = {
  args: {
    position: "left",
  },
};

export const PositionLeftStart: Story = {
  args: {
    position: "left-start",
  },
};

export const PositionLeftEnd: Story = {
  args: {
    position: "left-end",
  },
};

export const PositionRight: Story = {
  args: {
    position: "right",
  },
};

export const PositionRightStart: Story = {
  args: {
    position: "right-start",
  },
};

export const PositionRightEnd: Story = {
  args: {
    position: "right-end",
  },
};

export const PositionBottomStart: Story = {
  args: {
    position: "bottom-start",
  },
};

export const PositionBottomEnd: Story = {
  args: {
    position: "bottom-end",
  },
};

export const TypeError: Story = {
  args: {
    type: "error",
  },
};

export const TypeSuccess: Story = {
  args: {
    type: "success",
  },
};

export const TypeViolet: Story = {
  args: {
    type: "violet",
  },
};

export const TypeWarning: Story = {
  args: {
    type: "warning",
  },
};
