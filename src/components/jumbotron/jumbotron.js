import React, { useState } from 'react'
import styles from './jumbotron.module.css';
import { Jumbotron, Square, Square2, Square3, Square4, Square5, Square6, Square7, Square8, Square9, Square10 } from './jumbotron.elements';

const JumbotronThing = () => {

        return (
            <Jumbotron>
                <Square></Square>
                <Square2></Square2>
                <Square3></Square3>
                <Square4></Square4>
                <Square5></Square5>
                <Square6></Square6>
                <Square7></Square7>
                <Square8></Square8>
                <Square9></Square9>
                <Square10></Square10>
            </Jumbotron>
        )
    
}



export default JumbotronThing


  // function stopAnim() {
    //     const animations = document.querySelectorAll(".jumbotron_square__1GEU2")
    //     animations.forEach(element => {
    //         if(element.style.animationPlayState == "paused"){
    //             return element.style.animationPlayState = "running"
    //         }
    //         return element.style.animationPlayState = "paused"
    //     });
    // }
    // <>
    // <button onClick={stopAnim}>bBLALLAB</button>
    // <div className={styles.jumbotron} id="jumbo">
    //     <div className={styles.square}></div>
    //     <div className={styles.square}></div>
    //     <div className={styles.square}></div>
    //     <div className={styles.square}></div>
    //     <div className={styles.square}></div>
    //     <div className={styles.square}></div>
    //     <div className={styles.square}></div>
    // </div>
    // </>
