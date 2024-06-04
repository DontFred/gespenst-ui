import { Checkbox } from "../src";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Checkbox> = {
  argTypes: {
    checked: {
      control: {
        type: "select",
      },
      options: ["indeterminate", true, false],
    },
    children: {
      control: {
        type: "text",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    invalid: {
      control: {
        type: "boolean",
      },
    },
  },
  args: {
    children: "Checkbox",
  },
  component: Checkbox,
  title: "Components/Checkbox/CheckboxGroup",
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {},
};
