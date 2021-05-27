import React from 'react';
import { Meta, Story } from '@storybook/react';
import { usePaymentPointer } from '../src';

function Thing(){
  const webId = "https://travis.myunderstory.com/profile/card#me"
  const paymentPointer = usePaymentPointer(webId)
  return (
    <div>
      <h1>Payment pointer for {webId}:</h1>
      <h1>{paymentPointer}</h1>
    </div>
  )
}

const meta: Meta = {
  title: 'Welcome',
  component: Thing,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<any> = args => <Thing {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
