import React, { useState } from 'react'
import './Quiz.css'
import Option from '../Components/Option/Option'

export default function Quiz(props) {
    Array.prototype.insert = function ( index, item ) {
        this.splice( index, 0, item );
    };

    const [answers,setAnswers] = useState(props.answers.map(answer=>{
        return {answer:answer, isSelected:false}
    }))

    
    
    const selectedAnswer = answers.find(answer =>answer.isSelected===true);
    props.selectedAnswers.insert(props.id,selectedAnswer);

    return (
        <div className='quiz'>
            <p className='que'>{props.question}</p>
            <div className='options-div'>
                {answers.map((answer,i)=><Option key={i} id={i} answer={answer.answer} isSelected={answer.isSelected} setAnswers={setAnswers}
                style={props.style}
                correct_answer={props.correct_answer}
                submitClick={props.submitClick}
                />)}
            </div>
        </div>
    )
}
