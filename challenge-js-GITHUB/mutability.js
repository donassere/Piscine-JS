
const clone1= {
    name: 'Rick',
    age: 77,
    country: 'US',
}

const clone2= {
    name: 'Rick',
    age: 77,
    country: 'US',
}

const samePerson = person


person.country = 'FR';
person.age = person.age + 1;

Object.freeze(clone1)
Object.freeze(clone2)