import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Home.css"
export const Home = () => {
    const navigate = useNavigate()
    const navSignIn = (e) => {
        e.preventDefault();
        navigate("/sign-in");
        // console.log("on Way");
    }
    const navSignUp = (e) => {
        e.preventDefault();
        navigate("/sign-up")
    }
    return (
        <div className='home'>
            <h1>Welcome In Blogging !</h1>
            <h4>Gentalman Identify when he start to talk !</h4>

            <button type='button' className='btn btn-home' onClick={navSignIn}>
                Sign In
            </button>
            <button type='button' className='btn btn-home' onClick={navSignUp}>
                Sign Up
            </button>



        </div>
    )
}


