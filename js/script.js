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
    // Set-Up
    let shouldCapitalize = true;
    let result = "";

    //main For Loop
    for (let i = 0; i < str.length; i++)  {
        // Check for the first letter in a word, if it is, then Capitalize
        if (str.charAt(i) === " ") {
            result += str.charAt(i);
            shouldCapitalize = true;
        }
        else if (shouldCapitalize == true)  {
            result = result + str.charAt(i).toUpperCase();
            shouldCapitalize = false;
        } 
         else if (shouldCapitalize == false) {
            result += str.charAt(i);
            shouldCapitalize = false;
        } 
    }
    //My result at the end
    return result;
}

console.log(capitalizeWords( "Hello how are you?")); 


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
    let convertedString = reversedString.toString();
    convertedString = convertedString.replaceAll( ",", " ");
    return convertedString;
 
}

console.log (reverseString("good morning sir")); 

//reverseThenCamelCase && remove spaces

function reverseThenCamelCase (str) {
    let finalString = reverseString(capitalizeWords(str));
    finalString = finalString.replaceAll(" ", "");
    return finalString;
}

console.log(reverseThenCamelCase("i enjoy long walks on the beach"));

//Removing the first and last Character 
/* */

function removeFirstAndLast (str) {
    let value = str.slice(1, str.length - 1);
    return value;
}

console.log(removeFirstAndLast("germany"));

//invertCasing 

function invertCasing (input) {
    let string = ""
    for ( let i = 0; i < input.length; i++) {
        if (input.charAt(i) == input.charAt(i).toUpperCase()) {
           string += input.charAt(i).toLowerCase()
        } else if (input.charAt(i) == input.charAt(i).toLowerCase()){
            string += input.charAt(i).toUpperCase()
        } 
    }   
    return string;
}

console.log(invertCasing("SpoGeBob MemE"));