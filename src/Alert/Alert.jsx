import React from 'react';
import {
	CheckCircleIcon,
	ExclamationIcon,
	InformationCircleIcon,
	XCircleIcon,
	XIcon,
} from '@heroicons/react/solid';
import { Transition } from '@headlessui/react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

Alert.defaultProps = {
	title: '',
	description: '',
	severity: 'info',
	open: true,
	dismissible: undefined,
};

Alert.propTypes = {
	/**
	 * The title of the alert
	 *
	 */
	title: PropTypes.string,

	/**
	 * The description of the alert
	 *
	 */
	description: PropTypes.string,

	/**
	 * The severity of the alert.This defines the color and icon used.
	 *
	 * @default 'info'
	 */
	severity: PropTypes.oneOf(['error', 'warning', 'success', 'info']),

	/**
	 * If `true` alert was hidden
	 *
	 * @default 'false'
	 */
	open: PropTypes.bool,

	/**
	 * Callback when you click on dismiss button
	 */
	dismissible: PropTypes.func,
};

const alertBackgroundSeverity = {
	error: classNames('bg-red-50'),
	warning: classNames('bg-yellow-50'),
	success: classNames('bg-green-50'),
	info: classNames('bg-blue-50'),
};

const alertTitleSeverity = {
	error: classNames('text-red-800'),
	warning: classNames('text-yellow-800'),
	success: classNames('text-green-800'),
	info: classNames('text-blue-800'),
};

const alertDescriptionSeverity = {
	error: classNames('text-red-700'),
	warning: classNames('text-yellow-700'),
	success: classNames('text-green-700'),
	info: classNames('text-blue-700'),
};

const alertDismissSeverity = {
	error: classNames(
		'bg-red-50 text-red-500 hover:bg-red-100 focus:ring-offset-red-50 focus:ring-red-600'),
	warning: classNames(
		'bg-yellow-50 text-yellow-500 hover:bg-yellow-100 focus:ring-offset-yellow-50 focus:ring-yellow-600'),
	success: classNames(
		'bg-green-50 text-green-500 hover:bg-green-100 focus:ring-offset-green-50 focus:ring-green-600'),
	info: classNames(
		'bg-blue-50 text-blue-500 hover:bg-blue-100 focus:ring-offset-blue-50 focus:ring-blue-600'),
};

/**
 * Component used to create alert
 *
 * ### Usage
 *
 * ```jsx
 * import React from 'react';
 * import {Alert} from 'tailwind-react-ui-components';
 * ```
 *
 * ### Basic Alert
 *
 * ```jsx
 * <>
 * 	<Alert title="Example" description="Example text..." />
 * </>
 * ```
 *
 * ### Dismissible Alert
 *
 * ```jsx
 * const [open, setOpen] = React.useState(true);
 *
 * handleDismissible() {
 *   React.useCallback(() => {
 *     this.setOpen(false);
 *   }, [])
 * }
 * ```
 *
 * ```jsx
 * <>
 * 	<Alert title="Example dismissible" description="Example dismissible"
 * open={open} dismissible={handleDismissible} />
 * </>
 * ```
 */
function Alert({ severity, title, description, open, dismissible }) {
	return (
		<Transition
			show={open}
			enter='transition-opacity duration-75'
			enterFrom='opacity-0'
			enterTo='opacity-100'
			leave='transition-opacity duration-150'
			leaveFrom='opacity-100'
			leaveTo='opacity-0'
		>
			<div className={classNames(
				alertBackgroundSeverity[severity],
				'rounded-md p-4',
			)} role='alert'>
				<div className='flex'>
					<div className='flex-shrink-0'>
						{severity === 'error' &&
						<XCircleIcon className='h-5 w-5 text-red-400' />}
						{severity === 'warning' &&
						<ExclamationIcon className='h-5 w-5 text-yellow-400' />}
						{severity === 'success' &&
						<CheckCircleIcon className='h-5 w-5 text-green-400' />}
						{severity === 'info' &&
						<InformationCircleIcon className='h-5 w-5 text-blue-400' />}
					</div>
					<div className='ml-3'>
						{title &&
						<h3 className={classNames(alertTitleSeverity[severity],
							'text-sm font-medium')}>{title}</h3>}
						{description &&
						<div className={classNames(alertDescriptionSeverity[severity],
							'mt-2 text-sm')}><p>{description}</p>
						</div>}
					</div>
					{dismissible && <div className='ml-auto pl-3'>
						<div className='-mx-1.5 -my-1.5'>
							<button
								type='button'
								onClick={dismissible}
								className={classNames(alertDismissSeverity[severity],
									'inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2')}
							>
								<span className='sr-only'>Dismiss</span>
								<XIcon className='h-5 w-5' aria-hidden='true' />
							</button>
						</div>
					</div>}
				</div>
			</div>
		</Transition>
	);
}

export default Alert;
