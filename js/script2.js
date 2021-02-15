console.log("...connected");

// camelCase function
//Takes string as argument
// First letter is capped, empty space removed

function camelCase (userInput) {
    for ( let input of userInput) {
        console.log(userInput[input]);
    }
    
    let newString = userInput.replaceAll( " ", "");
    return newString;
}

console.log(camelCase( "good morning")); 