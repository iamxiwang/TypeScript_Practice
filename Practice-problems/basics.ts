// Declare variables for diffrent datatypes
// translate javascript code in typescript

// let course = "TypeScript"

/*--------------------write code here--------------------*/

let course: string = 'TypeScript'



// -----------------Uncomment testcases----------------------

console.log("course",course)   //course TypeScript

// --------------------------------------------------------------------------------------------------
// let day = 3
/*--------------------write code here--------------------*/
let day:number=3




// -----------------Uncomment testcases----------------------

console.log("day",day) //day 3
// ------------------------------------------------------------------------------------------------------

// let isPublic = true

/*--------------------write code here--------------------*/


let isPublic:boolean = true


// -----------------Uncomment testcases----------------------

console.log("isPublic",isPublic)  //isPublic true

// -----------------------------------------------------------------------------------------------------
// let set = new Set()
/*--------------------write code here--------------------*/
let set = new Set()




// -----------------Uncomment testcases----------------------
console.log(set)
// -----------------------------------------------------------------------------------------------------

// let obj = {name:"Max"}
/*--------------------write code here--------------------*/
let obj:{name:string} ={name:'Max'}




// -----------------Uncomment testcases----------------------
console.log(obj)

// --------------------------------------------------------------------------------------------------------------

//  let nums = [1,2,3,4]
/*--------------------write code here--------------------*/

let nums:number[] = [1,2,3,4]



// -----------------Uncomment testcases----------------------

console.log("nums",nums) //nums [ 1, 2, 3, 4 ]


// --------------------------------------------------------------------------------------------------------------

// let strs = ["a","b","c","d"]

/*--------------------write code here--------------------*/


let strs:string[] = ['a','b','c','d']


// -----------------Uncomment testcases----------------------
console.log("strs",strs) //strs [ 'a', 'b', 'c', 'd' ]

// ---------------------------------------------------------------------------------------------------------------


// let arr = [1,2,"a",[],{},true]

/*--------------------write code here--------------------*/

let arr:any[] = [1,2,"a",[],{},true]




// -----------------Uncomment testcases----------------------
console.log("mixArr",arr)  //mixArr [ 1, 2, 'a', [], {}, true ]

// --------------------------------------------------------------------------------------------------------------

// declare tuple for following values. Tuple means couple of types of values in an arr
// let tup = [1,"Tom"]

/*--------------------write code here--------------------*/
let tup:[number,string]= [1,"Tom"]




// -----------------Uncomment testcases----------------------
console.log("tuple",tup)   //tuple [ 1, 'Tom' ]

// ------------------------------------------------------------------------------------------------------------


// declare Enum for following variables. Enum is group of constant variables

// const small = 1
// const medium = 2
// const large =3
/*--------------------write code here--------------------*/
enum Size {
       small = 1,
       medium = 2,
       large =3
}




// -----------------Uncomment testcases----------------------
console.log("Enum Size",Size)       //  Enum Size {'1': 'small', '2': 'medium',  '3': 'large',  small: 1,  medium: 2,  large: 3}
// ----------------------------------------------------------------------------
// convet Javascript function is typescript

// function print(name){
//
//     return `Hello ${name}
// }


/*--------------------write code here--------------------*/


const print1 = (name:string):string => {
       return `Hello ${name}`
}


// -----------------Uncomment testcases----------------------

console.log(print1("Max"))   //Hello Max

// --------------------------------------------------------------------------------------------------
// Convert javascript class in typeScript

// class Cat{
//     constructor(name,age,color){
//         this.name = name
//         this.age = age
//         this.color = color
//     }

//     myCatData(){
       // return `My cat name is ${this.name}, she is ${this.age} yr old and she is ${this.color}`
//     }
// }
/*--------------------write code here--------------------*/

class Cat{
       public name:string;
       public age:number;
       public color:string
       constructor(name:string,age:number,color:string){
              this.name = name
              this.age = age
              this.color = color
       }

       myCatData(){
              return `My cat name is ${this.name}, she is ${this.age} yr old and she is ${this.color}`
       }
}



// -----------------Uncomment testcases----------------------


let c1 = new Cat("Fluffy",2,'white')
console.log(c1.myCatData())   //My cat name is Fluffy, she is 2 yr old and she is black & white
