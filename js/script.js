console.log("...connected");

// camelCase function
//Takes string as argument
// First letter is capped, empty space removed

function camelCase (userInput) {
    let shouldCapitalize = true;
    let result = "";
    for (let i = 0; i < userInput.length; i++)  {
        // Check for the first letter in a word, if it is, then Capitalize
        if (userInput.charAt(i) === " ") {
            result += userInput.charAt(i);
            shouldCapitalize = true;
        }
        else if (shouldCapitalize == true)  {
            result += userInput.charAt(i).toUpperCase();
            shouldCapitalize = false;
        } 
         else if (shouldCapitalize == false) {
            result += userInput.charAt(i);
            shouldCapitalize = false;
        } 
    }
    
    let newString = result.replaceAll( " ", "");
    return newString;

}

console.log(camelCase( "good morning")); 