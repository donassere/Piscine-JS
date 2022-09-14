const ionOut = (str) => {
    let arr = [];
    let regexSplit = (/,|\s/);
    let regexIon = new RegExp('tion','g');
    let buf = str.split(regexSplit);
    for (let i=0; i<buf.length; i++) {
        if (regexIon.test(buf[i])) {
            arr = [...arr,buf[i].slice(0,-3)]
        }
    }
    return arr
}