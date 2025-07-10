// // // // // FUNCTIONS

// // // // // 1, Declaration function

// // // // // function funcName(name, age) {
// // // // //     console.log(name + " " + age + " " + "yoshda")
// // // // // }

// // // // // funcName("ALi", 34);

// // // // // 2. Expression function

// // // // // const func2 = function () {
// // // // //     console.log("Expression function")
// // // // // }

// // // // // func2();

// // // // // 3. Arrow function

// // // // // const func3 = () => {
// // // // //     console.log("Arrow function")
// // // // // }

// // // // // func3();



// // // // // SCOPES

// // // // // 1. Global scope

// // // // // let a = 1
// // // // // let b = 2

// // // // // // 2. Local scope

// // // // // function scope() {
// // // // //     let nimadir = 'dsgvfb'
// // // // // }

// // // // // 3. Block scope

// // // // if (2 >= 3) {

// // // //     let a = 1
// // // //     let b = 2
// // // //     // nimadirlar
// // // // }




// // // // // function multiply(num1, num2) {
// // // // //     return num1 * num2;
// // // // // }

// // // // // console.log(multiply(4,5))

// // // // // CLOSURE

// // // // // agar parent function (outer) stackdan chiqib ketsa, lekin child function (inner) parent functionni memorysidan foydalanolsa parent function CLOSURE deyiladi

// // // // // function outer(parameter) {
// // // // //     function inner() {

// // // // //     }
// // // // // }


// // // // // INTERVIEW QUESTIONS

// // // // // 1. let, var, const farqlari
// // // // // 2. hoisting nima
// // // // // 3. TDZ (Temporal Dead Zone) nima
// // // // // 4. closure nima
// // // // // 5. Data types
// // // // // 6. scopes, function

// // // // // Primitive & non-primitive(reference type)

// // // // // Primitive

// // // // // string, number, boolean, null, undefined, bigint, symbol

// // // // // non-primitive

// // // // // objects

// // // // // console.log(name);




// // // // // const name = "Salim"
// // // // funcArrow()

// // // // function funcArrow(){
// // // //     console.log("asdfadf");

// // // // }

// // // // const arrowFunc = name => console.log("asdfadf", name);



// // // //  123 => 321

// // // // let num = 123

// // // // let lastNum = num % 10 // 3
// // // // let middleNum = ((num % 100) - lastNum) / 10 // 2
// // // // let firstNum = (num - (num % 100)) / 100 // 1

// // // // let res = (lastNum * 100) + ((middleNum * 10) + firstNum)

// // // // console.log(res);



// // // // 81 => 8 + 1


// // // const raqamlarYigindisi = (son) => {
// // //     let lastNum = son % 10
// // //     let firstNum = (son - lastNum) / 10

// // //     return lastNum + firstNum
// // // }

// // // // console.log(raqamlarYigindisi(23));

// // // let num = 27
// // // console.log(num**(5/3)); 


// // // let cash = +prompt("Alisherning pulini kiriting: ")

// // // let ticketPrice = 500 // USD
// // // let hotelPrice = 250 // USD
// // // let travelExpense = 120 // EURO

// // // let usdInUzs = 12641.99
// // // let euroInUzs = 14917

// // // let sum = ((ticketPrice + hotelPrice) * usdInUzs) + (travelExpense * euroInUzs)
// // // console.log(sum)
// // // console.log(cash)

// // // function checkCash() {
// // //     return cash >= sum ? alert("Oq yo'l") : alert("Puling kam")
// // // }

// // // checkCash()



// // // Primitive - o'zida faqat bitta value saqlidi
// // // Non-primitive - bir nechta qiymat saqlidi

// // // let a = 19

// // // Objects & Array

// // let object = {
// //     name: "Ali",
// //     age: 19,
// //     isMarried: false,
// //     skills: null
// // }

// // // let array = [1, 2, 3, 4, 5]
// // // let fruits = ["olma", "nok", "shaftoli"]

// // // let arr = ["string", 3, null, undefined, "v", 1223445345.4553, true]

// // // arr.push("ALI")

// // // console.log(arr.reverse());

// // // let numArr = [4, 6, 2, 1, 9, 3]

// // // console.log(numArr.sort());


// // // Array methods - map(), filter(), find(), forEach(), indexOf(), sort(), reverse()



// // // console.log(arr[0])
// // // console.log(arr[1])
// // // console.log(arr[2])
// // // console.log(arr[3])
// // // console.log(arr[4])
// // // console.log(arr[5])

// // // console.log(fruits[1]);


// // // console.log(array[0]);
// // // console.log(array[1]);
// // // console.log(array[2]);
// // // console.log(array[3]);


// // // console.log(object.name)
// // // console.log(object.age)
// // // console.log(object.isMarried)
// // // console.log(object.skills)


// // // let person = {
// // //     name: "Ali",
// // //     age: 19,
// // //     isMarried: false,
// // // }

// // // console.log(person.name);
// // // console.log(person["age"]);


// // // let students = [
// // //     {
// // //         name: "Muhammaddiyor",
// // //         age: 19,
// // //         group: "U9"
// // //     },
// // //     {
// // //         name: "Javohir",
// // //         age: 17,
// // //         group: "U7"
// // //     }
// // // ]

// // // console.log(students[0]["name"]);


// // // let colors = ["red", "black"]

// // // 1. colors array - [], red, black,... | "#000", "#fff", ...
// // // 2. Person objects - name, age, email, phoneNumber, address

// // // let address = {
// // //     city: "Tashkent",
// // //     street: "Kocha 23",
// // //     zipCode: 23456
// // // }

// // // let person = {

// // // }

// // // 3. Objects in array - it depends on 2.

// // // let arr = [
// // //     {},
// // //     {},
// // //     {},
// // //     {},
// // // ]


// // // let colors = ["red", "black", "blue", "green", "#ffffff", "#000000"]

// // // console.log(colors[0]);
// // // console.log(colors[1]);
// // // console.log(colors[2]);
// // // console.log(colors[3]);
// // // console.log(colors[4]);
// // // console.log(colors[5]);


// // let person = {
// //     name: "Ali",
// //     age: 19,
// //     email: "ali@mail.com",
// //     phoneNumber: "+998977777777",
// //     address: {
// //         city: "Tashkent",
// //         street: "Muminov 4a",
// //         zipCode: 12345
// //     },
// //     skill: ["HTML", "CSS", "SASS", "Javascript"]
// // }

// // // console.log(person.skill[0])


// // let persons = [
// //     {
// //         name: "Ali",
// //         age: 19,
// //         email: "ali@mail.com",
// //         phoneNumber: "+998977777777",
// //         address: {
// //             city: "Tashkent",
// //             street: "Muminov 4a",
// //             zipCode: 12345
// //         },
// //         skill: ["HTML", "CSS", "SASS", "Javascript"]
// //     },
// //     {
// //         name: "Ali",
// //         age: 19,
// //         email: "ali@mail.com",
// //         phoneNumber: "+998977777777",
// //         address: {
// //             city: "Tashkent",
// //             street: "Muminov 4a",
// //             zipCode: 12345
// //         },
// //         skill: ["HTML", "CSS", "SASS", "Javascript"]
// //     },
// //     {
// //         name: "Ali",
// //         age: 19,
// //         email: "ali@mail.com",
// //         phoneNumber: "+998977777777",
// //         address: {
// //             city: "Tashkent",
// //             street: "Muminov 4a",
// //             zipCode: 12345
// //         },
// //         skill: ["HTML", "CSS", "SASS", "Javascript"]
// //     }
// // ]

// // console.log(persons);


// // if & else


// // function checkNum(son) {
// //     return son > 0 ? console.log("Musbat") : console.log("manfiy");
// // }

// // // function checkNum(son) {
// // //     if (son > 0) {
// // //         console.log("Musbat");
// // //     } else {
// // //         console.log("manfiy");
// // //     }
// // // }

// // checkNum(-9)


// // let cash = +prompt("Alisherning pulini kiriting: ")

// // let ticketPrice = 500 // USD
// // let hotelPrice = 250 // USD
// // let travelExpense = 120 // EURO

// // let usdInUzs = 12641.99
// // let euroInUzs = 14917

// // let sum = ((ticketPrice + hotelPrice) * usdInUzs) + (travelExpense * euroInUzs)

// // function checkCash(cash) {
// //     if(cash > sum) {
// //         alert("Oq yo'l Alisher!")
// //     } else {
// //         alert("Puling kam" + " " + (cash - sum))
// //     }
// // }

// // checkCash(cash)


// // alert("Alisherning jami puli:" + " " + 120000000 + "\n\n" + "Ishlatilgan pul:\n\n" + "Qoldiq:" )



// // 1. Declaration

// // function funcName(a) {
// //     console.log(a)
// // }

// // funcName("Salom");
// // funcName("Yusufxon");
// // funcName("Damirbek");

// // // 2. Arrow function

// // const funktsiya = (a) => {
// //     // console.log(a)

// // }

// // funktsiya(1234)

// // 3. Expression function

// // const nom = function(a) {
// //     return a
// // }

// // console.log(nom(88888))


// // scopes 

// // 1 global scope
// // 2 local/function
// // 3 block scope 


// // Data types - primitive & non-primitive

// let a = 5
// let b = "fdsfsf"

// let arr = [9, 2, 8, 1, 6, 4, 3 ]
// // arr.push(4)
// // arr.unshift(0)
// // arr.pop()
// // arr.shift()


// // console.log(arr[0]);
// // console.log(arr[1]);
// // console.log(arr[2]);
// // console.log(arr[3]);
// // console.log(arr[4]);
// // console.log(arr[5]);
// // console.log(arr[6]);



// // function show(arr) {
// //     arr.map((item) => console.log(item))
// // }

// // // show(arr)


// let obj = {
//     name: "Ali",
//     age: 19,
//     numbers: [1, "sfv", true, null],
//     boolean: false,
//     null: null,
//     undefined: undefined
// }

// console.log(obj.age);


// let users = [
//     {
//         name: 'sdfsdfsd',
//         age: 34
//     },
//     {
//         name: 'sdfsdfsd',
//         age: 34
//     },
//     {
//         name: 'sdfsdfsd',
//         age: 34
//     }
// ]



// function show(arr) {
//     arr.map((item) => console.log(item.name))
// }

// show(users)




// FOR LOOP

// let arr 

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);

let arr = ["3:1","2:2","0:1","4:2","1:1"]
let x=0
let count = 0

for (let i = 0; i<arr.length; i++)  {

   let x= arr[i]
   
 for(j=0; j<x.length; j++){

   if(+x[j]>+x[j+2]){
      count=count+3
      console.log("win");  

   }else if(+x[j]<+x[j+2]){
      console.log("lose");
      
   }else if(+x[j]===+x[j+2]){
      count=count+1
      console.log("draw");
   }
 }
 
}
console.log(count);



// arr.map((i) => console.log(i))





// 2.8 JS




// 2.9 JS
