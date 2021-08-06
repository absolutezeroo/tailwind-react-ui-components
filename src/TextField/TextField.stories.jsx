import React from 'react';
import { TextField } from '../index';

export default {
	title: 'Forms/TextField',
	component: TextField,
};

const Template = (args) => <TextField {...args} />;

export const Text = Template.bind({});
Text.args = {
	name: 'example_text',
	variant: 'text',
	placeholder: 'Some text here...',
};

export const Contained = Template.bind({});
Contained.args = {
	name: 'example_contained',
	variant: 'contained',
	placeholder: 'Some text here...',
};

export const Outlined = Template.bind({});
Outlined.args = {
	name: 'example_outlined',
	variant: 'outlined',
	placeholder: 'Some text here...',
};

export const Error = Template.bind({});
Error.args = {
	name: 'example_error',
	variant: 'text',
	placeholder: 'Some text here...',
	error: 'An error has occurred...',
};
