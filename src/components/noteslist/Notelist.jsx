import React,{useState} from 'react'
import styles from './Notelist.module.css'
import List from './List'
import Modal from 'react-modal';
const customStyles = {
  content: {
   width: '570px',
   height:'235px',
   marginTop:'200px',
   marginLeft:'400px',
   paddingLeft:'40px',
   paddingTop:'0px'
  }
};
function Notelist() {
  const [modalIsOpen, setIsOpen] =useState(false);
  const col = 'pink'
  const name = 'hello world'
  return (
    <div style={{width:'30vw',height:'100vh',display:'flex',flexDirection:'column'}}>
        <p className={styles.title}>Pocket Notes</p>
        <List  grpColour={col} grpName={name} />
        <Modal style={customStyles} isOpen={modalIsOpen}>
        <p style={{fontFamily:'var(--roboto)',fontSize:'27px',fontWeight:'500'}}>Create New Group</p>
        <div style={{display:'flex'}}>
          <p className={styles.inputlabel}>Group Name</p>
          <input type="text" className={styles.grpInput} placeholder='Enter Group Name' />
        </div>
        </Modal>
        <button className={styles.addBtn} onClick={()=>setIsOpen(true)}>+</button>
    </div>
  )
}
export default Notelist


