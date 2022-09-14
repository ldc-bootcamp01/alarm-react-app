import React from 'react'
import Alarms from '../../Alarms/Alarms'
import classes from './Main.module.css'
import MainFooter from './MainFooter'

const Main = (props) => {

    return (
        <main style={{diplay:'none'}} className={classes["main"]}>
            <Alarms alarms={props.alarms} onDelete={props.onDelete} onUpdate={props.onUpdate} />
            <MainFooter onCount={props.onCount} />
        </main>
    );

};

export default Main;