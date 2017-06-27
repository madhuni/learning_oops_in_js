//window.alert("Hello I am working!!!");

var car = {
    doors: 4,
    engine: 1,
    tyres: 4,
    name: "tata",
    fuel: "petrol"
};

//car.prototype = "Kansihka";

//console.log("Car name is : "+car.name);

var myCar = Object.create(car);
myCar.name = "Maruti Susuki";

//console.log(myCar);
//console.log("my new car is : "+myCar.name);
//console.log("my new car has tyres: "+myCar.tyres);
//console.log(myCar.run(myCar.name));

console.log(car);
var secondCar = Object.create(car);
secondCar.name = "BMW";

document.writeln("Hi I am Javascript and I am not Java :P");