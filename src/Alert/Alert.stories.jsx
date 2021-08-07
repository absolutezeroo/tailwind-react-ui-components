import { Alert } from '../index';

export default {
	title: 'UI/Alert',
	component: Alert,
};

const Template = (args) => <Alert {...args} />;

export const Error = Template.bind({});
Error.args = {
	title: 'Error Alert Title',
	description: 'An error alert...',
	severity: 'error',
};

export const Warning = Template.bind({});
Warning.args = {
	title: 'Warning Alert Title',
	description: 'An warning alert...',
	severity: 'warning',
};

export const Success = Template.bind({});
Success.args = {
	title: 'Success Alert Title',
	description: 'An success alert...',
	severity: 'success',
};

export const Info = Template.bind({});
Info.args = {
	title: 'Info Alert Title',
	description: 'An info alert...',
	severity: 'info',
};
