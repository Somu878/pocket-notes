import React from 'react'
import Notelist from '../components/noteslist/Notelist'
import Content from '../components/content/Content'
import styles from './contentPage.module.css'
function ContentPage() {
  return (
    <div style={{display:'flex'}}>
       <div className={styles.noteslistcomponent}> <Notelist/></div>
        <Content/>
    </div>
  )
}
export default ContentPage