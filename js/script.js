console.log("...connected");

/* camelCase function
1.Takes string as argument
2.First letter is capped, empty space removed
*/

function camelCase (userInput) {
    // let shouldCapitalize = true;
    // let result = "";
    // for (let i = 0; i < userInput.length; i++)  {
    //     // Check for the first letter in a word, if it is, then Capitalize
    //     if (userInput.charAt(i) === " ") {
    //         result += userInput.charAt(i);
    //         shouldCapitalize = true;
    //     }
    //     else if (shouldCapitalize == true)  {
    //         result += userInput.charAt(i).toUpperCase();
    //         shouldCapitalize = false;
    //     } 
    //      else if (shouldCapitalize == false) {
    //         result += userInput.charAt(i);
    //         shouldCapitalize = false;
    //     } 
    // }
    let result = capitalizeWords(userInput);
    let newString = result.replaceAll( " ", "");
    return newString;

}

function capitalizeWords(str) {
    let shouldCapitalize = true;
    let result = "";
    for (let i = 0; i < str.length; i++)  {
        // Check for the first letter in a word, if it is, then Capitalize
        if (str.charAt(i) === " ") {
            result += str.charAt(i);
            shouldCapitalize = true;
        }
        else if (shouldCapitalize == true)  {
            result += str.charAt(i).toUpperCase();
            shouldCapitalize = false;
        } 
         else if (shouldCapitalize == false) {
            result += str.charAt(i);
            shouldCapitalize = false;
        } 
    }
    return result;
}

console.log(camelCase( "how are you doing today?")); 


//Reverse string function
/*  1. accept an input string as a parameter
    2. iterate through the input
    3. shift the words into an array or string to reverse the order
*/

function reverseString(str) {
    let reversedString = [];
    let holder = "";
    for ( let i = 0; i < str.length; i++) {
        if (str.charAt(i) === " ") {
            reversedString.unshift(holder);
            holder = "";
        } else if (i == str.length - 1) {
            holder += str.charAt(i);
            reversedString.unshift(holder);
        } else if (str.charAt(i) !== " ")  {
            holder += str.charAt(i);
            // reversedString.unshift(holder);
         }    
    }
    return reversedString;
}
console.log (reverseString ("good morning sir")); 