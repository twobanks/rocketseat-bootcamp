import React from 'react';
import GlobalStyle from './styles/global';

import SignIn from '../src/pages/SignIn';
/* 
import SignUp from '../src/pages/SignUp'; */

const App: React.FC = () => {
	return (
		<>
			<SignIn />
			<GlobalStyle />
		</>
	);
};

export default App;
