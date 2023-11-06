import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../components/MyLabel";


const meta = {
  title: 'UI/labels/MyLabel',
  component: MyLabel,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {control: 'inline-radio'},
    fontColor: {control: 'color'},
  }
} satisfies Meta<typeof MyLabel>

export default meta;

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    label: 'basic label'
  }
}
export const AllCaps: Story = {
  args: {
    label: 'AllCaps label',
    allCaps: true, 

  }
}
export const Secondary: Story = {
  args: {
    label: 'Secondary label',
    color: 'text-secundary',

  }
}
export const CustomeColor: Story = {
  args: {
    label: 'Custome color label',
    fontColor: '#6a00ff',
  }
}