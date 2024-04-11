/*****************************************************************

Pokedex api project for 343

@author Isabella Snyder, Zaydrian Price

@version Winter 2024

*****************************************************************/
//variables

const base_url = 'https://pokeapi.co/api/v2/';


/*****************************************************************

Base stuff for the program

*****************************************************************/

const fetch = require('node-fetch');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

//fetching the data from the api using the base_url and then appending based on the search term
fetch(base_url)

//turning response into json as that will be easier to work with
    .then(response => {
        const response_holder = response.json();

        //returning the json data
        return response_holder;
    })
    //pulling the results from the json data
    .then(data => {
        const query_result = data.results;
    })
    



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
    readline.question("Please select an option: ", (option) => {
        //switch statement to determine which option the user selected
        switch (option) {
            case '1':
                prompt(searchPoke);
                break;
            case '2':
                prompt(searchItem);
                break;
            case '3':
                prompt(searchMove);
                break;
            case '4':
                console.log("Goodbye!");
                readline.close();
                break;
            default:
                console.log("Invalid input, please try again.");
                showMenu();
        }
    });
}

//prompt function is to prompt the user for input, handling readline functionality
function prompt(cb) {
   
}

//searching for a pokemon
function searchPoke() {
    readline.question("Enter the name of the pokemon you would like to search for: ", (term) => {
        fetch(base_url + 'pokemon/' + term)
            .then(response => {
                const response_holder = response.json();
                return response_holder;
            })
            .then(data => {
                const query_result = data.results;
            })
    })
}

//printing the pokemon data
function printPoke(json) {
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

//searching for an item
function searchItem() {
    readline.question("Enter the name of the item you would like to search for: ", (term) => {
        fetch(base_url + 'item/' + term)
            .then(response => {
                const response_holder = response.json();
                return response_holder;
            })
            .then(data => {
                const query_result = data.results;
            })
    })
}

//print item 
function printItem(json) {
    console.log("Name: " + json.name);
    console.log("Category: " + json.category.name);
    console.log("Cost: " + json.cost);
    console.log("Effect: " + json.effect_entries[0].effect);
}

//searching for a move
function searchMove() {
    readline.question("Enter the name of the move you would like to search for: ", (term) => {
        fetch(base_url + 'move/' + term)
            .then(response => {
                const response_holder = response.json();
                return response_holder;
            })
            .then(data => {
                const query_result = data.results;
            })
    })
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



//run functions is to start the program by running the main menu function
function run() {
    showMenu();
};

