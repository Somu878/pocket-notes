import React from 'react'
import styles from './Inputbox.module.css'
function Inputbox() {
  return (
    <div className={styles.inputbox}>
        <textarea name="NotesInput"cols={50} placeholder='Write your notes here'></textarea>
    </div>
  )
}

export default Inputbox