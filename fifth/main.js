var salary = 2000;
var bonus = 0.14;
salary = 3600;

var finalSalary = salary + (salary * bonus)

var addition = 20 + 3
var multip = 30 * 10
var subt = 20 - 10
var division = 10 / 3

var number = 3;
number = number + 1;
number++;

var oddNumber = 37; 
var result = oddNumber % 10;

console.log(result);

document.getElementById("result").innerText = result

var someText = 'RHis is a text';
var someOtherText = "This is also a text";
var numberText = '2000';
var firstLetter = someText[0]
var lastLetter = someText[someText.length - 1]
document.getElementById('text-result').innerText = lastLetter

someText = "some other value";

var companies = ['Apple', 'Microsoft', 'Uber']
var ages = [20, 30, 41];

console.log(companies[companies.length - 1])

companies.push("IQVIA");

result = companies.pop()
document.getElementById('array-result').innerText = result;
console.log(companies);

result = companies.shift()
console.log(result);
console.log(companies);

companies.unshift('Google')

console.log(companies);

companies.splice(1, 1, 'Facebook');
console.log(companies);