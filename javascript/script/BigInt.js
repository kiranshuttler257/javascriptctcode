// BigInt
// 2^53-1=9007199254740991
console.log(9007199254740991+1); // correct odd
console.log(9007199254740991+2);  // worng  even
console.log(9007199254740991+3);  //correct  odd



let limit=9007199254740991n;

console.log(limit+1n); 
console.log(9007199254740991n+2n);  
console.log(9007199254740991n+3n);  

console.log(typeof limit);

// eg

let Bignum=12235678910n;
Bignum=Bignum+2024n;
console.log(Bignum);


