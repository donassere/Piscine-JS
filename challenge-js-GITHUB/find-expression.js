let rep = '1'

const findExpression = (num) => {
    if (num % 2 !== 0) return undefined;
    return fe(num,1,'1')
}

const fe = (num, start, buf) => {
    if (start > num) {
        return;
    } else if (start === num) {
        rep = buf;
    } else {
        fe(num,start * 2, buf + ' ' + mul2);
        fe(num,start + 4, buf + ' ' + add4);
    }
    return rep
}