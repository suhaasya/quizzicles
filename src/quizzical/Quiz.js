import React, { useState } from 'react'
import './Quiz.css'
import Option from '../Components/Option/Option'

export default function Quiz(props) {

 
    return (
        <div className='quiz'>
            <p className='que'>{props.que}</p>
            <div className='options-div'>
                {props.opt.map((opt,i)=><Option id={i} optValue={opt.title} isHeld={opt.isHeld} setQuiz={props.setQuiz}/>) }
            </div>
        </div>
    )
}
