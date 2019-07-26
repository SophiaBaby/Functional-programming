//字符串转buffer
const buf = Buffer.from('Node.js 技术栈', 'UTF-8');

console.log(buf); // <Buffer 4e 6f 64 65 2e 6a 73 20 e6 8a 80 e6 9c af e6 a0 88>
console.log(buf.length); // 17




//buffer转字符串
const buf1 = Buffer.from('Node.js 技术栈', 'UTF-8');

console.log(buf1); // <Buffer 4e 6f 64 65 2e 6a 73 20 e6 8a 80 e6 9c af e6 a0 88>
console.log(buf1.length); // 17
console.log(buf1.toString('UTF-8', 0, 11)); // Node.js �


