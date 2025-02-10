import { Box, Text, CheckBox, CheckBoxProps } from '@joaoh4547-ui/react'

import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/CheckBox',
  component: CheckBox,
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
        >
          <Story />
          <Text size="sm">Accept User Terms</Text>
        </Box>
      )
    },
  ],
} as Meta<CheckBoxProps>

export const Primary: StoryObj<CheckBoxProps> = {
  args: {},
}
