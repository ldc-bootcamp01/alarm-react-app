import React, {useEffect, useState, useRef} from 'react'
import Alarm from './Alarm/Alarm';
import classes from './Alarms.module.css'

const Alarms = (props) => {

	const alarmList = props.alarms.map((alarm) => (
		<Alarm key={alarm.id}
			   id={alarm.id}
			   title={alarm.title}
			   hour={alarm.hour}
			   minute={alarm.minute}
			   ampm={alarm.ampm}
			   onDelete={props.onDelete}
			   onUpdate={props.onUpdate} />
	));

	return (
		<ul className={classes["todo-list"]}>
			{alarmList}
		</ul>
	);

};

export default Alarms;