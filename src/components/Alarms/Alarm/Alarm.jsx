import React, { useState } from 'react'
import './Alarm.css';
import classNames from 'classnames';

const Alarm = (props) => {
	const [isEditing, setIsEditing] = useState(false);
	const [isCompleted, setIsCompleted] = useState(false);

	const [inputText, setInputText] = useState(props.title);

	const doubleClickHandler = () => {
		console.log('dd');
		setIsEditing(true);
	};

	const deleteHandler = () => {
		props.onDelete(props.id);
	}

	const checkHandler = () => {
		setIsCompleted(!isCompleted);
	}

	const updateHandler = (event) => {
		setInputText(event.target.value);
	
		if (event.key === 'Enter') { // 엔터키를 눌렀을 때
			props.onUpdate(props.id, inputText);
			setIsEditing(!isEditing);
		}
	};

	const blurHandler = () => {
		setIsEditing(!isEditing);
	};
	
	let element;
	if (isEditing) {
		element = (
			<>
				<input className={`${isEditing && 'edit'}`}
					type="text"
					value={inputText}
					onChange={updateHandler}
					onKeyDown={updateHandler}
					onBlur={blurHandler}
					autoFocus />
				<span>{props.ampm} {props.hour} 시 {props.minute} 분</span>
			</>
		);
	} else {
		element = (
			<div className='view'>
				<input className='toggle'
					   type="checkbox"
					   checked={isCompleted}
					   onChange={checkHandler} />
				<label onDoubleClick={doubleClickHandler}>
					{props.title}
				</label>
				<span>{props.ampm} {props.hour} 시 {props.minute} 분</span>
				<button className='destroy' onClick={deleteHandler} />
			</div>
		);
	}

	const isCompletedOrEditing = classNames({
		'completed': isCompleted,
		'editing': isEditing
	});

	return (
		<li className={isCompletedOrEditing}>
			{element}
		</li>
	);

};

export default Alarm;