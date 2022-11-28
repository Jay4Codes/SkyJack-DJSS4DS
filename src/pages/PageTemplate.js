import React, { useRef, useState, useEffect } from "react";
import "./PageTemplate.css";
import db from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { UpdateProgress } from "../auth/UpdateProgress";
import PopUp from "../components/PopUp";
import { AnimatePresence } from "framer-motion";

function PageTemplate(props) {
  const inputRef = useRef();
  const [showPopUp, setShowPopUp] = useState([false, "failure"]);
  const [answer, setAnswer] = useState("");
  const [typedAnswer, setTypedAnswer] = useState("");
  const [showWhat, setShowWhat] = useState("Story");
  const [previousText, setPreviousText] = useState("Previous");
  const [nextText, setNextText] = useState("Next");
  const textDisable = props.progress.length >= props.qId;

  function ansCheck(e) {
    e.preventDefault();
    if (props.qId !== 2) {
      if (typedAnswer.toLowerCase().trim() === answer.toLowerCase()) {
        UpdateProgress(props.qId);
      }
    } else {
      if (typedAnswer.split(" ").length === 5) {
        if (
          answer.filter((x) => typedAnswer.toLowerCase().includes(x)).length ===
          5
        ) {
          handlePopUp("success");
          inputRef.current.blur();
          UpdateProgress(props.qId);
        } else {
          handlePopUp("failure");
        }
      } else {
        handlePopUp("failure");
      }
    }
  }

  useEffect(() => {
    async function getAns() {
      const fbDoc = doc(db, "clues", `c${props.qId}`);
      const fbDocRes = await getDoc(fbDoc);
      //check if user input matches answer
      setAnswer(fbDocRes.data().answer);
    }
    getAns();
    // eslint-disable-next-line
  }, []);

  function handlePopUp(e) {
    setShowPopUp([true, e]);
    let interval;
    interval = setInterval(() => {
      setShowPopUp([false, e]);
    }, 2000);

    return () => clearInterval(interval);
  }

  return (
    <div className="page-inner-wrapper">
      <AnimatePresence>
        {showPopUp[0] && <PopUp e={showPopUp[1]} />}
      </AnimatePresence>
      <div className="page-nav">
        <div>Clue {props.qId}</div>
        <div className="btn-container">
          <button
            style={{ borderBottom: showWhat === "Story" && "2px solid black" }}
            onClick={() => {
              setShowWhat("Story");
            }}
          >
            <span>Story</span>
          </button>
          <button
            style={{
              borderBottom: showWhat === "Description" && "2px solid black",
            }}
            onClick={() => {
              setShowWhat("Description");
            }}
          >
            <span>Description</span>
          </button>
          <button
            style={{ borderBottom: showWhat === "Hint" && "2px solid black" }}
            onClick={() => {
              setShowWhat("Hint");
            }}
          >
            <span>Hint</span>
          </button>
        </div>
      </div>
      <div className="page-body">
        <div className="clue-body">
          <div className="clue-title">Clue - {showWhat}</div>
          <div className="clue-text">
            {showWhat === "Story"
              ? props.data.story
              : showWhat === "Hint"
              ? props.data.hint
              : props.data.description}
          </div>
          <form
            className="clue-input"
            onSubmit={(e) => {
              ansCheck(e);
            }}
          >
            <input
              ref={inputRef}
              className={textDisable ? "text-field-disabled" : "text-field"}
              onChange={(e) => {
                setTypedAnswer(e.target.value);
              }}
              type="text"
              placeholder={textDisable ? "Answered" : "Your Answer"}
            />
            {!textDisable && (
              <input className="input-button" type="submit" value="Submit" />
            )}
          </form>
        </div>
        <div className="clue-img">
          <a href={props.data.link} rel="noopener noreferrer" target="_blank">
            {" "}
            <img src={props.data.image} alt="clue data" />{" "}
          </a>
        </div>
      </div>
      {/* <div style={{ backgroundColor: "white", width: "50%", borderRadius: "30px", padding: "30px", position: "absolute", bottom: "100px", left: "200px", visibility: isVisible }}>
                {props.data.story}
                <button onClick={() => { console.log("modal close"); setIsVisible("hidden") }}> <i className="fa-solid fa-xmark"></i>x</button>
            </div> */}
      <div className="page-footer">
        <div className="btn-container">
          <button>
            <span
              onMouseEnter={() => setPreviousText("Swipe Right")}
              onMouseLeave={() => setPreviousText("Previous")}
            >
              {previousText}
            </span>
          </button>
        </div>
        <div className="btn-container">
          <button>
            <span
              onMouseEnter={() => setNextText("Swipe Left")}
              onMouseLeave={() => setNextText("Next")}
            >
              {nextText}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PageTemplate;
