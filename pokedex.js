/*****************************************************************

Pokedex api project for 343

@author Isabella Snyder, Zaydrian Price

@version Winter 2024

*****************************************************************/

//base url for the pokeapi
const base_url = 'https://pokeapi.co/api/v2/';


/*****************************************************************

Menu functions

*****************************************************************/

//showMenu function is to display the main menu to the user
function showMenu() {

    //showing the menu options
    console.log("Welcome to the Pokedex!");

    //option 1, pokemon search
    console.log("1. Search for a Pokemon");

    //option 2, item search
    console.log("2. Search for an Item");

    //option 3, move search
    console.log("3. Search for a Move");

    //option 4, exit
    console.log("4. Exit");

    //prompting the user for input
    prompt((input) => {

        //switch statement to determine what to do based on user input
        switch (input) {

            //case 1, search for a pokemon
            case '1':
                prompt(term => {
                    if (term) {
                        searchPoke(term);
                    } else {
                        console.log("Invalid input, please try again.");
                        showMenu();
                    }
                });
                break;

            //case 2, search for an item
            case '2':
                prompt(term => {
                    if (term) {
                        searchItem(term);
                    } else {
                        console.log("Invalid input, please try again.");
                        showMenu();
                    }
                });
                break;

            //case 3, search for a move
            case '3':
                prompt(term => {
                    if (term) {
                        searchMove(term);
                    } else {
                        console.log("Invalid input, please try again.");
                        showMenu();
                    }
                });
                break;
            
            //case 4, exit
            case '4':
                console.log("Goodbye!");
                rl.close();
                break;

            //default, invalid input
            default:
                console.log("Invalid input, please try again.");
                showMenu();
                break;
    }});
};

/*****************************************************************

Pokemon functions

*****************************************************************/

//searching for a pokemon
function searchPoke(term) {

    //check if the term is empty
        if (term === "") {
            console.log("Invalid input, please try again.");
            showMenu();
            return;
        }
    //fetching all the pokemon
    datafetcher('pokemon/', term, printPoke);
    
};

    //printing the pokemon data
    function printPoke(json) {
    // after lookinging at the docs I think these are the variables we can get about the mons so imma orint them to the console

    //printing the name, height, weight, types, and abilities
    console.log("Name: " + json.name);
    console.log("Height: " + json.height);
    console.log("Weight: " + json.weight);
    console.log("Types: ");
    for (let i = 0; i < json.types.length; i++) {
        console.log(json.types[i].type.name);
    }
    console.log("Abilities: ");
    for (let i = 0; i < json.abilities.length; i++) {
        console.log(json.abilities[i].ability.name);
    }
}

/*****************************************************************

Item functions

*****************************************************************/

//searching for an item, very similar to search poke?? so Ill copy the code from there and try and just adjust it to work for items
function searchItem(term) {
     //check if the term is empty
     if (term === "") {
        console.log("Invalid input, please try again.");
        showMenu();
        return;
    }
    //fetching all the items
    datafetcher('item/', term, printItem);
}

//print item  data
function printItem(json) {
    console.log("Name: " + json.name);
    console.log("Category: " + json.category.name);
    console.log("Cost: " + json.cost);
    console.log("Effect: " + json.effect_entries[0].effect);
}

/*****************************************************************

Move's functions

*****************************************************************/


//coping over code again and adjusting it to work for moves
function searchMove(term) {
    //check if the term is empty
    if (term === "") {
        console.log("Invalid input, please try again.");
        showMenu();
        return;
    }
    //fetch all the moves
    datafetcher('move/', term, printMove);
}

//printing the move data
function printMove(json) {
    console.log("Name: " + json.name);
    console.log("Type: " + json.type.name);
    console.log("Power: " + json.power);
    console.log("PP: " + json.pp);
    console.log("Accuracy: " + json.accuracy);
    console.log("Effect: " + json.effect_entries[0].effect);
}


/*****************************************************************

helper functions

*****************************************************************/

//readline stuff
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//prompt function is to prompt the user for input, handling readline functionality
function prompt(cb) {
    rl.question("Enter your choice: ", (input) => {
        cb(input);
    });

    }

//I made this datafetcher to call similar to prompt since we need to do fetching in 
//all 3 of the search functions it will make it easier to call the fetches via this helper

//takes in the url (type:moves, items, pokemon), the term (the name of the item, move, or pokemon), and the callback function
function datafetcher(url, term, cb){

    //concatenating the base url with the url and term
    fetch(base_url + url + term)
    //ensuring the response is valid
    .then(response => {
        if (!response.ok) {
            throw Error("Invalid input, please try again.");
        }
        return response.json();
            })
    //returning the json data to the callback function
    .then(data => cb(data))
    //catching any errors
    .catch(error => {
        console.log("Error: " + error);
        showMenu();
    });
}
/*****************************************************************

running the program

*****************************************************************/

//run functions is to start the program by running the main menu function
function run() {
    showMenu();
};

//running the program
run();