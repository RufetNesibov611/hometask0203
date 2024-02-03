"use strict";
1.
// function dividedByNum(num){
//     if(num % 3 == 0 && num % 7 == 0){
//         console.log("true")
//     }
//     else{
//         console.log("false")
//     }
// }
//  dividedByNum(21)

//  2.
//  function calcFact(num){
//     let factorial =1;
    
//     if(num <=0){
//         console.log("Duzgun eded yazin")
//     }
//     for(let i = 1; i<=num; i++){
//         factorial *=i
//         }
//         return factorial
//  }
//  console.log(calcFact(7))
 
//  3.
//  const numbers = [ 1, 2, 3, 4, 5]
 
//  function calcNumbers(arr){
//     let sum = 0;


//     for(const num of arr){
//         if(num % 2 == 0){
//             sum+=num**2
//         }
//     }
//     console.log(sum)
//  }

//  calcNumbers(numbers)

//  4.
//  function checkUser(mail,password){
//     if(mail == "rufet@mail.ru" && password == 12345678){
//         console.log("Daxil olundu")
//     }
//     else{
//         console.log("Mail ve ya passwor sehvdir")
//     }
//  }
//  checkUser("rufet@mail.ru", 12345678)
 
//  5.
//  const numbers = [2, 4, 5, 7, 9];

//  function sumOfOddNumbers(arr){
//     let sum =0;
    
//     for(const num of arr){
//         if(num % 2 == 1){
//             sum+=num
//         }
//     }
//     console.log(sum)
//  }
//  sumOfOddNumbers(numbers)

 6.
 const numbers = [2, 3, 4, 5, 6, 7, 9];
 
 function countOfEvenCount(arr){
    let count = 0;

    for (const num of arr) {
        if (num % 2 == 0){
            count++;
        }
    }
    console.log(count)
 }
 countOfEvenCount(numbers)