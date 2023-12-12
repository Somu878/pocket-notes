import React, { useState } from 'react'
import styles from './List.module.css'
import {useNavigate,Link } from 'react-router-dom'
import Getinitials from '../../helper functions/Getinitials'
function List({grpColour,grpName,selectedGroup,setselectedGroup}) {
  const navigate =useNavigate()
    const InitalsofGrpName= Getinitials(grpName)
  return (
    <div className={`${styles.list} ${selectedGroup === grpName ? styles.selected : ''}`}  onClick={()=>{
      setselectedGroup(grpName)
      navigate(`/content/${encodeURIComponent(grpName)}`)
    }}>
       <div className={styles.grpicon} style={{background:grpColour}}>{InitalsofGrpName}</div>
        <div className={styles.listgrpname}>{grpName}</div>
    </div>
  )
}

export default List