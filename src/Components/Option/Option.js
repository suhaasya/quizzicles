import React from 'react'
import './Option.css'

export default function Option(props) {

    function handleClick(){
        props.setQuiz(prev=>{
            const newQuiz = prev.map((quiz,i)=>{
                const newOption = quiz.options.map((opt,i)=>{
                    if(opt.title===props.optValue){
                        return {...opt, isHeld: !opt.isHeld}
                    }else{
                        return {...opt}
                    }
                })
                return {...quiz, options: newOption};
            })
            return newQuiz;
        })
    }

    const style = {
        background: props.isHeld ? '#D6DBF5' : '#F5F7FB'
    }

    return (
        <div>
            <p className='option' style={style} onClick={handleClick}>{props.optValue}</p>
        </div>
    )
}
