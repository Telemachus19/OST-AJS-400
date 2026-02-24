//? Type Annotation VS Type Inference
let x: number | string; //union
x = 20;
x = "";
let y = "ali";
// y=20
let namee: any; //~ Act as js syntax
namee = "";
namee = 251;
let arr1: number[] | number = [1, 2, 3, 5];
arr1 = 20;
let arr2: (string | number)[] = ["a", 1]; // Tuple
let arr3: string[] | number[] = ["a"];
let arr4: { id: number; name: string }[] = [{ id: 1, name: "" }];

interface IPerson {
  id: number;
  address: string;
}
let arr5: IPerson[] = [{ id: 1, address: "" }];
let arr6: any[] = []; //~ act as js array
let arr7: [number, string, string, boolean] = [1, "", "", true];
let arr8: Array<number>; //* generic
let arr9: number[];

// function Sum(x:number,y:number,z:number=1):number{
//     return x+y+z;
// }

function Sum(x: number, y: number, z?: number): number {
  if (z === undefined) return x + y;
  return x + y + z;
}
Sum(2, 3);

function Hello(): void {
  console.log("hello");
}

function Add(...nums: number[]): number {
  let sum = 0;
  //for loop
  return sum;
}

Add();

//? Enum : way to organize a collection of related data
enum Colors {
  red,
  green,
  blue,
}
let bgColor: Colors = Colors.blue;

//? Generics
function genericFun<T>(param: T): T[] {
  let arr: T[] = [];
  arr.push(param);
  return arr;
}

genericFun<number>(1);
genericFun<string>("");

//^ OOP [Inheritance , polymorphism , encapsulation , abstraction]

class Car {
  private motorV: number; //? encapsulation
  protected chasisNum: number;
  public wheelCount: number;

  constructor(
    chasisNum: number,
    motor: number,
    wheelCount: number,
    public color?: string,  // polymorphism [overloading]
  ) {
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
  Display():number{
    return this.chasisNum
  }
}

let c1 = new Car(1, 2, 3, "");

class BMW extends Car {
    public Engine:number
  constructor(
    chasisNum: number,
    motor: number,
    wheelCount: number,
     color: string,
     public version:number,
     engine:number
  ) {
    super(chasisNum, motor, wheelCount, color);
    this.Engine = engine
  }

  Display(): number {   // polymorphism [override]
      return this.Engine
  }
}

abstract class Person{

}
// let p1 = new Person()

// ts allow multi-level inheritance but not allow multiple inheritance

interface Human1{
    id:number;
    name?:string;
    sayHi?:()=>string
}

interface Human2{
    address?:string;
    age:number
}

class Male implements Human1,Human2{
    id:number = 2;
    age:number = 4;
    constructor(){
       
    }
}

// class Malee extends Person implements Human1{

// }

let obj:Human1={
    id:1,
    name:"",
    sayHi(){
        return ""
    },
  
}

//? Types in ts 
type Employee={
  id:number,
  name:string
}
// type Employee={

// }
let E1:Employee = {
  id:1,
  name:"ali"
}
interface Info{id:number}
interface Info{name:string}
let infoObj:Info = {
  id:1,
  name:""
}

type Account = {
  userName:string,
  hasPremission:boolean
}
type Role = "admin"|"user";

const account :Record<Role,Account> = {
  admin:{userName:"ali",hasPremission:true},
  user:{userName:"omar",hasPremission:false},
}

type AnotherAccount = {
  userName:string,
  userAge:number,
  userAddress:string
}

type userAccount = Pick<AnotherAccount,"userName"|"userAddress">
const userInfo : userAccount = {
  userName:"omar",
  userAddress:"alex"
}

type clientAccount = Omit<AnotherAccount,"userName">
const clientInfo :clientAccount = {
  userAge:55,
  userAddress:""
}

// type Acountt= AnotherAccount & Account

const partialAccount : Partial<AnotherAccount> ={
  userAddress:""
}

type props = {
  x?:number,
  y?:number,
}

// const axes:Required<props>={
//   x:1,
//   y:2
// }
const axes:Readonly<props>={
  x:1,
  y:2
}
// axes.x = 5;


//& nullish operator --> null or undefined
let userName = "ali";
let defaultName = "user"
let sendedName =  userName ?? defaultName
//& logical or operator --> falsy values 
let userAge = 25;
userAge ||=10;

//& definite assigment assertion !
let nameee!:string;
console.log(nameee);


// unknown
let value:unknown="hello";
 (value as string).length //? type assertion

// never --> error fun // infinite loop
function ThrowError(msg:string):never{
  throw new Error(msg)
}
function InfiniteLoop():never{
  while(true){
    console.log("working forever");
  }
}




