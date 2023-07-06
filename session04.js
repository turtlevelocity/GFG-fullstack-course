// function printMyName(name) {
//   console.log(name);
// }

// printMyName("Shubham")

// ---------- Anonymous function---

// function() {
//   console.log("Shubham")
// }

// const printMyName = function(name){
//   console.log(name)
// }

// printMyName("shubham")

// ----- Arrow Fns---
// const printMyName = () => console.log("array fn")

// printMyName("Arrow fn")

// what is the real difference

// function printMyName(){
//   console.log("normal fn")
//   console.log(this)
// }

// printMyName()

// const person = {
//   name: "shubham",
//   age: 27,
//   printName: function(){
//     console.log(this)
//   }
// }

// person.printName()

// if it is a normal fn -> this -> window / global object
// but if a fn is inside an object -> this -> object which is calling the fn

// function whatisThis(){
//   console.log(this);
// }

// whatisThis();

// const obj = {
//   name: 'Object',
// }

// obj.myThisFuntion = whatisThis;

// obj.myThisFuntion()

// tags = ['a', 'b']
// const video = {
//   title: "video",
//   tags: [1,2,3,4,5],
//   showTags(){
//     this.tags.forEach(tag => {
//       console.log(tag);
//       console.log(this.title);
//     })
//   }
   
// }


// video.showTags()

// console.log("Hi");
// setTimeout(() => {
//   console.log("there");
// }, 0);

// console.log("JSConfig")
// console.log("JSConfig")
// console.log("JSConfig")
// console.log("JSConfig")
// console.log("JSConfig")
// console.log("JSConfig")

// _-----scope--
// 1. global
// 2. functional scope
// 3. block scope

// var globalVar = "Hello there";

// function printVar(){
//   let letVar = "letVar";
//   // console.log(fnVar);
//   // console.log(letVar)
//   {
//     console.log(letVar)
//   }
  
// }
// // console.log(fnVar);
// printVar()

// function insideFn() {
//   console.log(fnVar)
// } 


// insideFn()

// {
//   var varName = "local scope";
// }

// console.log(varName)

//-------Hoisting--------

// var x;
// console.log(x);
// x = 10;

// function parentFn(){
//   let varName = "abcd";
//   console.log(childFnVar);
//   function childFn(){
//     let childFnVar = "child";
//     console.log(varName);
//   }
// }

// --- High Order function

function fn1(x, fn2) {
  return fn2(x);
}

function fn2(y) {
  let square = y*y;
  return square;
}

let returnFn = fn1(9, fn2)
console.log(returnFn)
