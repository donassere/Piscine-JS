const multiply = (a, b) => {
    if (a === 0 ^ b === 0) return 0;
    const minus = (a < 0) ^ (b < 0) ? -1 : 1
    a = Math.abs(a)
    b = Math.abs(b)
    let rep = 0
    for (let i = 1; i <= b; i++) {
        rep = rep + a
    }
    if (minus === -1) rep = -rep;
    return rep
}

const divide = (a, b) => {
    if (a === 0) return 0;
    if (a === b) return 1;
    const minus = (a < 0) ^ (b < 0) ? -1 : 1
    a = Math.abs(a)
    b = Math.abs(b)
    let rep = 0
    while (a >= b) {
        a = a - b
        rep++
    }
    if (minus === -1) rep = -rep;
    return rep
}

const modulo = (a, b) => {
    if (a === 0 || a === b ) return 0;
    const minus = (a < 0) ? -1 : 1
    a = Math.abs(a)
    b = Math.abs(b)
    if (a < b) return a;
    let rep = b
    while (b <= a) {
        rep += b
        if (rep > a) return minus === -1 ? -(a - (rep - b)) : a - (rep - b);
    }
}