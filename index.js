// function whatisThis(){
//   console.log(this);
// }

// const person = {
//   name: "Shubham",
//   age: 28,
//   myThis: function(){
//     console.log(this);
//   }
// }

// whatisThis()
// person.myThis()

// const video = {
//   title: 'title',
//   tags: ['a', 'b', 'c'],
//   showTags(){
//     this.tags.forEach((tag) => {
//       console.log(this.title+ " " +tag)
//     })
//   }
// }

// video.showTags()






// const obj = {
//   age: 12,
//   fn: () => {
//     let name = "Shubham"
//     // console.log("object: "+this)
//     return this;
//   }
// };

// const obj2 = {
//   age: 12,
//   fn: function(){
//     // console.log("object2: "+this)
//     return this;
//   }
// }

// const obj3  = {
//   name: "Shubham",
//   fn: obj.fn,
//   fn2: obj2.fn
// }

// console.log(obj.fn())
// console.log(obj2.fn())
// console.log(obj3.fn())
// console.log(obj3.fn2())

document.getElementById("button-id").addEventListener("click", function(){
  console.log(this.id);
})