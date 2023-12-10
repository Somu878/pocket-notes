import React, { useState } from 'react';
import styles from './Inputbox.module.css';
import submitbutton from '../../../assets/Send.svg';

function Inputbox() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className={styles.inputbox}>
      <textarea name="NotesInput" cols={50} spellCheck='false' placeholder='Write your notes here'>
      </textarea>
      <img
        src={submitbutton}
        style={{
          width: '60px',
          height: '60px',
          position: 'absolute',
          top: '90vh',
          right: '70px',
          cursor: 'pointer',
          // filter: isClicked ? 'brightness(0) saturate(100%) invert(11%) sepia(55%) saturate(5026%) hue-rotate(224deg) brightness(100%) contrast(113%)': 'none',
        }}
        alt=""
        onClick={handleClick}
      />
    </div>
  );
}

export default Inputbox;
