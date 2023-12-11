import React,{useState} from 'react'
import styles from './Notelist.module.css'
import List from './List'
import Modal from 'react-modal';
import { v4 as uuidv4 } from 'uuid'
const customStyles = {
  content: {
    
    overflowY:'hidden',
    minWidth:'260px',
    maxWidth: '39vw', 
    minHeight:'10px',
    maxHeight: '35vh',
    margin: '10vw auto ',
    paddingTop:'10px'
  },
};

function Notelist() {
  const [modalIsOpen, setIsOpen] =useState(false);
  const [grpName,setgrpName]= useState('')
  const [selectedColor, setSelectedColor] = useState(null);
  const [Group,setGroup] =useState([])
  const [Currentgroup,setCurrentgroup] = useState(null)
  if (!localStorage.getItem('GroupList')) {
    const initialGrpList = [];
    localStorage.setItem('GroupList', JSON.stringify(initialGrpList));
  }
  const handleColorClick = (color) => {
    setSelectedColor(color);
  };
  const grpList = JSON.parse(localStorage.getItem('GroupList'))
  const handleCreateGroup=()=>{
    if(grpName,selectedColor){
      const existingGroups = JSON.parse(localStorage.getItem('GroupList'))
      const isGroupExists = existingGroups.some(group => group.name.toLowerCase() === grpName.toLowerCase());
    if (isGroupExists) {
      alert('Group with the same name already exists. Please choose a different name.');
      setgrpName('')
      return;
    }
      const newGroup ={
        id:uuidv4(),
        name:grpName,
        color:selectedColor,
        content:[]
      }
      const updatedGroups = [...existingGroups,newGroup]
      localStorage.setItem('GroupList',JSON.stringify(updatedGroups))
      setGroup(updatedGroups)
      setSelectedColor(null)
      setgrpName('')
      setIsOpen(false)
    }
  }
  return (
    <div style={{minWidth:'20vw',maxWidth:'30vw',height:'100vh',display:'flex',flexDirection:'column'}}>
        <p className={styles.title}>Pocket Notes</p>
        <div className={styles.listContainer} >
          {
            grpList.map((item)=>(
              <List key={item.id} grpName={item.name} grpColour={item.color} grpId={item.id} selectedGroup={Currentgroup} setselectedGroup={setCurrentgroup}/>
            ))
          }
        </div>
        <Modal style={customStyles} isOpen={modalIsOpen} onRequestClose={()=>setIsOpen(false)} ariaHideApp={false}>
        <p className={styles.Modaltitle}>Create New Group</p>
        <div style={{display:'flex'}}>
          <p className={styles.inputlabel}>Group Name</p>
          <input type="text" spellCheck='false' className={styles.grpInput} placeholder='Enter Group Name' onChange={(e)=>setgrpName(e.target.value)} />
        </div>
        <div style={{display:'flex'}}>
          <p className={styles.inputlabel} >Choose Colour</p>
          <div className={styles.colorOptions}>
            {['#B38BFA', '#FF79F2', '#43E6FC', '#F19576', '#0047FF', '#6691FF'].map((color) => (
              <span
                key={color}
                className={`${styles.colorOption} ${selectedColor === color ? styles.activeColor : ''}`}
                style={{ backgroundColor: color }}
                onClick={() => handleColorClick(color)}
              ></span>
            ))}
          </div>
          </div>  
          <button className={styles.createBtn} onClick={()=>handleCreateGroup()}>Create</button>
       
        </Modal>
        <button className={styles.addBtn} onClick={()=>setIsOpen(true)}>+</button>
    </div>
  )
}
export default Notelist


