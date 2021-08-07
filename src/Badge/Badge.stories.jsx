import { Badge } from '../index';
import React from 'react';

export default {
	title: 'UI/Badge',
	component: Badge,
};

const Template = (args) => <Badge {...args} />;

export const ColorGray = Template.bind({});
ColorGray.args = {
	label: 'Example Gray Badge',
	variant: 'standard',
	color: 'gray',
	overlap: 'rectangular',
	size: 'standard',
};

export const ColorRed = Template.bind({});
ColorRed.args = {
	label: 'Example Red Badge',
	variant: 'standard',
	color: 'red',
	overlap: 'rectangular',
	size: 'standard',
};

export const ColorYellow = Template.bind({});
ColorYellow.args = {
	label: 'Example Yellow Badge',
	variant: 'standard',
	color: 'yellow',
	overlap: 'rectangular',
	size: 'standard',
};

export const ColorGreen = Template.bind({});
ColorGreen.args = {
	label: 'Example Green Badge',
	variant: 'standard',
	color: 'green',
	overlap: 'rectangular',
	size: 'standard',
};

export const ColorBlue = Template.bind({});
ColorBlue.args = {
	label: 'Example Blue Badge',
	variant: 'standard',
	color: 'blue',
	overlap: 'rectangular',
	size: 'standard',
};

export const ColorIndigo = Template.bind({});
ColorIndigo.args = {
	label: 'Example Indigo Badge',
	variant: 'standard',
	color: 'indigo',
	overlap: 'rectangular',
	size: 'standard',
};

export const ColorPurple = Template.bind({});
ColorPurple.args = {
	label: 'Example Purple Badge',
	variant: 'standard',
	color: 'purple',
	overlap: 'rectangular',
	size: 'standard',
};

export const ColorPink = Template.bind({});
ColorPink.args = {
	label: 'Example Pink Badge',
	variant: 'standard',
	color: 'pink',
	overlap: 'rectangular',
	size: 'standard',
};

export const WithDot = Template.bind({});
WithDot.args = {
	label: 'Example With Dot Badge',
	variant: 'dot',
	color: 'gray',
	overlap: 'rectangular',
	size: 'standard',
};

export const OverlapCircular= Template.bind({});
OverlapCircular.args = {
	label: 'Example Overlap Circular Badge',
	variant: 'dot',
	color: 'gray',
	overlap: 'circular',
	size: 'standard',
};

export const SizeLarger = Template.bind({});
SizeLarger.args = {
	label: 'Example Larger Size Badge',
	variant: 'dot',
	color: 'gray',
	overlap: 'rectangular',
	size: 'larger',
};
