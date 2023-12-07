import React from 'react'
import styles from './Notelist.module.css'
import List from './List'
function Notelist() {
    const col = 'pink'
    const name = 'hello world'
  return (
    <div style={{width:'30vw',height:'100vh',display:'flex',flexDirection:'column'}}>
        <p className={styles.title}>Pocket Notes</p>
        <List  grpColour={col} grpName={name} />
        <button className={styles.addBtn}>+</button>
    </div>
  )
}

export default Notelist