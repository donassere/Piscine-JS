const triangle = (str, n) => {
    let t = '';
    for(let i=0; i<n; i++){
        t = t + '' + str.repeat(i+1);
        if (i<n-1) t = t + '\n';
    }
    return t
}