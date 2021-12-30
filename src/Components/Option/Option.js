import React from 'react'
import './Option.css'

export default function Option(props) {
    let style = {
        background: props.isSelected ? '#D6DBF5' : '#F5F7FB' 
    }
    
    // console.log(props.submitClick, props.correct_answer, props.answer);
    if(props.submitClick){
        if(props.correct_answer===props.answer){
            style = {
                background: '#94D7A2',
                borderColor: '#94D7A2'
            }
        }
        if((props.correct_answer!==props.answer)&&props.isSelected){
            style = {
                background: '#F8BCBC',
                borderColor: '#F8BCBC'
            }
        }
    }

    function handleClick(){
        props.setAnswers(prev=>{
            const updatedAnswers = prev.map((ans,i)=>{
                const updatedAns = i === props.id ? {...ans, isSelected:!ans.isSelected} : {...ans, isSelected:false}
                return updatedAns
            })
            return updatedAnswers;
        })
    }

    return (
        <div>
            <p className='option' style={style} onClick={handleClick}>{props.answer}</p>
        </div>
    )
}
