import React, { useState, useEffect } from 'react'
import Button from '../Components/button/Button'
import Quiz from './Quiz'
import './QuizPage.css'

export default function QuizPage() {

    const [quiz,setQuiz] = useState([]);
    const [style, setStyle] = useState()
    const [disAns, setDisAns] = useState(false);
    const [total, setTotal] = useState(0);
    const [submitClick, setSubmitClick] = useState(false);
    const selectedAnswers = [];

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
            setQuiz(quizData.results)
        }
        getQuiz()
    }, [])

    const correct_answers = quiz.map(quiz=>quiz.correct_answer)
    console.log(correct_answers)
    function submit(){
        setDisAns(true)
        setSubmitClick(true)
        for(let i=0; i<quiz.length; i++){
            console.log(correct_answers[i], selectedAnswers[i]);
            correct_answers[i]===selectedAnswers[i].answer ? 
            setTotal(prev=>{
                console.log(prev++)
                return prev++;

            }): 
            setTotal(prev=>{
                return prev;
            });
        }
    }

    return (
        <div className='quiz-page'>
            {quiz.map((quiz,i)=><Quiz key={i} id={i} question={quiz.question} answers={shuffleArray([quiz.correct_answer,...quiz.incorrect_answers])}
            selectedAnswers = {selectedAnswers}
            style={style}
            correct_answer={quiz.correct_answer}
            submitClick={submitClick}
            />)}
            {disAns && <p>You got {total}/5</p>}
            <Button title='Check Answers' submit={submit}/>
        </div>
    )
}
