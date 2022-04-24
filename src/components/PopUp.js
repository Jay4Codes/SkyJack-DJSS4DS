import React from 'react'
import './PopUp.css'
import { motion } from 'framer-motion'

function PopUp(props) {

    return (
    <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        className='popup'>
            {props.e==="success" ? "Correct Answer" : "Incorrect Answer"}
    </motion.div>
    )
}

export default PopUp