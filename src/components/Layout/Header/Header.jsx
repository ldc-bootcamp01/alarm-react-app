import React, {useState} from 'react'
import Form from '../../Commons/Form'
import classes from './Header.module.css'

const Header = (props) => {
	const [curTime, setTime] = useState("00:00:00");

	const currentTime = () => {
		const date = new Date();
		const hour = String(date.getHours()).padStart(2, "0");
		const minutes = String(date.getMinutes()).padStart(2, "0");
		const seconds = String(date.getSeconds()).padStart(2, "0");
		setTime(`${hour}:${minutes}:${seconds}`);
	}

	const TimeStart = () => {
		setInterval(currentTime, 1000);
	}

	TimeStart()

	return (
		<header className={classes["header"]}>
			<h1>알람 앱</h1>
			<h2>{curTime}</h2>
			<Form submit={props.submit} customStyle='new-todo' />
		</header>
	);

};

export default Header;