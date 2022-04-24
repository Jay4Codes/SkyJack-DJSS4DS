//import db from '../firebase/firebase'
//import { doc, onSnapshot, collection, query, where, getDocs, updateDoc } from "firebase/firestore";
import React, { useState, useEffect } from 'react'
import axios from 'axios';
/* var CryptoJS = require("crypto-js"); */
require('dotenv').config()

function Timer(props) {

    const [counter, setData] = useState(0);
    const [second, setSecond] = useState('00');
    const [minute, setMinute] = useState('00');
    const [hr, setHr] = useState('00');

    useEffect(() => {
        
        /* var ciphertext = CryptoJS.AES.encrypt(JSON.stringify("asassa"), process.env.REACT_APP_SECRET).toString();
        console.log(ciphertext)

        var bytes = CryptoJS.AES.decrypt(ciphertext, process.env.REACT_APP_SECRET);
        var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        console.log(decryptedData) */
        // const fireBaseCollection = collection(db, "dbcooper_teams")
        // // window.addEventListener("beforeunload", (ev) => {
        // //     ev.preventDefault();
        // //     return ev.returnValue = 'Are you sure you want to close?';
        // // });
        const url = 'http://worldtimeapi.org/api/timezone/Asia/Kolkata'
        axios
            .get(url, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json;charset=UTF-8",
                },
            })
            // eslint-disable-next-line
            .then(({ data }) => {

                var seconds = Math.abs(new Date() - new Date('2022-04-03T20:00:00.000000+05:30')) / 1000;
                // window.addEventListener('unload', onbeforeunloadFn);
                setData(seconds)
            });


        // //TODO: check how bad the following line is for security
        // const fireBaseQuery = query(query(fireBaseCollection, where('name', '==', 'hello')))
        // getDocs(fireBaseQuery).then((value) => {
        //     setData(value.docs[0].data()['remaining_time'])
        //     // console.log(value.docs[0].data()['remaining_time'])
        // })
        return () => {
            // window.removeEventListener('unload', onbeforeunloadFn);
        }
    }, [])

    useEffect(() => {
        let intervalId;

        intervalId = setInterval(() => {

            const hrCounter = Math.floor(counter / 3600);
            let time = counter
            time = time - hr * 3600;
            const secondCounter = Math.floor(time % 60);
            const minuteCounter = Math.floor(time / 60);
            const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}` : secondCounter;
            const computedHr = String(hrCounter).length === 1 ? `0${hrCounter}` : hrCounter;
            const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}` : minuteCounter;

            setHr(computedHr);
            setSecond(computedSecond);
            setMinute(computedMinute);
            setData(counter => counter - 1);
        }, 1000)



        return () => clearInterval(intervalId);
        //eslint-disable-next-line
    }, [counter]);

    return (
        <div>{hr}:{minute}:{second}</div>
    )

}

export default Timer;