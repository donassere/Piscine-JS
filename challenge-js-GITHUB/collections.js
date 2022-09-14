const arrToSet = (arr) => new Set(arr);
const arrToStr = (arr) => arr.join('');
const setToArr = (set) => Array.from(set);
const setToStr = (set) => Array.from(set).join('');
const strToArr = (str) => str.split('');
const strToSet = (str) => new Set(str);
const mapToObj = (map) => Object.fromEntries(map);
const objToArr = (obj) => Object.values(obj);
const objToMap = (obj) => new Map(Object.entries(obj));
const arrToObj = (arr) => Object.assign({}, arr);
const strToObj = (str) => Object.fromEntries(Object.entries(str));


const superTypeOf = (x) => {
    if (x === null) return 'null';
    if (x === undefined) return 'undefined';
    if (typeof x === 'function') return 'Function';
    if (typeof x === 'string') return 'String';
    if (typeof x === 'number') return 'Number';
    if (typeof x === 'object' && Array.isArray(x)) return 'Array';
    if (x instanceof Set) return  'Set';
    if (x instanceof Map) return 'Map';
    if (typeof x === 'object') return 'Object';
    return 'undefined';
};