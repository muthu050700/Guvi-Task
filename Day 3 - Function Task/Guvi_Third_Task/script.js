//Anonymous function

// a) Print odd numbers in an array

// let arr = [1, 21, 40, 35, 60, 12, 5];
// const findOddNum = function (values) {
//   for (let i = 0; i <= values.length - 1; i++) {
//     if (values[i] % 2 !== 0) {
//       console.log(values[i]);
//     }
//   }
// };
// findOddNum(arr);

// b)Convert all the strings to title caps in a string array

// "hi", "iam", "muthu";
// let titleArr = ["hiii", "how are you guys!!!"];
// let titleStr = titleArr.splice("");
// console.log(titleStr);
// const titleCaps = function (values) {
//   let emptyArr = [];
//   for (let i = 0; i <= values.length - 1; i++) {
//     emptyArr.push(titleStr[i].charAt(0).toUpperCase() + titleStr[i].slice(1));
//   }
//   console.log(emptyArr.join(" "));
// };
// titleCaps(titleStr);

//C) Sum of all numbers in an array

// let numArr = [1, 2, 3, 4, 5, 6, 7];
// const addingNumbers = function (values) {
//   let sumOfNumbers = 0;
//   for (let i = 0; i <= values.length - 1; i++) {
//     sumOfNumbers += values[i];
//   }
//   console.log(sumOfNumbers);
// };
// addingNumbers(numArr);

// D)Return all the prime numbers in an array
// let arrOfNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const findPrimeNum = function (values) {
//   let calcPrime;
//   let calcPrime1;
//   for (let i = 0; i <= arrOfNum.length - 1; i++) {
//     if (arrOfNum[i] === 2 || arrOfNum[i] === 3) {
//       console.log(arrOfNum[i]);
//     }
//   }
// };

// findPrimeNum(arrOfNum);

// E) Return all the palindromes in an array

// let arr = ["MADAM", "Muthu", "1,2,3,2,1", "radar", "level"];
// for (let i = 0; i <= arr.length - 1; i++) {
//   const findPalindrome = function (values) {
//     let reversedWord = values[i].split("").reverse().join("");
//     if (arr[i] === reversedWord) {
//       return arr[i];
//     } else {
//       return `${arr[i]} not a Palindrome`;
//     }
//   };
//   console.log(findPalindrome(arr));
// }

// F) Return median of two sorted arrays of the same size.

// let arr1 = [1, 12, 15, 26, 38];
// let arr2 = [2, 13, 17, 30, 45];
// const findMedian = function (value1, value2) {
//   let merge = value1.concat(value2);
//   let sortedArr = merge.sort(function (a, b) {
//     return a - b;
//   });
//   return sortedArr;
// };
// console.log(findMedian(arr1, arr2));

// g) Remove duplicates from an array

// let arr = [1, 2, 3, 3, 5, 1];
// const removeDupilicate = function (values) {
//   let removed = values.filter(function (item, pos) {
//     return values.indexOf(item) === pos;
//   });
//   console.log(removed);
// };
// removeDupilicate(arr);

// H) Rotate an array by k times
// let k = 1;
// let arr = [1, 2, 3];
// arr.unshift(4);
// console.log(arr);
// const rotateThearr = function (values, k) {
//   for (let i = 0; i <= k - 1; i++) {
//     arr.unshift(values.pop());
//   }
//   return arr;
// };
// console.log(rotateThearr(arr, k));

//IFE
// a) Print odd numbers in an array

// let arr = [1, 21, 40, 35, 60, 12, 5];
// (function (values) {
//   for (let i = 0; i <= values.length - 1; i++) {
//     if (values[i] % 2 !== 0) {
//       console.log(values[i]);
//     }
//   }
// })(arr);

//b)Convert all the strings to title caps in a string array

// "hi", "iam", "muthu";
// let titleArr = ["hiii", "how are you guys!!!"];
// let titleStr = titleArr.splice("");
// (function (values) {
//   let emptyArr = [];
//   for (let i = 0; i <= values.length - 1; i++) {
//     emptyArr.push(titleStr[i].charAt(0).toUpperCase() + titleStr[i].slice(1));
//   }
//   console.log(emptyArr.join(" "));
// })(titleStr);

//C) Sum of all numbers in an array

// let numArr = [1, 2, 3, 4, 5, 6, 7];
// const addingNumbers = function (values) {
//   let sumOfNumbers = 0;
//   for (let i = 0; i <= values.length - 1; i++) {
//     sumOfNumbers += values[i];
//   }
//   console.log(sumOfNumbers);
// };
// addingNumbers(numArr);

// E) Return all the palindromes in an array
// let arr = ["MADAM", "Muthu", "1,2,3,2,1", "radar", "level"];
// for (let i = 0; i <= arr.length - 1; i++) {
//   let result = (function (values) {
//     let reversedWord = values[i].split("").reverse().join("");
//     if (arr[i] === reversedWord) {
//       return arr[i];
//     } else {
//       return `${arr[i]} not a Palindrome`;
//     }
//   })(arr);
//   console.log(result);
// }

// F) Return median of two sorted arrays of the same size.
// let arr1 = [1, 12, 15, 26, 38];
// let arr2 = [2, 13, 17, 30, 45];
// const result = (function (value1, value2) {
//   let merge = value1.concat(value2);
//   let sortedArr = merge.sort(function (a, b) {
//     return a - b;
//   });
//   return sortedArr;
// })(arr1, arr2);
// console.log(result);

// g) Remove duplicates from an array

// let arr = [1, 2, 3, 3, 5, 1];
// (function (values) {
//   let removed = values.filter(function (item, pos) {
//     return values.indexOf(item) === pos;
//   });
//   console.log(removed);
// })(arr);

// H) Rotate an array by k times

// let k = 1;
// let arr = [1, 2, 3];
// arr.unshift(4);
// const result = (function (values) {
//   for (let i = 0; i <= k - 1; i++) {
//     arr.unshift(values.pop());
//   }
//   return arr;
// })(arr);
// console.log(result);

//Arrow Function

//A) Print odd numbers in an array

// const findOddNum = (values) => {
//   for (let i = 0; i <= values.length - 1; i++) {
//     if (values[i] % 2 !== 0) {
//       console.log(values[i]);
//     }
//   }
// };
// findOddNum([1, 21, 40, 35, 60, 12, 5]);

//B) Convert all the strings to title caps in a string array

// let titleArr = ["hiii", "how are you guys!!!"];
// let titleStr = titleArr.splice("");
// console.log(titleStr);

// const titleCaps = (values) => {
//   let emptyArr = [];
//   for (let i = 0; i <= values.length - 1; i++) {
//     emptyArr.push(titleStr[i].charAt(0).toUpperCase() + titleStr[i].slice(1));
//   }
//   console.log(emptyArr.join(" "));
// };
// titleCaps(titleStr);

// C) Sum of all numbers in an array

// let numArr = [1, 2, 3, 4, 5, 6, 7];
// const addingNumbers = (values) => {
//   let sumOfNumbers = 0;
//   for (let i = 0; i <= values.length - 1; i++) {
//     sumOfNumbers += values[i];
//   }
//   console.log(sumOfNumbers);
// };
// addingNumbers(numArr);

//Return all the prime numbers in an array

// let arrOfNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const findPrimeNum = function (values) {
//   for (let i = 0; i <= values.length - 1; i++) {}
// };

// const findPrimeNum = (values) => {

//     for (let i = 0; i <= values.length - 1; i++) {

//     }

// };
// findPrimeNum(arrOfNum);

// let obj = {
//   name: "Muthu",
//   age: 23,
//   location1: "chennai",
// };
// let { name, location1 } = obj;
// console.log(name, location1);
