//  Normal Object
const profile = {
  name: "Muthukumaran",
  userName: "Muthu050",
  passWord: "Muthukumaran050#",
  email: "muthukumaran050@gmail.com",
  DOB: "05/07/2000",
};
console.log(profile);
// This is used turn normal object into Text or string because the JSON should be in string only.
const jsonString = JSON.stringify(profile);
// Parse will change the code from string to object.
const jsonObj = JSON.parse(jsonString);

// Value used to get values from obj.
// const jsonArrForval = Object.values(jsonObj);

//  Key used to get Keys from Obj.
// const jsonArrForKey = Object.keys(jsonObj);

//For Loop :

// const jsonArr = Object.entries(jsonObj);
// console.log(jsonArr);
// for (let i = 0; i <= jsonArr.length - 1; i++) {
//   // console.log(`${jsonArrForKey[i]} : ${jsonArrForval[i]}`);
//   let arr = jsonArr[i];
//   console.log(`${arr[0]}: ${arr[1]}`);
// }

// For In - This is used to get key values in for loop for Ex: If we use this in array it will be index 0,1,2,3..

// for (let key in jsonObj) {
//   console.log(`${key} : ${jsonObj[key]}`);
// }

// For of

// const jsonArrForval = Object.values(jsonObj);

// for (let values of jsonArrForval) {
//   console.log(values);
// }

//Object.entries is used to trun the obj into array and we can acces the key and value.
// const jsonArr = Object.entries(jsonObj);

// for (let [key, values] of jsonArr) {
//   console.log(`${key} : ${values}`);
// }

// FOR EACH
// const jsonArr = Object.entries(jsonObj);

// jsonArr.forEach(function retriveKeyAndValue(item, index, arr) {
//   console.log(`${item[0]} : ${item[1]} `);
// });

//Create your own resume data in JASON Format.

let resume = [
  {
    "detail-1": "contact details",
    name: "MUTHUKUMARAN R",
    address: "No 3 Rajeshwari Nagar",
    place: "Putlur",
    district: "Thiruvallur",
    pinCode: 602025,
    phoneNo: 6374239075,
    email: "muthukumaran050@gmail.com",
  },
  {
    "Detail-2": "Education",
    collegeName: "Rajalakshmi Institite Of Technology",
    university: "Anna University",
    spcification: "B.E(Computer Scienece and Engineering)",
    percentage: 7.94,

    "12thSchoolName": "CALAVALA CUNNAN CHETTY HINDU MATRIC.HR.SEC.SCHOOL",
    percentage: 72.6,

    "10thSchoolName": "CALAVALA CUNNAN CHETTY HINDU MATRIC.HR.SEC.SCHOOL",
    percentage: 78.67,
  },
  {
    "Details-3": "Skills",
    skill1: "Javascript",
    skill2: "HTML",
    skill3: "CSS & Bootstrab",
    shill4: "Power Bi",
  },
  {
    "Detail -4": "Project",
    collegeProject: "Student Attendance System using Face Recognition",
  },
  {
    "Detail -5": "Certification",
    "certificate -1": "introduction to HTML",
    "certificate -2": "introduction to CSS",
    "certificate -3": "introduction to JavaScript",
  },
  {
    "Detail-6": "Interest",
    "interest -1": "Photography",
    "interest -2": "Travelling",
  },
  {
    "Detail -7": "Strength",
    "strength -1": "A positive can-do attitude and Self-Confidence",
    "Strength -2": "Strong analytical and problem solving skills",
  },
];

// const resumestr = JSON.stringify(resume);
// const resumeObj = JSON.parse(resumestr);
// console.log(resumeObj);
