import { Fragment } from "react";

import { Text } from "../../../core/typo/src";
import { Card } from "../src";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Card> = {
  argTypes: {
    padding: {
      control: {
        type: "select",
      },
      options: ["none", "md", "lg"],
    },
    rounded: {
      control: {
        type: "select",
      },
      options: ["none", "sm", "md", "lg"],
    },
  },
  args: {
    children: (
      <Fragment>
        <Text as="h3" size={32}>
          Lorem ipsum
        </Text>
        <Text as="p" className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </Fragment>
    ),
  },
  component: Card,
  title: "Components/Card",
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {},
};

export const PLarge: Story = {
  args: {
    padding: "lg",
  },
};

export const PNone: Story = {
  args: {
    padding: "none",
  },
};

export const RLarge: Story = {
  args: {
    rounded: "lg",
  },
};

export const RSmall: Story = {
  args: {
    rounded: "sm",
  },
};

export const RXSmall: Story = {
  args: {
    rounded: "xs",
  },
};

export const RNone: Story = {
  args: {
    rounded: "none",
  },
};
