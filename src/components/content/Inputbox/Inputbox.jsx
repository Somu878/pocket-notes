import React, { useState } from 'react';
import styles from './Inputbox.module.css';
import submitbutton from '../../../assets/Send.svg';

function Inputbox({groupID}) {
  const [isClicked, setIsClicked] = useState(false);
  const [Newdata,setNewdata] = useState('')
  
  // const existingGroup = JSON.parse(localStorage.getItem('GroupList'))
  const handleTextareaChange=(e)=>{
    e.preventDefault();   
    const inputValue = e.target.value
    setNewdata(inputValue)
    setIsClicked(Boolean(inputValue))
  }
  const handleSubmit = () => {
    if (Newdata) {
      const existingGroup = JSON.parse(localStorage.getItem('GroupList'));
      const selectedGrp = existingGroup.find((group) => group.id === groupID);
      selectedGrp.content.push(Newdata);
      localStorage.setItem('GroupList', JSON.stringify(existingGroup));
      setNewdata('');
      setIsClicked(false);
    }
  };
  return (
    <div className={styles.inputbox}>
      <textarea  name="NotesInput"  value={Newdata} cols={40} onChange={handleTextareaChange} spellCheck='false' placeholder='Write your notes here'>
      </textarea>
      <img
        src={submitbutton}
        style={{
          width: '50px',
          height: '50px',
          position: 'fixed',
          top: '89vh',
          right: '60px',
          cursor: 'pointer',
          filter: isClicked ? 'brightness(0) saturate(100%) invert(11%) sepia(55%) saturate(5026%) hue-rotate(224deg) brightness(100%) contrast(113%)': 'none',
        }}
        alt=""
        onClick={handleSubmit}
      />
    </div>
  );
}

export default Inputbox;
