//Factory Pattern
/*
var personFactory = function(name,age,state){
	var temp ={};
	temp.name = name;
	temp.age = age;
	temp.state = state;
	temp.printDetails = function(){
		console.log(temp.name + ", " + temp.age +", "+temp.state);
	};
	return temp;
};

var person1 = personFactory("Suddat",25,"MH");
var person2 = personFactory("Ritesh",26,"BH");

person1.printDetails();
person2.printDetails();
*/
//ENDS

//Constructor Pattern

var personConstructor = function(name,age,state){
	this.name = name;
	this.age = age;
	this.state = state;
	this.printDetails = function(){
		console.log(this.name + ", " + this.age +", "+this.state);
	};
};

var person1 = new personConstructor("Rizwan",25,"SM");
var person2 = new personConstructor("Apoorv",28,"UP");

person1.printDetails();
person2.printDetails();

//ENDS