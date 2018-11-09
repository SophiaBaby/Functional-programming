//1.多重判断时使用 Array.includes
const fruits = [
    { name: 'apple', color: 'red' },
    { name: 'strawberry', color: 'red' },
    { name: 'banana', color: 'yellow' },
    { name: 'pineapple', color: 'yellow' },
    { name: 'grape', color: 'purple' },
    { name: 'plum', color: 'purple' }
];

function test(color) {
    return fruits.filter(f => f.color == color);
}
console.log(test('red'))