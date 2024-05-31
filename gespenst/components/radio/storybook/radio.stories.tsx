import { Fragment } from "react/jsx-runtime";

import { RadioGroup, RadioItem } from "../src";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RadioGroup> = {
  argTypes: {},
  args: {
    children: (
      <Fragment>
        <RadioItem value="option-1">Option 1</RadioItem>
        <RadioItem value="option-2">Option 2</RadioItem>
        <RadioItem value="option-3">Option 3</RadioItem>
      </Fragment>
    ),
  },
  component: RadioGroup,
  title: "Components/Radio",
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  args: {},
};

export const Disabled: Story = {
  args: {
    defaultValue: "option-2",
    disabled: true,
  },
};

export const Invalid: Story = {
  args: {
    defaultValue: "option-2",
    invalid: true,
  },
};
