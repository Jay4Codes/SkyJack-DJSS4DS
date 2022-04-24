import React, { useEffect, useRef, useState } from 'react'
import './PageTemplate.css'
import db from '../../firebase/firebase'
import { doc, getDoc } from 'firebase/firestore'
import { UpdateProgress } from '../../auth/UpdateProgress'
import PopUp from '../PopUp'
import { AnimatePresence } from 'framer-motion'

function Page1(props) {
    const data = {
        part1: props.data.description[0],
        part2: props.data.description[1],
        part3: props.data.description[2],
        part4: props.data.description[3],
        part5: props.data.description[4],
    }
    const inputRef = useRef()
    const [showPopUp, setShowPopUp] = useState([false,'failure'])
    const [clueNumber, setClueNumber] = useState(0)
    const [showData, setShowData] = useState(data.part1)
    const [answer, setAnswer] = useState("")
    const [typedAnswer, setTypedAnswer] = useState("")
    const [answered, setAnswered] = useState([])
    const [previousText, setPreviousText] = useState("Previous")
    const [nextText, setNextText] = useState("Next")
    /* const [isVisible, setIsVisible] = useState("hidden") */
    const correctAns = [0,1,2,3,4]
    const textDisable = props.progress.length >= props.qId

    useEffect(() => {
        let difference = correctAns.filter(x => !answered.includes(x))
        if (difference.length === 0) {
            UpdateProgress(props.qId)
        }
        // eslint-disable-next-line
    }, [answered])
    
    useEffect(() => {
        async function getAns() {
            const fbDoc = doc(db, "clues", `c1`)
            const fbDocRes = await getDoc(fbDoc)
            //check if user input matches answer
            setAnswer(fbDocRes.data().answer)
        }
        getAns()
    }, [])

    async function ansCheck(e) {
        e.preventDefault()
        //check if user input matches answer
        if (typedAnswer.toLocaleLowerCase()===answer[clueNumber].toLocaleLowerCase()) {
            if (!answered.includes(clueNumber)) {
                handlePopUp("success")
                setAnswered([...answered, clueNumber])
                inputRef.current.blur()
            }
        } else {
            handlePopUp("failure")
        }
    }

    function handlePopUp(e) {
        setShowPopUp([true, e])
        let interval
        interval = setInterval(() => {
            setShowPopUp([false,e])
        }, 2000)

        return () => clearInterval(interval)
    }

    return (
        <div className='page-inner-wrapper'>
            <AnimatePresence>
                {
                    showPopUp[0] && <PopUp e={showPopUp[1]} />
                }
            </AnimatePresence>
            <div className='page-nav'>
                <div>Clue 1</div>
                <div className='btn-container'>
                    <button onClick={() => {setShowData(data.part1); setClueNumber(0); inputRef.current.value=''}} style={{background:answered.includes(0)?"#03fc1c":"#eee", borderBottom:clueNumber===0?"2px solid black":null}} className="clue-part-btn"><span>Part 1</span></button>
                    <button onClick={() => {setShowData(data.part2); setClueNumber(1); inputRef.current.value=''}} style={{background:answered.includes(1)?"#03fc1c":"#eee", borderBottom:clueNumber===1?"2px solid black":null}} className="clue-part-btn"><span>Part 2</span></button>
                    <button onClick={() => {setShowData(data.part3); setClueNumber(2); inputRef.current.value=''}} style={{background:answered.includes(2)?"#03fc1c":"#eee", borderBottom:clueNumber===2?"2px solid black":null}} className="clue-part-btn"><span>Part 3</span></button>
                    <button onClick={() => {setShowData(data.part4); setClueNumber(3); inputRef.current.value=''}} style={{background:answered.includes(3)?"#03fc1c":"#eee", borderBottom:clueNumber===3?"2px solid black":null}} className="clue-part-btn"><span>Part 4</span></button>
                    <button onClick={() => {setShowData(data.part5); setClueNumber(4); inputRef.current.value=''}} style={{background:answered.includes(4)?"#03fc1c":"#eee", borderBottom:clueNumber===4?"2px solid black":null}} className="clue-part-btn"><span>Part 5</span></button>
                </div>
            </div>
            <div className='page-body'>
                <div className='clue-body'>
                    <div className='clue-title'>Clue - 1 Part - {clueNumber+1}</div>
                    <div className='clue-text'>
                        {showData}
                    </div>
                    <form className='clue-input' onSubmit={(e)=>{ansCheck(e)}}>
                        <input className={answered.includes(clueNumber)?'text-field-disabled':textDisable?'text-field-disabled':'text-field'} ref={inputRef} onChange={(e)=>{setTypedAnswer(e.target.value)}} type="text" placeholder={answered.includes(clueNumber)?'Answered':textDisable?'Answered':'Your Answer'} />
                        {(textDisable || answered.includes(clueNumber)) ? null : <input className='input-button' type="submit" value="Submit"/>}
                    </form>
                </div>
                <div className='clue-img'>
                <a href={props.data.link} rel="noopener noreferrer" target="_blank"> <img src={props.data.image[clueNumber]} alt="clue data" /> </a>
                </div>
            </div>
            {/* <div style={{ backgroundColor: "white", width: "50%", borderRadius: "30px", padding: "30px", position: "absolute", bottom: "100px", left: "200px", visibility: isVisible }}>
                Nice work again, Sherlock! It's getting interesting, isn't it?
                The FBI, after having estimated the probable point of Cooper's jump, searched around the perimeters. The area surrounding the drop location had tricky terrain; steep mountains on one side and a dense jungle on the other. After desperately searching for Cooper (or his mortal remains), the FBI gave up the chase since there was no trace of him altogether.

                <button onClick={() => { console.log("modal close"); setIsVisible("hidden") }}> <i className="fa-solid fa-xmark"></i>x</button>
            </div> */}
            <div className='page-footer'>
                <div className='btn-container'>
                    <button > 
                        <span onMouseEnter={()=>setPreviousText("Swipe Right")} onMouseLeave={()=>setPreviousText("Previous")}>{previousText}</span>
                    </button>
                </div>
                <div className='btn-container'>
                    <button> 
                        <span onMouseEnter={()=>setNextText("Swipe Left")} onMouseLeave={()=>setNextText("Next")}>{nextText}</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Page1