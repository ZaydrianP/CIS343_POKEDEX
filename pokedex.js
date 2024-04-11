const fetch = require('node-fetch');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

fetch('https://pokeapi.co/api/v2')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
    run();
function showMenu() {
    console.log("Enter the following to search for:\n1. Pokemon\n2. Item\n3. Move\n4. Exit")
    .then(search_result => {
        if (search_result == "Pokemon"){

        }
        else if(search_result == "Item"){

        }
        else if(search_result == "Move"){

        }
        else if(search_result == "Exit"){

        }
        else {
            console.log("Wrong search term. Please try again.");
            run();
        }
    })
    .then(prompt(search_result));
}

function prompt(cb) {
   
}

//searchPoke(term)

//printPoke(json)

//searchItem(term)

//printItem(json)

//searchMove(term)

//printMove(json)

function run() {
    showMenu();
}

