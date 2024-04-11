Assignment Content

 Pokedex

You've always wanted one, and now you have the skills to make one. It is time to make a Pokedex!

The best part is the data is all freely available from the API at https://pokeapi.co/.

Note: the API is free, but they ask that you don't ruin it for everyone by making too many requests per day. 
Try to limit yourselves to 1000 or less a day to be safe.

Structure

As we discussed in class, JavaScript is asynchronous - which means we can't structure our 
program the same way we might for a synchronous language. 
This means some processes take an indeterminant amount of time to complete. We don't want
to wait for those to finish, so we use callback functions instead. 
For instance, consider reading a line of input from the user. We have no idea how long it 
is going to take the user to get around to typing a response in, so why waste time waiting? 
Simply ask the user to enter some information and let JavaScript continue doing some other 
work while it is waiting! Here's an example:

----------------------------------------------------------------------

// Load the readline library
const readline = require("readline");
// Setup readline to listen on the stdin stream
const rl = readline.createInterface(process.stdin, process.stdout);
 
... Somehwere else in our code where we wish to get input ...
 
rl.question("What is your name? ", (response) => {
     console.log("Hello, " + response + "!");  
});

----------------------------------------------------------------------

If we had another statement immediately after the prompt, it would run before 
our user could enter anything. This is because JS doesn't know how long it will 
take for the user to input their name. Therefore, it simply goes on working, 
and the function

----------------------------------------------------------------------

(response) => { 
     console.log("Hello, " + response + "!");
}

-----------------------------------------------------------------------

gets called when they are finished.

If we had wanted the program to continue and do something else only after 
the hello message was printed, we would have had to put it inside this function body, 
after the console.log line.

Our program will have the following functions:

showMenu() - will display all the menu options

prompt(cb) - will use readline to ask the user for a search term. It will then call the 
function passed into it (which is what cb is - a callback function), and pass the data 
the user entered as a parameter.

searchPoke(term) - will query the API for a particular Pokemon (passed in as term). If it 
receives a valid response, it will call printPoke(json) with the json to print out the name, 
weight, height, base experience, and all the moves for that Pokemon. It will then call run() 
again to reprompt.

printPoke(json) - print the data for the Pokemon in a neat and clean way.

searchItem(term) - works exactly like the searchPoke() function, except searches the 
Item endpoint for an item. Calls the corresponding printItem(json) method. Calls run() to reprompt.

printItem(json) - prints item data neatly. Pick at least four fields to display from the endpoint's data.

searchMove(term) - works exactly like the searchPoke() function, except searches the Move 
endpoint for a move. Calls the corresponding printMove(json) method.

printMove(json) - prints the move data in a neatly formatted way. Calls run() to reprompt.

run() - will call showMenu(), then use readline to ask the user to enter their choice. We 
will call the prompt function and pass to it the name of the function we wish to use for searching.

An example flow of data through the program:

run() is called. It calls showMenu(). It prompts the user for a choice from the menu.
User selects 1. The prompt() function is called and searchPoke is passed as the parameter.
prompt() asks for a search term, then calls searchPoke with that search term.
searchPoke() calls upon the API with the provided search term. On receipt of data, it takes 
the json from the response and calls printPoke(), passing in the JSON data extracted from 
the response.
printPoke(json) extracts and neatly prints the data from the JSON. It then calls run() to start 
the process over again.

If you don't understand this flow of data, or why we must structure our code this way, 
don't start on the project. You will only code yourself into a corner. Instead, come to 
office hours, talk to other students, and try to understand why it works this way.

Grading

This is a partner project, but NOT an AI-assitant project.