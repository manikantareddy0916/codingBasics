const b = { a: 'kdsf', j: 'sldf', k:'man' };
const c = 'kdsf';

const filteredElements = Object.values(b).filter((key) => {
    console.log('j',key)
    console.log('jj',c)
    return c.includes(b[key]);
});

console.log(filteredElements);
