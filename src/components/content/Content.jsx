import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './Content.module.css'
import Getinitials from '../../helper functions/Getinitials'
import Inputbox from './Inputbox/Inputbox'
import GuiNotes from './GuiNotes'

function Content() {
    const list = JSON.parse(localStorage.getItem('GroupList'))
    const { grpId } = useParams()
    const [selectedGroup, setSelectedGroup] = useState(null);
    useEffect(()=>{
        const Group = list.find(item => item.id === grpId);
        setSelectedGroup(Group)
    },[grpId])
    if (!selectedGroup) {
        return <div>Error:Group not Exists</div>;
    }
    const IconText = Getinitials(selectedGroup.name)
  return (
    <div className={styles.Content}>
        <div className={styles.grpTitle}>
            <div className={styles.grpIcon} style={{background:selectedGroup.color}} >{IconText}</div>
            <div className={styles.grpTitleText}>{selectedGroup.name}</div>
        </div>
        <div className={styles.notesContent}><GuiNotes/></div>
        <div className={styles.Inputbox}><Inputbox groupID={grpId}/></div>
    </div>
  )
}

export default Content