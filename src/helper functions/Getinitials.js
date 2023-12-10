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

export default Getinitials