const pyramid = (str, n) => {
    let p = '';
    let line = 1;
    let strN = 1;
    let strL = str.length;
    for (let i = 0; i < n -1; i++) strN += 2;
    let max = strL * strN
    let corr = strL % 2 !== 0;
    let space = 0
    if (corr) {
        space = (max-strL)/2
    } else {
        space = (max/2) - strL + 1
    }
    for(let i=0; i<n; i++){
        p = p + '' + " ".repeat(space);
        p = p + '' + str.repeat(line);
        if (i<n-1) p = p + '\n';
        line +=2;
        space -= strL;
    }
    return p
}