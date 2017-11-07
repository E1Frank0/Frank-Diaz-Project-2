// Frank Diaz Project 2, DIG 1102, Professor Kahn Mai

/* For this project I'm going to make single arrays with each array holding a set of 20 names. Having two single arrays is perfect for creating a randon name generator that combines two random names chosen from the arrays and creates a full randomized name. I will then use Math.random to randomize the selection of names in the arrays in a for loop. I well end the code with a querySelector that will ensure that the result in the HTML code works properly to display the username results. */

// Create a function with a single array below that holds at least 20 first names that will later be combined with the second array to form a full username.
function generateUsername() {
var firstNames = ["Speed", "Virgin", "Chad", "Spooky", "Edgy", "Christian", "Lazy", "Spectral", "Brave", "Straight", "Godly", "Taino", "Nintendo", "SEGA", "Furious", "Fruity", "Lego", "Ghostly", "Ixis", "Rich", "Sound"];
   
// Create a second single array that holds the "last" 20 names that will be combined with the previous array to form a full name.
var lastNames = ["Warrior", "Metalhead", "Trekkie", "Soul", "Drummer", "Guru", "Spaghetti", "Nerd", "Marine", "Dachshund", "Lambda", "Hero", "Jedi", "Fiddlesticks", "Tarsier", "Ninja", "Pirate", "Cowboy", "Punk", "Hedgehog", "Redneck"];

// Create a variable for the textarea in the HTML code and then create a for loop with math.random below to create random loops of the randomnly generated names.
var userInput = document.querySelector(".userInput").value; 
 for (var i = 0; i < userInput; i++) { 
    var randomizeName1 = firstNames[Math.floor(Math.random() * firstNames.length)];
    var randomizeName2 = lastNames[Math.floor(Math.random() * lastNames.length)];
   document.querySelector(".result").innerHTML += "<br>Username: " + randomizeName1 + " " + randomizeName2;
 } 
}



 







