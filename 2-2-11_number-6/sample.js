var x = 10;
var y = 3;
var z = 5;

// 掛け算のほうが優先される
console.log(x + y * z); //=> 25

// ()内が優先される
console.log((x + y) * z); //=> 65
