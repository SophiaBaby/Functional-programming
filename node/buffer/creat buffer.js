const b1 = Buffer.from('10');
const b2 = Buffer.from('10', 'utf8');
const b3 = Buffer.from([10]);
const b4 = Buffer.from(b3);

console.log(b1, b2, b3, b4);


const bAlloc1 = Buffer.alloc(10); // 创建一个大小为 10 个字节的缓冲区

console.log(bAlloc1);


const bAllocUnsafe1 = Buffer.allocUnsafe(10); //不安全 可能泄漏旧的数据

console.log(bAllocUnsafe1);
