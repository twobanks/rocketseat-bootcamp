import React, { ButtonHTMLAttributes } from 'react';
import { boolean } from 'yup/lib/locale';

import { Container } from './style';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => {
	return (
		<Container type="button" {...rest}>
			{loading ? 'Carregando' : children}
		</Container>
	);
};

export default Button;