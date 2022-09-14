const letterSpaceNumber = (str) =>{
    const regex = /[\w][\s][\d]([\W]|$)/gm;
    let arr = str.match(regex);
    if (arr === null) return [];
    for(let i=0; i<arr.length; i++){
        if (arr[i].length === 4) arr[i] = arr[i].slice(0,-1);
        if (arr[i] === '') arr.splice(i,1);
    }
    return arr;
}  