const nasa = (N) => {
    let str = ''
    if (N === 0) {
        return
    }
    for (let i= 1; i<= N; i++) {
        if (i < 3) {
            str = str + '' + i
            if (i < N) str = str + ' ';
            continue
        }
        let d3 = i % 3
        let d5 = i % 5
        if (d3 === 0 && d5 === 0) {
            str = str + '' + 'NASA'
        } else if (d3 === 0) {
            str = str + '' + 'NA'
        } else if (d5 === 0) {
            str = str + '' + 'SA'
        } else {
            str = str + '' + i
        }
        if (i < N) str = str + ' ';
    }
    return str
}