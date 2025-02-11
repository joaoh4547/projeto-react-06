import { Heading, HeadingProps } from '@joaoh4547-ui/react'

import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl'],
      control: 'inline-radio',
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o Heading sempre sera um `h2` mas pode ser alterado com a propriedade as',
      },
    },
  },
}
