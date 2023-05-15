//complete this code
Create the Animal class with a constructor that takes one argument, species. 
	Inside the constructor, set the species property of the object.
Add a getter method for the species property.
Add a makeSound() method to the Animal class that logs a sound to the console.
Create a Cat class that extends the Animal class. Use the super() method 
	in the constructor to call the parent class's constructor.
Add a purr() method to the Cat class that logs "purr" to the console.
Create a Dog class that extends the Animal class. Use the super() method 
	in the constructor to call the parent class's constructor.
Add a bark() method to the Dog class that logs "woof" to the console.

Now, try implementing this in Java and let me know if you need help with any specific part.
class Animal {
  constructor(species) {
    this.species = species;
  }

  getSpecies() {
    return this.species;
  }
makeSound() {
  console.log("Some sound");
}

}
class Cat extends Animal {
	constructor(species){
		super(species);
	}
	purr(){
		console.log("purr");
	}
}

class Dog extends Animal {
	constructor(species){
		super(species);
	}
	
	bark() {
		console.log("woof");
	}
	
}



// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
