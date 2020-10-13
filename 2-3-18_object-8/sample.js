var person = {
    name: '鈴木一郎',
    age: 20,
    gender: 'male',
    address: {
        postcode: '100-0001',
        pref: '東京都',
        city: '千代田区'
    }
};
var postcode = person.address.postcode;
console.log(postcode); //=> 100-0001
