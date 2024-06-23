
import "./Modal.css"
import { useEffect, useRef } from "react";
import { useContext } from "react";
import { Context } from "./quizzContent/context";


function Modal({ openModal, closeModal,  }) {
  const ref = useRef();
  const  {wrongCount, corectCount} = useContext(Context)

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openModal]);

const handleClick=()=>{
 closeModal(false)
window.location.reload()
 

}
  return (
    <dialog className="modal"
      ref={ref}
      onCancel={()=>closeModal(false)}
       onClick={(e) => e.target === e.currentTarget ? e.currentTarget.close(): null}
      >
        <div className="modal-header">
          <h1 style={{color:"#fff"}}>Your Score</h1>
         <span className="results"><span style={{color: "green"}}>{corectCount}</span>/<span style={{color:"brown"}}>{wrongCount}</span></span>
         
      
     <button className="closemodal" onClick={handleClick}>
        Restart
      </button>
      </div>
    </dialog>
  );
}

export default Modal;