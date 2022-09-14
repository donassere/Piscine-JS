const reverse = (strOarr) => {
    if (typeof strOarr === 'object' && Array.isArray(strOarr)){
        let newarr = [];
        for(let i=strOarr.length-1; i>=0; i--){
            newarr.push(strOarr[i]);
        }
        return newarr;
    }
    if (typeof strOarr === 'string'){
        let newstr = '';
        for(let i=strOarr.length-1; i>=0; i--){
            newstr += strOarr[i];
        }
        return newstr;
    }
    return undefined;
}
    

