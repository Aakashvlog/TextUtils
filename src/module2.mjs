let a = '    hello  world';
let b = a.split(' ');
let c = b.filter((value) => value !== '');

console.log(c.length);
