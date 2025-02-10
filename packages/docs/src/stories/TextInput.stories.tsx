import { Box, Text, TextInput, TextInputProps } from '@joaoh4547-ui/react'

import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/TextInput',
  component: TextInput,
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">User Name</Text>
          <Story />
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'call.com/',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}
