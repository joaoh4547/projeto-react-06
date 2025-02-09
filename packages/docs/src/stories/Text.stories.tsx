import { Text, TextProps } from '@joaoh4547-ui/react'

import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nemo suscipit consequuntur debitis reprehenderit deleniti odit, consequatur ad numquam aspernatur. Totam, impedit at! Odio cumque ex, incidunt ipsam harum assumenda.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o Text sempre sera um `p` mas pode ser alterado com a propriedade as',
      },
    },
  },
}
