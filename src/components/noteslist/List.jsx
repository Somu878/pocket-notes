import React from 'react'
import styles from './List.module.css'
function List({grpColour,grpName}) {
    const Getinitials=(grpname)=>{
        const words = grpname.trim().split(' ')
        if (words.length>=2){
            const firstInitial = words[0][0].toUpperCase()
            const secondInitial = words[1][0].toUpperCase()
            return `${firstInitial}${secondInitial}`
        }
        else if(words.length<2){
            return words[0].slice(0,2).toUpperCase()
        }
        return 'NA'
    }
    const InitalsofGrpName= Getinitials(grpName)
  return (
    <div className={styles.list}>
       <div className={styles.grpicon} style={{background:grpColour}}>{InitalsofGrpName}</div>
        <div className={styles.listgrpname}>{grpName}</div>
    </div>
  )
}

export default List