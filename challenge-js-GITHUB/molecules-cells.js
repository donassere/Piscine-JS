const DNA = (str) => {
    if (str === '') return ''
    let dna = ''
    for (let i=0; i<str.length; i++) {
        if (str[i] === 'C'){
            dna = [dna,'G'].join('')
        } else if (str[i] === 'G') {
            dna = [dna,'C'].join('')
        } else if (str[i] === 'A') {
            dna = [dna,'T'].join('')
        } else if (str[i] === 'U') {
            dna = [dna,'A'].join('')
        }
    }
    return dna
}

const RNA = (str) => {
    if (str === '') return ''
    let rna = ''
    for (let i=0; i<str.length; i++) {
        if (str[i] === 'G'){
            rna = [rna,'C'].join('')
        } else if (str[i] === 'C') {
            rna = [rna,'G'].join('')
        } else if (str[i] === 'T') {
            rna = [rna,'A'].join('')
        } else if (str[i] === 'A') {
            rna = [rna,'U'].join('')
        }
    }
    return rna
}