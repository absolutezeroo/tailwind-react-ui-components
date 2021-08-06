import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const style = {
	label: classNames('block', 'text-sm', 'font-medium', 'text-gray-700'),
	error: classNames('text-sm', 'text-red-600'),
};

const inputVariantsStyle = {
	text: classNames('block', 'font-normal', 'text-sm', 'outline-none',
		'focus:outline-none'),
	contained: classNames('block', 'w-full', 'text-gray-800', 'bg-gray-200',
		'font-medium', 'sm:text-sm', 'rounded', 'focus:ring-indigo-500',
		'focus:border-indigo-500'),
	outlined: classNames('block', 'w-full', 'bg-transparent', 'text-gray-700',
		'font-medium', 'sm:text-sm', 'rounded', 'border-gray-300',
		'focus:ring-indigo-500', 'focus:border-indigo-500'),
};

/**
 * TextField
 *
 * @version 0.0.1
 * @author [absolutezeroo](https://github.com/absolutezeroo)
 * @returns {JSX.Element}
 */
const TextField = React.forwardRef(
	(
		{
			name,
			disabled,
			className,
			type,
			label,
			error,
			placeholder,
			variant,
			onBlur,
			onChange,
		}, ref) => {

		return (
			<div className={className}>
				{label &&
				<label className={style.label}
							 htmlFor={name}>{label}</label>}
				<input type={type}
							 aria-labelledby={label || ''}
							 aria-invalid={!!error}
							 disabled={disabled}
							 placeholder={placeholder}
							 className={inputVariantsStyle[variant]}
							 ref={ref} name={name} onBlur={onBlur} onChange={onChange} />
				{error &&
				<p aria-errormessage={error} className={style.error}>{error}</p>}
			</div>
		);
	});

TextField.displayName = 'TextField';

TextField.propTypes = {
	/**
	 * Name of the input
	 *
	 * @type {string}
	 */
	name: PropTypes.string.isRequired,

	/**
	 * Class of the container
	 *
	 * @type {string}
	 */
	className: PropTypes.string,

	/**
	 * Type of the input
	 *
	 * @type {string}
	 * @default 'text'
	 */
	type: PropTypes.oneOfType([
		PropTypes.oneOf(
			['text', 'password']),
		PropTypes.string,
	]),

	/**
	 * Label of the input
	 *
	 * @type {string}
	 */
	label: PropTypes.string,

	/**
	 * Placeholder of the input
	 *
	 * @type {string}
	 */
	placeholder: PropTypes.string,

	/**
	 * If `true`, the component is disabled
	 **
	 * @type {boolean}
	 * @default false
	 */
	disabled: PropTypes.bool,

	/**
	 * Error of the input
	 *
	 * @type {(string|array|object)}
	 */
	error: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array,
		PropTypes.object,
	]),

	/**
	 * @ignore
	 */
	onBlur: PropTypes.func,

	/**
	 * Callback fired when the value is changed
	 *
	 * @param {object} event The event source of the callback.
	 */
	onChange: PropTypes.func,

	/**
	 * The variant of the input
	 *
	 * @default 'outlined'
	 */
	variant: PropTypes.oneOfType([
		PropTypes.oneOf([
			'contained', 'outlined', 'text',
		]),
		PropTypes.string,
	]),
};

/**
 * Default Props of the input
 *
 * @type {{variant: string, disabled: boolean, type: string}}
 */
TextField.defaultProps = {
	type: 'text',
	variant: 'outlined',
	disabled: false,
};

export default TextField;
