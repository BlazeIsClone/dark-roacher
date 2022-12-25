import { forwardRef } from 'react';

import styles from './Button.module.scss';
import { Props } from './Button.props';

export const Button = forwardRef<HTMLButtonElement, Props>(
	(
		{
			variant = 'primary',
			as = 'button',
			disabled = false,
			children,
			type,
			icon,
			...props
		},
		ref
	) => (
		<button ref={ref} type={as} className={styles.button} {...props}>
			{icon ? <figure>{icon}</figure> : children}
		</button>
	)
);

Button.displayName = 'Button';
