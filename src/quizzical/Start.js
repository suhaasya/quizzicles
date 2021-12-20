import React from 'react';
import './Start.css';
import Button from '../Components/button/Button';

export default function Start() {
    return (
        <div className='start-page'>
            <h1 className='title'>Quizzical</h1>
            <p className='descr'>A quiz App</p>
            <Button title='Start quiz'/>
        </div>
    )
}
