import React, { useState } from 'react';
import styles from './Inputbox.module.css';
import submitbutton from '../../../assets/Send.svg';
import GetTime from '../../../helper functions/GetTime'
import GetDate from '../../../helper functions/GetDate'
function Inputbox({groupID,onUpdate}) {
  const [isClicked, setIsClicked] = useState(false);
  const [Newdata,setNewdata] = useState('')
  // const [date,setDate]= useState(GetDate())
  // const [time,setTime]= useState(GetTime())
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
      selectedGrp.content.push({
        text: Newdata,
        time: GetTime(),
        date: GetDate(),
      });
      localStorage.setItem('GroupList', JSON.stringify(existingGroup));
      onUpdate(existingGroup)
      setNewdata('');
      setIsClicked(false);
    }
  };
  return (
    <div className={styles.inputbox}>
      <textarea  name="NotesInput"  value={Newdata} onChange={handleTextareaChange} spellCheck='false' placeholder='Write your notes here'>
      </textarea>
      <img
        src={submitbutton}
        className={styles.submitBtn}
        style={{
          filter: isClicked ? 'brightness(0) saturate(100%) invert(11%) sepia(55%) saturate(5026%) hue-rotate(224deg) brightness(100%) contrast(113%)': 'none',
        }}
        alt=""
        onClick={handleSubmit}
      />
    </div>
  );
}

export default Inputbox;
