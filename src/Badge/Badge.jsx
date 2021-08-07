import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

Badge.defaultProps = {
	label: '',
	variant: 'standard',
	color: 'gray',
	overlap: 'rectangular',
	size: 'standard',
};

Badge.propTypes = {
	/**
	 * The label of the badge
	 */
	label: PropTypes.string,

	/**
	 * The variant of the badge
	 */
	variant: PropTypes.oneOf(['dot', 'standard']),

	/**
	 * The color of the badge
	 *
	 * @default 'gray'
	 */
	color: PropTypes.oneOf(
		['gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink']),

	/**
	 * Wrapped shape the badge should overlap.
	 *
	 * @default 'rectangular'
	 */
	overlap: PropTypes.oneOf(['circular', 'rectangular']),

	/**
	 * The size of the badge
	 *
	 * @default 'standard'
	 */
	size: PropTypes.oneOf(['standard', 'larger']),
};

const style = {
	badge: classNames('inline-flex items-center font-medium'),
	dot: classNames('-ml-0.5 mr-1.5 h-2 w-2'),
};

const badgeColor = {
	gray: classNames('bg-gray-100 text-gray-800'),
	red: classNames('bg-red-100 text-red-800'),
	yellow: classNames('bg-yellow-100 text-yellow-800'),
	green: classNames('bg-green-100 text-green-800'),
	blue: classNames('bg-blue-100 text-blue-800'),
	indigo: classNames('bg-indigo-100 text-indigo-800'),
	purple: classNames('bg-purple-100 text-purple-800'),
	pink: classNames('bg-pink-100 text-pink-800'),
};

const dotColor = {
	gray: classNames('text-gray-400'),
	red: classNames('text-red-400'),
	yellow: classNames('text-yellow-400'),
	green: classNames('text-green-400'),
	blue: classNames('text-blue-400'),
	indigo: classNames('text-indigo-400'),
	purple: classNames('text-purple-400'),
	pink: classNames('text-pink-400'),
};

const badgeSize = {
	standard: classNames('px-2.5 py-0.5 text-xs'),
	larger: classNames('px-3 py-0.5 text-sm'),
};

const badgeOverlap = {
	circular: classNames('rounded-full'),
	rectangular: classNames('rounded'),
};

/**
 * Component used to create editable badge
 *
 * ### Usage
 *
 * ```jsx
 * import React from 'react';
 * import {Badge} from 'tailwind-react-ui-components';
 * ```
 *
 * ### Basic Badge
 *
 * ```jsx
 * <>
 * 	<Badge label="Example" color="gray" overlap="rectangular" />
 * </>
 * ```
 *
 * ### Dot Badge
 *
 * ```jsx
 * <>
 * 	<Badge label="Example" color="gray" overlap="rectangular" variant="dot" />
 * </>
 * ```
 */
function Badge({ label, overlap, variant, color, size }) {
	return (
		<span
			className={classNames(
				badgeColor[color],
				badgeSize[size],
				badgeOverlap[overlap],
				style.badge,
			)}>
				{variant === 'dot' &&
				(<svg className={classNames(
					dotColor[color],
					style.dot,
				)}
							fill='currentColor' viewBox='0 0 8 8'>
					<circle cx={4} cy={4} r={3} />
				</svg>)}
			{label}
      </span>
	);
}

export default Badge;
