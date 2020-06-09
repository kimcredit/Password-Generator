//User values will also return in the log for easy review 

// Assignment Code
var generateBtn = document.querySelector("#generate");

//create function to make password
function generatePassword () {

    //Globals 
    var charL = ("a b c d e f g h i j k l m n o p q r s t u v w x y z").split(" ");
    var charU = ("A B C D E F G H I J K L M N O P Q R S T U V W X Y Z").split(" ");
    var numbers = ("1 2 3 4 5 6 7 8 9").split(" ");
    var specChar = ("! @ # $ % ^ & * + ? ~").split(" ");

    //Empty arrays
    var resultArray = [];
    var userArray = [];

    //User Input
    var pasLength = prompt("How long do you want your password to be? (between 8 and 128 characters)");
        console.log(pasLength);

    if (pasLength > 128 || pasLength < 8) {
        pasLength = false;
        alert ("Password length must be between 8 and 128");   
    }

    if (!pasLength){
        return ("Your Secure Password");
    }
    
    //Only runs remaining user selections if user chooses number within the desired range
    else {
        var charLInput = confirm("Do you want your password to include lowercase letters?");
            console.log(charLInput);
        var charUInput = confirm("Do you want your password to include lowercase letters?");
            console.log(charUInput);    
        var numbersInput = confirm("Do you want your password to include lowercase letters?");
            console.log(numbersInput);
        var specCharInput = confirm("Do you want your password to include lowercase letters?");
            console.log(specCharInput);

        //making combined array of users input 
        if (charLInput) {
            resultArray = resultArray.concat(charL);
        }
        if (charUInput) {
            resultArray = resultArray.concat(charU);
        }
        if (numbersInput) {
            resultArray = resultArray.concat(numbers);
        }
        if (specCharInput) {
            resultArray = resultArray.concat(specChar);
        }
        console.log(resultArray);

        //making password array
        for (var i = 0; i < pasLength; i++) {
            userArray.push (resultArray[Math.floor(Math.random()*resultArray.length)]);
        }
        //this removes spaces from array
        return userArray.join("");
        }}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);