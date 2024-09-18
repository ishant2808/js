// function modi(parameters)
// {
//     console.log("Vah kya scene hai..!!")

//     return `Me apse kuch maang sakta hu kya..!!`
// } 
// modi()
// let result=modi()
// console.log(result)

// function raju(){
//     console.log("Ladki ka chakkar babu bhaiya...!")

//     return `Me apse kuch maang sakta hu kya..!!`

// }

// let result=raju();
// console.log(result)


// const findSum=function (a,b)
//          {
//             const sum=a+b;
//             console.log(`Sum is ${sum}`)
//             return sum;
//          }

// // console.log(`Returned Value is: ${sum(2,2)}`)
// console.log("Returned Value is:",findSum(3,2))







// var call=(function (){
//     const res=confirm("Do you want to share your location?")
//     return res;
// })()

// console.log(call)








//HOF
// function generic(task,name){
//    task(name)
// }

// //CBF
// function printUserName(userName){
//     console.log(`User Name is: ${userName}`)
// }

// generic(printUserName,"Chombu")


/*const checkPrime=a=>{
    let count=0;
    for(let i=2;i<=Math.sqrt(a/2);i++){
        if(a%i===0){
            count++;
        }
    }
    if(count===0){
        return `Prime Number: ${a}`
    }
    else{
        return `Not a Prime Number: ${a}`
    }
}
console.log(checkPrime(10))*/




//Creating array by using square[] brackets and literals.

// let arr=[] //empty array
// let arr1=[1,2,3,4] //array with literals
// console.log(arr1)

//using new keyword and Array() constructor (best way)
// const arr=new Array()
// console.log(arr)

// const arr1=new Array(10,20,30,40,50)
// console.log(arr1)

//functions inside array
// const myArr=[function sum(a,b){return a+b},
//              function sub(a,b){return a-b},
//              function prod(a,b){return a*b},
//              (a,b)=>{return a+b}
//             ]         
// console.log(myArr[0](2,3))

//prototype methods of array

//1.push()  //add elements at last
// const arr=[10,20,30,4,50]
// console.log(arr)
// arr.push(60)
// console.log(arr)
// let res=arr.push(70) //it returns the updated length of the array
// console.log(res)

//2.pop() //it returns last single value of array
// const arr1=[1,2,3,4,5,6]
// console.log(arr1)
// let res=arr1.pop()  //pop returns the last removed element
// console.log(arr1)

//3.Unshift() //it adds the element at beginning of the array
//it returns the updated length of the array after adding
//it can add more that one values at a time

//4.shift() it removes the element from start

// const movies=["Race-3","Dhamal","Php"]
// console.log(movies)
// movies.shift() //it returns the removed element
// console.log(movies)

//5.splice() method
// splice(a,b,c)
// where 
//  a=starting index
//  b=no of elements to be deleted
//  c=elements to be added

// Task:-
// i)Insertion
// ii)Deletion
// iii)Updation

// Insertion:-
// const arr=[1,2,5,6]
// console.log(arr)
// arr.splice(2,0,3,4)
// console.log(arr)

//Deletion:-
// const arr=[1,2,3,50,60,4]
// console.log(arr)
// arr.splice(3,2)  //it returns the an arr of elements which are deleted
// console.log(arr)

//Updation
// const arr=[1,10,2,20,3,30,4]
// const res=arr.splice(1,5,2,3)
// console.log(res)
//slice function:
// const users=["Ravi","Jay","Komal","Tanya","Krishna"]
// const females=users.slice(2,4)  //last index is taken 1 extra to reach particular index
// console.log(females)

// q-2
// const users=["Ravi","Jay","Komal","Krishna","Tanya"]
// const femaleUsers=users.slice(2)
// console.log(femaleUsers)
// femaleUsers.splice(1,1)
// console.log(femaleUsers)

//indexOf() method

//reverse() method

//includes() method
// const users=["Ravi","Jay","Komal","Krishna","Tanya"]
// if(users.includes("Tanya"))
//     console.log("User is present")

// users.sort()
//sort(callback)


//for each function
//eg-
// const arr=[1,2,3,4,5]
// const opt=[]

// q-1
// arr.forEach((value, index ,array)=>
//             {
//               opt.push(value*10)
//             })
// console.log(opt)

// q-2
// arr.forEach((value, index ,array)=>
//     {
//       opt.push(value+10)
//     })
// console.log(arr)
// q-3
// arr.forEach((value, index ,array)=>
//     {
//       opt.push(value**2)
//     })
// console.log(opt)

// const otpt=[]
// opt.forEach((value, index, arr)=>
// {
//  otpt.push(Math.sqrt(value))   
// })

// console.log(otpt)

// q-4  //find cube of each element and modify original array
// arr.forEach((value,index,array)=>
// {
//     // arr[index]=Math.pow(value,3)
//     arr[index]=value**3

// })
// console.log(arr)

//map method:
// const res=arr.map((value, index,array)=>
// {
//     return (value*10)
// })
// console.log(res)

//filter:





// ----------------------------------------------5 sept-------------------------------------

// -Slice function:

// 1)It will not modify the original array.
// 2) it returns the new array.

// where a=starting index,
//       b=last Index,
// Note:last index is taken 1 extra to reach particular index

// -indexOf(the element, starting index(optional) to start search) Method:

// returns index of element, if not present it returns -1.

// -reverse() method:

// -include(search value, starting index(optional)):


// -sort(callback) method:

// implementation:
// a function is passed as an argument in sort function.
// arr.sort((a,b)=>a-b)

// a-b=ascending order
// b-a=descending order

// Difference -ve: no swap
// Difference +ve: swap
// Difference 0: no swap


// --------------------------------------------------6 Sept--------------------------------------------
// 11. Foreach method:
//    Syntax: foreach(callback function as argument)

// .It is high order function.
// .It does not return anything, so js engine returns undefined.

// eg:
// const arr=[1,2,3,4,5]
// const opt=[]
// arr.foreach((value, index ,array)=>
//             {
//               opt.push(value*10)
//             }
// cgl(opt)


// 12. Map method (improved and newer version of for each, it has return keyword, which foreach does not have)

// Syntax:
// const anyvariable= original_array.map((value, index, array_variable)=>
//                    {
//                       return(value*10) //any operation on value
//                     }
// .It first iterate over every element performs operations stores it in new array, and at 
//  the end returns the reference of this new array to the variable where it is called.

// 13. Filter function:

// .It creates and return new array in which it store those values of array which full fill 
//  the certain conditions specified in function.

// Syntax:
// const arr=[,,,,,,,,,,,]
// const new_arrname=arr.filter((value,index,array)=>value>600 //filter condtn on value)
// console.log(new_arrname)





