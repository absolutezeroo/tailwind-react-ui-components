import React from 'react';
import { TextField } from '../index';

export default {
	title: 'Forms/TextField',
	component: TextField,
};

const Template = (args) => <TextField {...args} />;

export const Text = Template.bind({});
Text.args = {
	name: 'text',
	variant: 'text',
	placeholder: 'Some text here...',
};

export const Contained = Template.bind({});
Contained.args = {
	name: 'text',
	variant: 'contained',
	placeholder: 'Some text here...',
};

export const Outlined = Template.bind({});
Outlined.args = {
	name: 'text',
	variant: 'outlined',
	placeholder: 'Some text here...',
};
