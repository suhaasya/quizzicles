import React, { useState } from 'react'
import './Quiz.css'
import Option from '../Components/Option/Option'

export default function Quiz(props) {
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
        
            // Generate random number
            var j = Math.floor(Math.random() * (i + 1));
                        
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
            
        return array;
    }

    const shuffledOptions = shuffleArray(props.opt)

    const [opts, setOpts] = useState(shuffledOptions.map(opt=>{
        return {title:opt, isHeld:false}
    }))

    const userAns = opts.filter(opt=>opt.isHeld === true)

    console.log(userAns?.[0]?.title)

    console.log(props.correctAns)

    console.log(props.correctAns===userAns?.[0]?.title)

    
    return (
        <div className='quiz'>
            <p className='que'>{props.que}</p>
            <div className='options-div'>
                {opts.map((opt,i)=><Option id={i} optValue={opt.title} isHeld={opt.isHeld} setOpts={setOpts}/>) }
            </div>
        </div>
    )
}
