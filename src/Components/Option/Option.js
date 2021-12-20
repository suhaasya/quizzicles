import React from 'react'
import './Option.css'

export default function Option(props) {

    function handleClick(){
        props.setOpts(prev=>{
            const newArr = prev.map((opt,i)=>{
               const o = i===props.id ? {...opt, isHeld: !opt.isHeld}: {...opt, isHeld:false}
                return o
            })
            return newArr
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
