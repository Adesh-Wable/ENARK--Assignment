import React, { useEffect, useState } from "react";
import "../Second Component/SecondComp.css";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import CloseIcon from "@mui/icons-material/Close";

const SecondComp = () => {

  const [showToast, setShowToast] = useState(false);
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [timeoutValue, setTimeoutValue] = useState(0);
  const [customToastText, setCustomToastText] = useState(""); // State for input box value

  useEffect(() => {
    let timer;
    if (showToast) {
      timer = setTimeout(() => {
        setShowToast(false);
      }, 7000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [showToast]);
  const handleClose = () => {
    setShowToast(false);
  };
  
  const handleShowToast = () => {
    setShowToast(true);
    setCount(count + 1);
  };


  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleConfirmModal = () => {
    setShowModal(false);
    setShowToast(false);
    setCount(count + 1);

    if (timeoutValue > 0) {
      setTimeout(() => {
        setShowToast(false);
      }, timeoutValue * 1000);
    }
  };
  return (
    <>
      <Header />
      <div>
        <div className="input">
          <p style={{ fontSize: "30px" }}>Enter Custom Toast Text</p>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Here"
            style={{ width: "400px", height: "40px" }}
            value={customToastText} 
            onChange={(e) => setCustomToastText(e.target.value)} 
          />
        </div>
        <div className="buttons-2">
          <button className="btn-2" onClick={handleShowToast}>
            Show Custom Toast Message
          </button>
          <button className="btn-setting-2" onClick={handleShowModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-gear-fill"
              viewBox="0 0 16 16"
            >
              <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
            </svg>
          </button>
        </div>
      </div>


      
      {showModal && (
        <div className="setting-modal">
          <div>
          <button onClick={handleCloseModal}  className="close-btn"><CloseIcon/></button>
          </div>
          <div className="lab-inp" >
            <label>
              Set Timeout:
              <input
                type="number"
                value={timeoutValue}
                onChange={(e) => setTimeoutValue(parseInt(e.target.value))}
              />
            </label>
            <div className="cnf">
            <button onClick={handleConfirmModal} className="confirm-1">Confirm</button>
            </div>
           
           
          </div>
        </div>
      )}

      {showToast && (
        <div className="msg">
           <p className="para">{customToastText || "Testing"} : {count}</p>
          <button onClick={handleClose} className="circle-btn">
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
      
      <Footer />
    </>
  );
};

export default SecondComp;
