import {useState} from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalOpen, setModalOpen] = useState(false); //can only be called inside of function also known as a react hook.

  //props object
  function deleteHandler(){
    setModalOpen(true);
 
  };
  function closeModalHandler(){
    setModalOpen(false);
  }
    return (
    <div className='card'> 
    <h2>{props.text}</h2>
      <div className='actions'>

        <button className='btn' onClick={deleteHandler}>Delete</button>
      </div>
      {/* If both conditions are true the second condition is rendered. */}
      {modalOpen && (<Modal  onCancel={closeModalHandler} onConfirm={closeModalHandler}/>)}
      {modalOpen && (<Backdrop onCancel={closeModalHandler} />)}

    </div>
    );

}
export default Todo;
