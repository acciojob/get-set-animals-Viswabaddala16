//complete this code
class Animal {
	constructor(species) {
		get species(){
			
		}
		
		makeSound = function(){
		console.log("a sound the animal makes ");
	    }
	}
	 
}
class Cat extends Animal {
	purr = function(){
		console.log("purr");
	}
}

class Dog extends Animal {
	bark = function() {
		console.log("woof");
	}
	
}



// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
