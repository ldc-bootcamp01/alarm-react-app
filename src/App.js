import './App.css';
import Header from './components/Layout/Header/Header';
import Main from './components/Layout/Main/Main';
import { useState } from 'react';

let count = 0;

function App() {
	console.log('App 호출됨');
	const [alarms, setAlarms] = useState([]);

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
		const updatedItem = alarms.map(alarm => alarm.id === id ? { ...alarm, name: text } : alarm);
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
			<Main alarms={alarms} onDelete={deleteAlarmHandler} onUpdate={updateAlarmHandler} onCount={getAlarmsCount} />
		</section>
	);

}

export default App;
