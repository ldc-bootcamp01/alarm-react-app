import React from 'react'
import Form from '../../Commons/Form'
import classes from './Header.module.css'

const Header = (props) => {

	return (
		<header className={classes["header"]}>
			<h1>알람 앱</h1>
			<Form submit={props.submit} customStyle='new-todo' />
		</header>
	);

};

export default Header;