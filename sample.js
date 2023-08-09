// let y;
// console.log(typeof y)
// y=12
// console.log(typeof y)
// y="abby"
// console.log(typeof y)
// // y=(15,6,7,8)
// // console.log(typeof y)
// let a="red";
// let b="Blue";
// let c=a;
// c=a;
// a=b;
// b=c
// console.log(a,b)

// object//
// Array//-index,refrences
// Function //
// let Student ={
//     Name:"John",
//     age:40,
//     Country:"Nigeria",
//     Email:"archibong@gmail.com",
//     Address:"15 ikeja street"
// }
// console.log( Student)
// let Student2 =["abigail,chris,emeka"]
// console.log(student2)
// function greet( name){
//     console.log("hello" + name)
// }

// Forloop
// for(Declaration;ConditionRule;increment/decrement)
// for(let i=0; i>4; i++){
// console.log(i)
// }
// 

//while For
// let i=10
// while( i < 4){
//     console.log(i);
//     i++
// }
// do{
//     console.log(i)
//     i++
//    while(i < 4);
// }


//  for each loop
//  let pro = [1,2,3,4,5,6];
// pro.forEach(x => {
//     console.log(x*2)
// });

// for of loop
// let colour=["red", "green", "blue"]
// for colour(let (colour) of (colour));{
//     console.log(colour)
// }


// function numb(g,h){
//  if(g > h){
//     console.log(g);
//  }
//  if(h > g){
//     console.log(h);
//  }
//  return(0);
// }


// console.log (numb(18,18));
// fizzbuzz Algorithem
// divisible by 3 = fizz
// divisible by 5 = buzz
// divisible by 3 and 5 = fizzbuzz
// not a number = "not a number"

// console.log(fizzbuzz(15));


// function fizzbuzz (numb){
//    if (numb % 3 === 0 && numb % 5 === 0)
//    if (typeof numb !== "number")
//    return ("not a number")

//    if (numb % 3 === 0 && numb % 5 === 0){
//       return ("fizzbuzz")
//    }
//    if(numb % 3 === 0){
//       return("fizz")
//    }
//    if (numb % 5 === 0){
//       return("buzz")
//    }
//    return (numb)
// };

// let fizzbuzz2 = function(){
//    if (numb % 3 === 0 && numb % 5 === 0)
//    if (typeof numb !== "number")
//    return ("not a number")

//    if (numb % 3 === 0 && numb % 5 === 0){
//       return ("fizzbuzz")
//    }
//    if(numb % 3 === 0){
//       return("fizz")
//    }
//    if (numb % 5 === 0){
//       return("buzz")
//    }
//    return (numb)

// }

// console.log(children);

// let children = [1,2,4]

// isFinite

// Date.now()
// const date =new Date("2023-08-05");

// console.log(date)
// console.log(Date.now())

// let apptime = Date.now();
// let newdate = Date(apptime);
// // console.log(newdate)
// console.log(newdate(Date.now()))

// console.log(Math.max(1,2,3,6,9,10,167))

// let str = "this is the string value"
// console.log(str.length)

// let str = "hello, my name is abby"
// console.log (str.toUpperCase());

// let string1 ="GOOD GIRL"
// let string2 = string1.replace("GOOD GIRL","Good Girl")
// console.log(string2)

//  console.log(Math.random())
//  console.log(Math.floor())

// // function inside an object is called a method

// // object oriented programming
// (factory function)
// (constructor function)
//object literal
// let children={
// girls: 5,
// boys: 8,
// share: function(){//method
//    console.log("share")
// }
// };
// children.girls.share();

// factory functions
// function createcircle (){
//    circle = {
//       radius: 1,
//       location: {

//       }
//    }
// }

function add(a, b) {
    
    return a + b;
}
const result = add(5, 3);
 // Here, 5 is assigned to 'a' and 3 is assigned to 'b'
function multiply(x, y) {
    return x * y;
}

const product = multiply(4, 7); 
// 'x' is 4, 'y' is 7 within the function
