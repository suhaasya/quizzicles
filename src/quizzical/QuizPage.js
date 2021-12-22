import React, { useState, useEffect } from 'react'
import Button from '../Components/button/Button'
import Quiz from './Quiz'
import './QuizPage.css'

export default function QuizPage() {

    const [quiz, setQuiz] = useState([])

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


    useEffect(() => {
        async function getQuiz (){
            const res = await fetch('https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple')
            const quizData = await res.json()
            const quiz = quizData.results.map(quiz=>{
                const options = shuffleArray([...quiz.incorrect_answers, quiz.correct_answer])
                const newOptions = options.map(opt=>{
                    return {title:opt, isHeld:false}
                })
                return {...quiz, options: newOptions}
            })
            setQuiz(quiz)
        }
        getQuiz()
    }, [])

    return (
        <div className='quiz-page'>
            {quiz.map(quiz=><Quiz que={quiz.question} opt={quiz.options} correctAns = {quiz.correct_answer} setQuiz={setQuiz}/>)}
            <Button title='Check Answers'/>
        </div>
    )
}
