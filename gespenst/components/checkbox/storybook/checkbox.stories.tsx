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
  title: "Components/Checkbox",
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {},
};

export const Indeterminate: Story = {
  args: {
    checked: "indeterminate",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <div
      style={{
        display: "grid",
        gap: "1rem",
      }}
    >
      <Checkbox {...args} />
      <Checkbox checked="indeterminate" {...args} />
      <Checkbox checked {...args} />
    </div>
  ),
};

export const Invalid: Story = {
  args: {
    invalid: true,
  },
  render: (args) => (
    <div
      style={{
        display: "grid",
        gap: "1rem",
      }}
    >
      <Checkbox {...args} />
      <Checkbox checked="indeterminate" {...args} />
      <Checkbox checked {...args} />
    </div>
  ),
};
