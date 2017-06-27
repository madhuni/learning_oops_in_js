/* Functional Programming in Javascript */

function mapForEachFunction(arr, fn) {
    var newArray = [];
    for(var i=0; i<arr.length; i++) {
        newArray.push(
            fn(arr[i])
        );
    }
    
    return newArray;
}

var arr1 = [1,2,3];

var arr2 = mapForEachFunction(arr1, function(item) {
    return item * 2;
});

console.log(arr1)
console.log(arr2);

var arr3 = mapForEachFunction(arr1, function(item) {
    return item > 1;
});

console.log(arr3);

var checkPastLimiter = function(limiter, item) {
    return item > limiter;
};

var arr4 = mapForEachFunction(arr1, checkPastLimiter.bind(this, 0));
console.log(arr4);

var simplifiedFun = function(val) {
   return checkPastLimiter.bind(this, val);
};

var arr5 = mapForEachFunction(arr1, simplifiedFun(1));
console.log(arr5);

 /* We should try to keep this thing in mind that the details which the small small
 functions use to have, shouldn't mutate (change) the values 
 */