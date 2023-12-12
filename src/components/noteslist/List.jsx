import React, { useState } from 'react'
import styles from './List.module.css'
import {useNavigate,Link } from 'react-router-dom'
import Getinitials from '../../helper functions/Getinitials'
function List({grpColour,grpName,grpId,selectedGroup,setselectedGroup}) {
  const navigate =useNavigate()
    const InitalsofGrpName= Getinitials(grpName)
  return (
    <div className={`${styles.list} ${selectedGroup === grpId ? styles.selected : ''}`}  onClick={()=>{
      setselectedGroup(grpId)
      navigate(`/content/${grpId}`)
    }}>
       <div className={styles.grpicon} style={{background:grpColour}}>{InitalsofGrpName}</div>
        <div className={styles.listgrpname}>{grpName}</div>
    </div>
  )
}

export default List