import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const style = {
	label: classNames('block', 'text-sm', 'font-medium', 'text-gray-700'),
	error: classNames('mt-2', 'text-sm', 'text-red-600'),
};

/**
 *
 * Component used to create a controllable input
 *
 * ### Usage with React State
 *
 * ```jsx
 * import React from 'react';
 * import {TextField} from 'tailwind-react-ui-components';
 *
 * const {example, setExample} = React.useState("");
 *
 * const onChange = React.useCallback((e) => setExample(e.target.value), []);
 * ```
 *
 * ```jsx
 * <>
 * 	<TextField name="example" label="Example" value={example}
 * 	onChange={onChange(e)} variant="text" placeholder="Enter your placeholder
 * 	here..."/>
 * </>
 * ```
 *
 * ### Usage with React Hook Form
 *
 * ```jsx
 * import {useForm} from 'react-hook-form';
 * import {TextField} from 'tailwind-react-ui-components';
 *
 * const {register, formState} = useForm();
 * const {errors} = formState;
 * ```
 *
 * ```jsx
 * <>
 * 	<TextField label="Example" disabled={isSubmitting}
 * 	error={errors.password?.message} {...register('example')}/>
 * </>
 * ```
 *
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

		const inputVariantsStyle = {
			text: classNames('block', 'font-normal', 'text-sm', 'outline-none',
				'focus:outline-none'),
			contained: classNames('block', 'text-gray-800', 'bg-gray-200',
				'font-medium', 'sm:text-sm', 'rounded', 'focus:ring-indigo-500',
				'focus:border-indigo-500'),
			outlined: classNames('block', 'bg-transparent', 'text-gray-700',
				'font-medium', 'sm:text-sm', 'rounded', 'border-gray-300',
				'focus:ring-indigo-500', 'focus:border-indigo-500'),
		};

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
							 className={
								 classNames(
									 inputVariantsStyle[variant],
									 error && classNames('border-red-300', 'text-red-900',
										 'placeholder-red-300', 'focus:ring-red-500',
										 'focus:border-red-500'),
								 )
							 }
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
	type: PropTypes.oneOf(['text', 'password']),

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
	 * @type {string}
	 */
	error: PropTypes.string,

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
	variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
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
