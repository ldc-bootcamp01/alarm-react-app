import React, { useState } from 'react'
import classes from './Form.module.css'

const Form = (props) => {

    const [inputs, setInputs] = useState({ hour: '', minute: '', title: '' , ampm: '오전' });

    const submitHandler = (event) => { 
        event.preventDefault();
        console.log('You clicked submit');
        props.submit(inputs);
        // 입력상자 초기화
        setInputs({ hour: '', minute: '', title: '' , ampm: inputs.ampm });     
    };

    const titleChangeHandler = (event) => { 
        setInputs({ ...inputs, title: event.target.value });
        console.log(inputs);
    };

    const hourChangeHandler = (event) => { 
        setInputs({ ...inputs, hour: event.target.value });
        console.log(inputs);
    };

    const minuteChangeHandler = (event) => { 
        setInputs({ ...inputs, minute: event.target.value });
        console.log(inputs);
    };

    const ampmChangeHandler = (event) => { 
        setInputs({ ...inputs, ampm: event.target.value });
        console.log(inputs);
    };

    return (
        <>
            <form onSubmit={submitHandler}>
                <input className={classes[`${props.customStyle}`]}
                       placeholder="알람 제목을 입력해주세요." size="20"
                       value={inputs.title} onChange={titleChangeHandler}></input> <br/>
                <div className='formInput'>
                    <select onChange={ampmChangeHandler}>
                        <option value='오전'>오전</option>
                        <option value='오후'>오후</option>
                    </select> &nbsp; 
                    <input size="2" value={inputs.hour} onChange={hourChangeHandler}
                        type="number" min="1" max="12"></input> <span>시</span> &nbsp; &nbsp; &nbsp;
                    <input size="2" value={inputs.minute} onChange={minuteChangeHandler} 
                        type="number" min="0" max="59"></input> <span>분</span> &nbsp; &nbsp; &nbsp;
                    <button type="submit">추가</button>
                </div>
                <label htmlFor={props.input?.id}>{props.label}</label>
            </form>
        </>
    );

};

export default Form;