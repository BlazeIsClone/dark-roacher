import { HTMLAttributes, ReactNode } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
	/**
	 * Form of the button appearance
	 */
	type: 'contained' | 'outlined' | 'text';

	/**
	 * Action style variants
	 *
	 * @default 'primary'
	 */
	variant?: 'primary' | 'secondary' | 'destructive';

	/**
	 * Button label text
	 */
	children?: string;

	/**
	 * The html button type to use.
	 *
	 * @default 'Button'
	 */
	as?: 'button' | 'reset' | 'submit';

	/**
	 * Providing a React component will render as an icon
	 *
	 * @type ReactNode
	 */
	icon?: ReactNode;

	/**
	 * Disables the Button, preventing mouse events,
	 * even if the underlying component is an `<a>` element
	 */
	disabled?: boolean;

	/**
	 * Providing a `href` will render an `<a>` element
	 */
	href?: string;
}
