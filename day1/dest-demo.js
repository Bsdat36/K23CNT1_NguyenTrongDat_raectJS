
var array = [11,22,33,44];
var[x,y]=array;
console.log("x=",x);
console.log("y=",y);

var [a,b,c] = array;
console.log("a=",a)
console.log("b=",b)
console.log("c=",c)

//object
const person = {
    name: "Trọng Đạt",
    age: 21,
    city: "Đại học Nguyễn Trãi"
};
console.log(person,name);
console.log(person,age);

const {name, age, city } = person;
console.log(name);
console.log(age);
console.log(city);