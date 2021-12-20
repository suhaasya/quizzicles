import React, { useState, useEffect } from 'react'
import Button from '../Components/button/Button'
import Quiz from './Quiz'
import './QuizPage.css'

export default function QuizPage() {

    const [quiz, setQuiz] = useState([])

    useEffect(() => {
        async function getQuiz (){
            const res = await fetch('https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple')
            const quizData = await res.json()
            setQuiz(quizData.results)
        }
        getQuiz()
    }, [])

    

    return (
        <div className='quiz-page'>
            {quiz.map(quiz=><Quiz que={quiz.question} opt={[...quiz.incorrect_answers, quiz.correct_answer]} correctAns = {quiz.correct_answer}/>)}
            <Button title='Check Answers'/>
        </div>
    )
}
