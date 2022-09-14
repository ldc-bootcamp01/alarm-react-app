import React from 'react'
import classes from './MainFooter.module.css'

const MainFooter = (props) => {

	const alarmsCount = props.onCount();

	return (
		<footer className={classes["footer"]}>
			<span className={classes["todo-count"]}>
				{alarmsCount !== 0 ? `${alarmsCount}개의 알람이 있습니다.` : ''}
			</span>
		</footer>
	);

};

export default MainFooter;