//? Type Annotation VS Type Inference
let x; //union
x = 20;
x = "";
let y = "ali";
// y=20
let namee; //~ Act as js syntax
namee = "";
namee = 251;
let arr1 = [1, 2, 3, 5];
arr1 = 20;
let arr2 = ["a", 1]; // Tuple
let arr3 = ["a"];
let arr4 = [{ id: 1, name: "" }];
let arr5 = [{ id: 1, address: "" }];
let arr6 = []; //~ act as js array
let arr7 = [1, "", "", true];
let arr8; //* generic
let arr9;
// function Sum(x:number,y:number,z:number=1):number{
//     return x+y+z;
// }
function Sum(x, y, z) {
    if (z === undefined)
        return x + y;
    return x + y + z;
}
Sum(2, 3);
function Hello() {
    console.log("hello");
}
function Add(...nums) {
    let sum = 0;
    //for loop
    return sum;
}
Add();
//? Enum : way to organize a collection of related data
var Colors;
(function (Colors) {
    Colors[Colors["red"] = 0] = "red";
    Colors[Colors["green"] = 1] = "green";
    Colors[Colors["blue"] = 2] = "blue";
})(Colors || (Colors = {}));
let bgColor = Colors.blue;
//? Generics
function genericFun(param) {
    let arr = [];
    arr.push(param);
    return arr;
}
genericFun(1);
genericFun("");
//^ OOP [Inheritance , polymorphism , encapsulation , abstraction]
class Car {
    constructor(chasisNum, motor, wheelCount, color) {
        this.color = color;
        this.chasisNum = chasisNum;
        this.motorV = motor;
        this.wheelCount = wheelCount;
    }
    get Motor() {
        return this.motorV;
    }
    set Motor(value) {
        this.motorV = value;
    }
    Display() {
        return this.chasisNum;
    }
}
let c1 = new Car(1, 2, 3, "");
class BMW extends Car {
    constructor(chasisNum, motor, wheelCount, color, version, engine) {
        super(chasisNum, motor, wheelCount, color);
        this.version = version;
        this.Engine = engine;
    }
    Display() {
        return this.Engine;
    }
}
class Person {
}
class Male {
    constructor() {
        this.id = 2;
        this.age = 4;
    }
}
// class Malee extends Person implements Human1{
// }
let obj = {
    id: 1,
    name: "",
    sayHi() {
        return "";
    },
};
// type Employee={
// }
let E1 = {
    id: 1,
    name: "ali"
};
let infoObj = {
    id: 1,
    name: ""
};
const account = {
    admin: { userName: "ali", hasPremission: true },
    user: { userName: "omar", hasPremission: false },
};
const userInfo = {
    userName: "omar",
    userAddress: "alex"
};
const clientInfo = {
    userAge: 55,
    userAddress: ""
};
// type Acountt= AnotherAccount & Account
const partialAccount = {
    userAddress: ""
};
// const axes:Required<props>={
//   x:1,
//   y:2
// }
const axes = {
    x: 1,
    y: 2
};
// axes.x = 5;
//& nullish operator --> null or undefined
let userName = "ali";
let defaultName = "user";
let sendedName = userName !== null && userName !== void 0 ? userName : defaultName;
//& logical or operator --> falsy values 
let userAge = 25;
userAge || (userAge = 10);
//& definite assigment assertion !
let nameee;
console.log(nameee);
// unknown
let value = "hello";
value.length; //? type assertion
// never --> error fun // infinite loop
function ThrowError(msg) {
    throw new Error(msg);
}
function InfiniteLoop() {
    while (true) {
        console.log("working forever");
    }
}
