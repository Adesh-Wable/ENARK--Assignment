import React, { useEffect, useState } from 'react'
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import './ThirdComp.css';
import { useNavigate } from 'react-router-dom';

const ThirdComp = () => {
    const [countdown, setCountdown] = useState();
    const [timerRunning, setTimerRunning] = useState(false);
    const [count,setCount] = useState(0);
    const history = useNavigate();

    const startTimer = () => {
      if (!countdown || countdown <= 0) {
        alert("Please Enter Time");
        return;
    }

      if (countdown > 0 && !timerRunning) {
        setTimerRunning(true);
        setCount(count+1)
      }
    };
  
    useEffect(() => {
      let timer;
  
      if (timerRunning) {
        timer = setInterval(() => {
          setCountdown((prevCount) => prevCount - 1);
        }, 1000);
      }
  
      return () => {
        clearInterval(timer);
      };
    }, [timerRunning]);
  
    useEffect(() => {
      if (countdown === 0) {
        setTimerRunning(false);
        history("/fetchdata")
      }
    }, [countdown, history]);

    const handleClose = () => {
      setTimerRunning(false);
    };
  return (
    <div>
         <Header />
             <div className='input'>
             <label className='text' >
              Enter CountDown Time
              </label>
              <input
                placeholder='Enter Here'
                type="number"
                class="form-control"
                style={{width:'350px'}}
                value={countdown}
                onChange={(e) => setCountdown(parseInt(e.target.value))}
              />
            <button className='btn1' onClick={startTimer}>Start Timer</button>
             </div>
             {timerRunning && (
        <div className='timer'>
          <p> {countdown}:{count}</p>

          <button className="circle-btn" onClick={handleClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-x-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
            </svg>
          </button>
        </div>
      )}
     
         <Footer/>
    </div>
  )
}

export default ThirdComp;