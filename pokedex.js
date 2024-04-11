/*****************************************************************

Pokedex api project for 343

@author Isabella Snyder, Zaydrian Price

@version Winter 2024

*****************************************************************/
//variables

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

                prompt(searchPoke());
                break;

            //case 2, search for an item
            case '2':
                prompt(searchItem());
                break;

            //case 3, search for a move
            case '3':
                prompt(searchMove());
                break;

            //case 4, exit the program
            case '4':
                console.log("Goodbye!");
                readline.close();
                break;

            //default case, invalid input
            default:
                console.log("Invalid input, please try again.");
                showMenu();
                break;
        }
    });
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

        //fetch all pokemon and store in a list to verify that term is valid
        fetch(base_url + 'pokemon/')
        //after looking at the documentation and project examples they provide on their site I believe that we need to append things from this list
        //it looks like this will return all of the pokemon but they will have name and url, im going to try and cut url out so that were not wasting extra time checking if our name is equal to the url

            //okay so we first use a then to get the list and then we use a then so that once we have the data we can put it into a pokemon list consts
            .then(response => response.json())

            //this is where we are going to put the data into the pokemon list
            .then(pokemon_list => {
                //we have the data so now we are going to put it into the pokemon list
                const pokemon = pokemon_list.results.map(pokemon => pokemon.name);

                //now we can check if its a valid name!
                if (!pokemon_list.includes(term)) {
                    console.log("Invalid input, please try again.");
                    showMenu();
                    
                } 
                //if we hit this else that means they have a valid name and we can now fetch the data
                else {
                    //fetch the pokemon data
                    fetch(base_url + 'pokemon/' + term)
                        .then(response => response.json())
                        .then(poke_data => {
                            //we have it so now we can use our print function to display it
                            printPoke(poke_data);
                        })
                        //trying to catch any errors, not sure if it works here I will have to test it
                        .catch(error => {
                            console.log("Error: " + error);
                            showMenu();
                        });
                }
            });
      
       
    
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
    //fetching all the items, ill look and see how theyre formatted later and fix formating if needed
    //fetch item
    fetch(base_url + 'item/')
    

        //for this im not going to map anything ill just search the whole thing for now
        .then(response => response.json())

        //putting the data of all items in a list
        .then(item_list => {
            
            //ill try mapping item name for now ill see if that works
            const items = item_list.results.map(item => item.name);

            //checking its valid
            if (!items.includes(term)) {
                console.log("Invalid input, please try again.");
                showMenu();
                
            } 
            //if we hit this else that means they have a valid name and we can now fetch the data
            else {
                //fetch the pokemon data
                fetch(base_url + 'item/' + term)
                    .then(response => response.json())
                    .then(item_data => {
                        //we have it so now we can use our print function to display it
                        printItem(item_data);
                    })
                    //trying to catch any errors, not sure if it works here I will have to test it
                    .catch(error => {
                        console.log("Error: " + error);
                        showMenu();
                    });
            }
        });
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
function searchMove() {
    //check if the term is empty
    if (term === "") {
        console.log("Invalid input, please try again.");
        showMenu();
        return;
    }
    //fetch all the moves
    fetch(base_url + 'moves/')
    ``
        //for this im not going to map anything ill just search the whole thing for now
        .then(response => response.json())

        //putting the data of all items in a list
        .then(move_list => {
            
            //ill try mapping item name for now ill see if that works
            const moves = move_list.results.map(move => move.name);

            //checking its valid
            if (!moves.includes(term)) {
                console.log("Invalid input, please try again.");
                showMenu();
                
            }
            //if we hit this else that means they have a valid name and we can now fetch the data
            else {
                //fetch the pokemon data
                fetch(base_url + 'move/' + term)
                    .then(response => response.json())
                    .then(move_data => {
                        //we have it so now we can use our print function to display it
                        printMove(move_data);
                    })
                    //trying to catch any errors, not sure if it works here I will have to test it
                    .catch(error => {
                        console.log("Error: " + error);
                        showMenu();
                    });
            }
        });
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

//run functions is to start the program by running the main menu function
function run() {
    showMenu();
};


//prompt function is to prompt the user for input, handling readline functionality
function prompt(cb) {

    // Load the readline library
    const readline = require("readline");
    // Setup readline to listen on the stdin stream
    const rl = readline.createInterface(process.stdin, process.stdout);
        readline.question("Please input an option: ", (input) => {
            //callback function to handle the input
            cb(input);
        });
    }