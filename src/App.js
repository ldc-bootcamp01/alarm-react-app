import './App.css';
import Header from './components/Layout/Header/Header';
import Main from './components/Layout/Main/Main';
import { useState, useEffect } from 'react';

const alarmRing = new Audio(process.env.PUBLIC_URL + '/morning-alarm.mp3');
let count = 0;

function App() {
	// console.log('App 호출됨');
	const [alarms, setAlarms] = useState([]);
	const [curTime, setTime] = useState({ hour: 0, minute: 0 });
	const [isRinging, setIsRinging] = useState(false);
	const [rangId, setRangId] = useState(-1);

	let intervalId;
	useEffect(() => {
		intervalId = setInterval(() => {
			const date = new Date();
			const curHour = date.getHours();
			const curMinute = date.getMinutes();
			setTime({ ...curTime, hour: curHour, minute: curMinute });
		}, 1000);
	}, []);

	const alarmStopHandler = () => {
		console.log('alarmStopHandler 눌림');
		element = (
			<div className='almElement'></div>
		);
		setIsRinging(false);
		alarmRing.pause();
	};

	let element;
	if (!isRinging) {
		alarms.forEach((alarm) => {
			if (alarm.id !== rangId) {
				let currHour = curTime.hour;
				if (alarm.ampm === '오후') {
					currHour -= 12;
				}
				let currMinute = curTime.minute;
				let alrmHour = Number(alarm.hour);
				let alrmMinute = Number(alarm.minute);
				if (alrmHour === currHour && alrmMinute === currMinute) {
					console.log(`${alrmHour}:${alrmMinute}울리는중`);
					setIsRinging(true);
					setRangId(alarm.id);
					alarmRing.play();
					alarmRing.loop = true;
				}
			}
		});
	} else {
		element = (
			<div className='almElement'>
				<button onClick={alarmStopHandler}>알람 끄기</button>
			</div>
		);
	}

	const addAlarmHandler = (inputs) => {
		const newAlarm = {
			id: count++,
			hour: inputs.hour,
			minute: inputs.minute,
			title: inputs.title,
			ampm: inputs.ampm
		};

		setAlarms([...alarms, newAlarm]);
		console.log(alarms);
	};

	const updateAlarmHandler = (id, text) => {
		const updatedItem = alarms.map(alarm => alarm.id === id ? { ...alarm, title: text } : alarm);
		setAlarms(updatedItem);
	};

	const deleteAlarmHandler = (id) => {
		const updatedItems = alarms.filter(alarm => alarm.id !== id);
		setAlarms(updatedItems);
	};

	const getAlarmsCount = () => alarms.length;

	return (
		<section className="todoapp">
			<Header submit={addAlarmHandler} />
			{element}
			<Main alarms={alarms} onDelete={deleteAlarmHandler} onUpdate={updateAlarmHandler} onCount={getAlarmsCount} />
		</section>
	);

}

export default App;
