// Number Challenge
let a = 1_00, 
    b = 2_00.5, 
    c = 1e2, 
    d = 2.4;

// Find Smallest Number In All Variables and Return Integer
console.log(+(Math.min(a, b, c, d).toFixed(0)));

// Use Variable a + d One Time To Get The Needed Output
console.log(Math.pow(a, Math.floor(d))); //10000

//Get Integer "2" From d Variable With 4 Methods
console.log(Math.round(d))//2
console.log(Math.floor(2))//2
console.log(+d.toFixed(0))//2
console.log(parseInt(d))//2

//Use Variable b + d To Get This Value
console.log((Math.floor(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
console.log(Math.ceil((Math.floor(b) / Math.ceil(d)).toFixed(1))); // 67 => Number
