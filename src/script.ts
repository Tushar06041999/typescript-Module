console.log("Hello World");

const country="Bangladesh";
console.log(country);

let playerName;
console.log(playerName);
playerName='Tushar';
playerName=24;
console.log(playerName);
// function declare
function sum(a:number,b:number){

    const result=a*b;
    return result;
}
console.log(sum(5,6));

// Array Declearation with typescript

var mixed=["Tushar",80,true,{}];
mixed.push(56);
mixed.unshift(
    {
        name:"Tushar",
    }
)
console.log(mixed);

// object Decleare and Access

let person={
    name:"Tushar",
    age:23,
    university:"sdut",
}
console.log(person.university);

// type decleare
let a:number;
let b:string;
b="tushar"
a=50;
console.log(a+b);

// Multiple array Declearation

let D:(string | number)[]=[];
D.push("Tushar Chandra Mohanto");
console.log(D[0]);

// Array and object core Declearation
let P:{
    name:string,
    age:number,
    type:boolean
}
let t={
    name:"Mohanto Tushar Chandra",
    age:23,
    type:true
}
console.log(t.name);

// function Declearation 
let func:Function;
func=()=>{
    console.log("Hello Devlopers")
}

// more about Function

const myFunc=(a:string,b:string,c?:string)=>{
    console.log(`Hello ${a} ${b}`)
}
myFunc("Tushar","Chandra")

// More function Discribe
 
let myFunction:(x:number,y:number)=>number;
myFunction=(a:number,b:number)=>{
    return a+b;
}
console.log(myFunction(10,12));

// object Decleration and access

let studentInfo:(id:number, Details:{
named:string,
Roll:number,
passed:boolean


})=>void;

studentInfo:(id:1258749 ,Details:{
named:"Tushar",
Roll:123456,
passed:true
})=>{

}

// interface declearation bangla tutorial
console.log("Hello Programmers");

interface Rectangleoption{
      height:number
      width:number
}
function drawrectangle(options : Rectangleoption){
    let height=options.height;
    let width=options.width;
    return height+width;
}
var result=drawrectangle({height:10,width:10});
console.log(result);


// All About generics

const addId=<T>(obj:object)=>{
    let id=Math.floor(Math.random()*100);
    return {...obj,id};

};
let user=addId({
    name:"Mohanto",
    age:40,
    country:"bangladesh"
})
console.log(user.id)

// Enum Types declearation

enum Rtype{success,fAILURE,UNAUTHENTICATED,FORBIDDEN}
interface APIresponse<T>{
    status:string,
    type:Rtype,
    data:T
}
const response1:APIresponse<string>={
    status:"Good",
    type:Rtype.UNAUTHENTICATED,
    data:"excellernt"
}
console.log(response1);

// loop declearation
const number=Math.ceil(Math.random()*1000);
console.log(number);

// multiple object declearation with array

let student:{firstname:string,lastname:string,email:string,studentId:number};
const student1={
    firstname:"Tushar",
    lastname:"Mohanto",
    email:"tushar06041999@gmail.com",
    studentId:123654,
}
const student2={
    firstname:"Tonmoy",
    lastname:"Mohanto",
    email:"tonmoy06041999@gmail.com",
    studentId:123655,
}
const student3={
    firstname:"uzzal",
    lastname:"Mohanto",
    email:"uzzal06041999@gmail.com",
    studentId:1236545,
}
const studentData=[student1,student2,student3]
for(let i=0;i<studentData.length;i++){
    Datasend(studentData[i].email);
}
function Datasend(email:string){
    console.log("sending mail with", email);
}

// if else statement with conditional function

function provider(name9:string){
    if(!name9){
console.log("Please Provide your name")
    }else{
        console.log("Hello",name9)
    }
}
provider("tushar");
provider("root");
provider("");

// minimum and maximum number decleration

function totalNumber(min:number,max:number){
    const randomNum=Math.round(Math.random() * min + (max-min));
    return randomNum;
}
console.log(totalNumber(10,15));

// callback function declecation with variable 

const calculation=(number10:number)=>{
    for(let i=1;i<=10;i++){
        const result1=i*number10;
        console.log(result1)
    }
}
calculation(10);

// constructor method in typescript

class Student{
    religion: string;
    id: number;
    fname: string;
    constructor(fname:string,Creligion:string,Sid:number){

        this.fname=fname;
        this.religion=Creligion;
        this.id=Sid;


    }
}
const studentInform=new Student("Tushar","Hindu",23654);
const studentInform1=new Student("Chandra","Hindu",23655);
const studentInform2=new Student("Mohanto","Hindu",23656);
const studentInform3=new Student("Roy","Hindu",23657);
console.log(studentInform);
console.log(studentInform1);
console.log(studentInform2);
console.log(studentInform3);


// Decleare array to maximum and minimum Number in Here

const khs=[520,564,258,78,369,963,321];
const Balu=[620,564,158,78,69,1163,221];
const pahar=[20,364,358,78,469,863,121];
const Nkd=[1120,1164,258,78,1069,963,221];

let maximumNum=Math.max(...khs,...Balu,...pahar,...Nkd);
console.log(maximumNum);