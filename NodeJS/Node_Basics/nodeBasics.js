//variables
var course = 'Hello NodeJS Developer !!';
console.log(course);

//string
var fname= 'Rajan';
var lname= 'Maharjan';
var fullName = fname+' '+lname;
console.log(fullName);

//numbers
var maths = 80;
var english = 79;
var nepali = 80;

var avg = (maths+english+nepali)/3;
console.log('Average Grade:'+' '+avg);

//if statments
var friend = 'zan';
if(friend === 'zan' || friend === 'jul'){
	console.log('Hello friends');
}else if(friend === 'man'){
	console.log('Hello !!');
}else{
	console.log('Hello Stranger !!!')
}

//functions
function greetUser (name) {
	console.log('This is function call from '+name+' !');
}

greetUser('Rajan');
greetUser('Juls');
greetUser('Rajan Juls');

function greetUser1 (name,lastname) {
	console.log('This is 2 argument function call from '+name+' '+lastname+' !');
}

greetUser1 ('Rajan','Maharjan');

function greetUser2 (name,lastname) {
	return 'This is return function call from '+name+' '+lastname+' !';
}

var greeting  = greetUser2 ('Rajan','Maharjan');
console.log(greeting);

function add (a,b){
	return a + b;
}

var added = add(1,6);
console.log(add(1,4)+' '+added);

//objects
var pet = {
	name: 'yanky',
	type: 'dog'
};

function printPet(pet){
	if (pet.name==='yanky'){
		console.log('You own a dog named '+pet.name);
	}else{
		console.log('You have a new dog!')
	}
}

printPet(pet);

//boolean
var isValid = false;

function toggleBoolean(booleanVar){
	if(typeof booleanVar === 'boolean'){
			return !booleanVar;
	}else{
		console.log('Warning! Not a boolean.')
	}
}

console.log(toggleBoolean(isValid));

//undefined
var name = undefined;

function doesNothing() {

}

//if we do x === 'undefined' it will log erro.
if(typeof x === 'undefined'){
	console.log('x is undefined');
}

console.log(name);
console.log(doesNothing());

//Array
var grades = [100,10];


grades.push(79); //push it at end
grades.unshift(23); //push it at beginning

// var grade = grades.pop(); // to pop the last item from array
// var grade = grades.shift(); // to pop the last item from array

// console.log(grade);
console.log(grades);

//iterate the items from array.
grades.forEach(function(grade){ //ananymous function
	console.log(grade);
});


console.log(grades[2]); //to log the item with index.

console.log(grades.length); // to console the length of the array.

var totalGrade = 0;
grades.forEach(function(grade){ //ananymous function
	totalGrade +=grade;
	console.log('Current total is : '+totalGrade);
});

var avgGrade = totalGrade / grades.length;
console.log(avgGrade);


//for loop
function countFor(start,stop){
	if(start<stop){
		console.log('Increasing no with for');
		for(start;start<stop;start++){
			console.log(start);
		}
	}else{
		console.log('Decreasing no with for');
		for(start;start>stop;start--){
			console.log(start);
		}
	}
}

countFor(10,20);
countFor(30,20);


//while loop

function countWhile(start,stop){
	if(start<stop){
		console.log('Increasing loop with while');
		while(start<stop){
			console.log(start);
			start++;
		}
	}else{
		console.log('Decreasing loop with while');
		while(start>stop){
			console.log(start);
			start--;
		}
	}
}

countWhile(10,20);
countWhile(30,20);

//scope
var global = 12;
function localFunction(){
	var local = 13;
	console.log('local variable= ' + local);
}

localFunction();
console.log('Global variable= '+ global);

//closure
function greetMaker(name){
	function greet(){
		console.log('Hello '+name+' !');
	}
	return greet;
}

var greetRajan = greetMaker('Rajan');
greetRajan();
greetRajan();
greetRajan();

//closure1

function createAdder(baseNumber){
	return function add(numToAdd){
		return baseNumber+numToAdd;
	};
}

var addTen = createAdder(10);
console.log(addTen(20));
console.log(addTen(30));