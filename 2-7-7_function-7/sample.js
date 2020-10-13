function add(a, b) {
    var result = a + b;
    return result;
}

var result1 = add(1, 1);
console.log(result1); //=> 2

var result2 = add(10, 20);
console.log(result2); //=> 30

var result3 = add(result1, result2);
console.log(result3); //=> 32
