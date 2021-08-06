import { create } from '@storybook/theming';
import { addons } from '@storybook/addons';

const theme = create({
	base: 'light',

	// UI
	appBorderRadius: 4,

	// Typography
	fontBase: '"Open Sans", sans-serif',
	fontCode: 'monospace',

	brandTitle: 'Tailwind React',
});

addons.setConfig({
	theme,
});
