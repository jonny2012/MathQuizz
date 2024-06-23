import React, { memo } from 'react'
import { useState, useEffect } from 'react';
import Modal from './Modal';



const Timer =  memo(function Timer({initialMinute, initialSeconds}) {

    const [ minutes, setMinutes ] = useState(initialMinute);
    const [seconds, setSeconds ] =  useState(initialSeconds);

    const [modal, setModal] = useState(true);
   

     useEffect(()=>{
    let myInterval = setInterval((e) => {

            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                
                if (minutes === 0) {
               
                    clearInterval(myInterval)
                  
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
              
            }
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          
          };   
    });
  
    return (
        <div>
        { minutes === 0 && seconds === 0 
            ? null 
            : <h1> {minutes}:{seconds < 10 ?  `${seconds}` : seconds }</h1> 
        }
        {
            minutes === 0 && seconds === 0 
            ? <Modal openModal={modal} 
                closeModal={ setModal} 
        
                >
                    Modal content.
            </Modal>
         : null 
        }
        
        </div>
    )
})

export default Timer;