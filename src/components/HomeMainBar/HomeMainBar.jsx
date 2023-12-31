import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './HomeMainBar.css'
import QuestionsList from './QuestionsList'
import { useSelector } from 'react-redux'


const HomeMainBar = ({theme}) => {


    const questionsList = useSelector(state => state.questionsReducer)
    // console.log(questionsList)
    const user = useSelector( (state) => (state.currentUserReducer))


    // var questionsList = [{ 
    //     _id: 1,
    //     upVotes: 3,
    //     downVotes: 2,
    //     noOfAnswers: 2,
    //     questionTitle: "What the hell?",
    //     questionBody: "It meant to be",
    //     questionTags: ["java", "node js", "react js", "mongo db", "express js"],
    //     userPosted: "mano",
    //     askedOn: "jan 1",
    //     answer: [{
    //         answerBody: "Answer",
    //         userAnswered: "kumar",
    //         answeredOn: "jan 2",
    //         userId: 2,
    //     }]
    // },{ 
    //     _id: 2,
    //     upVotes: 3,
    //     downVotes: 2,
    //     noOfAnswers: 0,
    //     questionTitle: "What the hell?",
    //     questionBody: "It meant to be",
    //     questionTags: ["javascript", "R", "python"],
    //     userPosted: "mano",
    //     askedOn: "jan 1",
    //     answer: [{
    //         answerBody: "Answer",
    //         userAnswered: "kumar",
    //         answeredOn: "jan 2",
    //         userId: 2,
    //     }]
    // },{ 
    //     _id: 3,
    //     upVotes: 3,
    //     downVotes: 2,
    //     noOfAnswers: 0,
    //     questionTitle: "What the hell?",
    //     questionBody: "It meant to be",
    //     questionTags: ["javascript", "R", "python"],
    //     userPosted: "mano",
    //     askedOn: "jan 1",
    //     answer: [{
    //         answerBody: "Answer",
    //         userAnswered: "kumar",
    //         answeredOn: "jan 2",
    //         userId: 2,
    //     }]
    // }]

    const location = useLocation()
    // const user = 1
    const navigate = useNavigate()

    // const redirect = () => {
    //     alert('Login to ask question')
    //     navigate('/Auth')
    // }

    const checkAuth = () =>{
        if(user === null){
            alert('Login or SignUp to ask a Question')
            navigate('/Auth')
        }
        else{
            navigate('/AskQuestion')
        }
    }



  return (
    <div className='main-bar'>
        <div className="main-bar-header">
            {
                location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
            }
            <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
        </div>

        <div>
            {
                questionsList.data === null ?
                <h1>Loading</h1> :
                <>
                    <p> { questionsList.data.length } questions </p>
                    <QuestionsList questionsList={questionsList.data} theme={theme}/>


                </>
            }
        </div>

    </div>
  )
}

export default HomeMainBar