// Outline

/***
 * 1. Variable
 * 2. data types and their methods
 * 3. functions
 * 4. conditonals
 * 5. Loops
 * 6. Operators
 * 7. Aysynchronous Js
 *
 */

// VARIABLE

let x = '5';
var y = '2';
var pi = '3.14';
let oge = true;
let _primary = true;
let $key = 'knfk nfvljk834u894';
let unitedStates = false;
const code = 'i9898yty7jkjkl';

let sum = x + y;
console.log(+x + +y);

// DATA TYPES
/****
 * PRIMITIVE:  string, numbers, null, undefined, boolean
 *
 * NON-PRIMITIVE: object, array, BitInt
 */

// PRIMITIVE:  string, numbers, null, undefined, boolean
//string
let firstName = 'Amaka';
let lastName = 'Obi';

let fullName = firstName + ' ' + lastName;
let makeCapital = fullName.toUpperCase();
let course = 'HTML';

console.log(firstName.concat(' is offering HTML'));
let comment = 'foody you, get out';

let checkComment = comment.includes('fuck');

console.log(checkComment);

let para = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque totam inventore, ad quisquam id veritatis similique, cum nam nisi pariatur unde mollitia iste eius voluptatibus architecto laboriosam iusto numquam voluptate! `;

let spliceText = para.slice(0, 40);
console.log(fullName.endsWith('a'));

// Numbers
let v = 30.6 - 2;
console.log(Math.ceil(v));

// null

// undefine

// boolean : true  /false

let isLoggedIn = true;
console.log(isLoggedIn);

// Noin primitive

//Object

// let fName = 'Jane';
// let lName = 'Kelvin';
// let age = 56;
// let country = 'USA';
// let isSingle = true;

const studentInfo = {
	fName: 'Jane',
	lName: 'Kelvin',
	age: 56,
	country: 'USA',
	isSingle: true,
	'place of work': 'Mary Land',
	greet: function () {
		console.log(firstName);
	},
};

console.log(studentInfo['place of work'].toUpperCase());

// ARrray
const stuArray = ['Jane', 'Kelvin', 56, 'USD', true, 'Mary labnd'];

console.log(stuArray[0]);

// FUNCTION

function sumNumbers(...args) {
	console.log(args);
}
sumNumbers(30, 70, 90, 90);

// const sumNumbers = ()=>{

// }

// function(){

// }

// ()=>{

//      }
