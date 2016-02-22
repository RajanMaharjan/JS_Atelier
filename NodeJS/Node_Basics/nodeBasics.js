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
