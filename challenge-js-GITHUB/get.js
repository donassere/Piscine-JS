const get = (src, path) => {
    let s = {};
    let keys = path.split(".");
    for (let i=0; i < keys.length; i++ ){
        let k = keys[i];
        s = src[k];
        if (s === undefined) return undefined;
        src = s 
    } 
    return s
}
