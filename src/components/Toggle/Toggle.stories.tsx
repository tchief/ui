import React from 'react'

import { Toggle } from '.'

export default {
  title: 'Data Input/Toggle',
  component: Toggle,
  argTypes: {
    label: { control: 'text' },
  },
}

export const Primary = (args: any) => <Toggle {...args} />
export const checkedDefault = (args: any) => <Toggle {...args} />
export const noLabel = (args: any) => <Toggle {...args} />

Primary.args = {
  descriptionText: 'This is optional description',
  disabled: false,
  error: '',
  label: 'Radio group main label',
  labelOptional: 'This is an optional label',
  name: 'radiogroup-example',
  layout: 'horizontal',
}

checkedDefault.args = {
  defaultChecked: true,
  descriptionText: 'This is optional description',
  label: 'Radio group main label',
  labelOptional: 'This is an optional label',
}

noLabel.args = {
  active: true,
  disabled: false,
  error: '',
  name: 'radiogroup-example',
  layout: 'horizontal',
}
