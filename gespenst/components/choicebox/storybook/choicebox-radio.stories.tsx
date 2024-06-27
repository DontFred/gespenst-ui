import { Fragment } from "react";

import { RadioGroup } from "../../radio/src";
import { ChoiceboxRadio } from "../src";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ChoiceboxRadio> = {
  argTypes: {},
  args: {
    description: "Choicebox Radio Description",
    title: "Choicebox Radio",
  },
  component: ChoiceboxRadio,
  decorators: [
    (Story) => (
      <RadioGroup
        defaultValue="option-1"
        orientation="horizontal"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          width: "100%",
        }}
      >
        <Story />
      </RadioGroup>
    ),
  ],
  render: (args) => (
    <Fragment>
      <ChoiceboxRadio {...args} value="option-1" />
      <ChoiceboxRadio {...args} value="option-2" />
    </Fragment>
  ),
  title: "Components/Choicebox/Radio",
};

export default meta;

type Story = StoryObj<typeof ChoiceboxRadio>;

export const Default: Story = {
  args: {},
};

export const Children: Story = {
  args: {
    children: "Children",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChildren: Story = {
  args: {
    children: "Children",
    disabled: true,
  },
};

export const Invalid: Story = {
  args: {
    invalid: true,
  },
};

export const InvalidChildren: Story = {
  args: {
    children: "Children",
    invalid: true,
  },
};
