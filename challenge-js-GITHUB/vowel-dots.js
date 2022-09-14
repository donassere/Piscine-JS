const vowels = /[aeiouAEIOU]/;
const vowelDots = (str) => {
    for(let i=0; i < str.length; i++){
        if(vowels.test(str[i])){
            str = [str.slice(0, i+1 ),str.slice([i+1])].join('.');
        }
    }
    return str    
}