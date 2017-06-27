var jasonValue = JSON.parse('{ "name":"Kanishka", "age":24 , "address": { "state": "UP", "city":"mbd"} }');

console.log(jasonValue);

var newJasonValue = JSON.parse('{"friend":{"id":1004570,"first_name":"Ankit","last_name":"Kumar","email":"ankime@gmail.com","registration_status":"confirmed","picture":{"small":"https:\/\/graph.facebook.com\/100000994423460\/picture?type=square","medium":"https:\/\/graph.facebook.com\/100000994423460\/picture?type=normal","large":"https:\/\/graph.facebook.com\/100000994423460\/picture?type=large"},"balance":[{"currency_code":"INR","amount":"-259.66"}],"groups":[{"group_id":3141642,"balance":[{"currency_code":"INR","amount":"-259.66"}]},{"group_id":0,"balance":[]}],"updated_at":"2017-03-26T14:45:28Z"}}');

console.log(newJasonValue);

var obj = {
    firstName: "Kanishka",
    lastName: "madhuni",
    age: 24,
    isAWebdeveloper: true
};

console.log(JSON.stringify(obj));