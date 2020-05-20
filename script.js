// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  alert(passwordText);
}


function getRandomNumber(totalNumber) {
  randomResponse = Math.floor(Math.random() * totalNumber);
    return randomResponse;
}


// get value of password length
function adjustLength() {
  var passwordLengthVar = document.getElementById("passwordlength").value;
   document.getElementById("PasswordLengthLabel").innerHTML = passwordLengthVar + " characters";

  }

    function returnCharacter() {
        var specialChar = ['@', '#', '$', '%', '<', '^', '<'];
        // Will just use an array and switch between caps and lowercase depending on switch
        var alphabetChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        var numbersChar = ['0','1','2','3','4','5','6','7','8','9'];
     
      
       
      // lets set up a random scenario of 1 to 4. based on that let's choose the ideal response. For 0, special, 1 alpha, 2 caps, 3 lowercase
      letterType = getRandomNumber(4);


      // special characters
      if (letterType === 0) {
        // check if switch is on..
        if (document.getElementById("SpecialSwitch").checked == true) {    
            letterType = specialChar[getRandomNumber(specialChar.length)];              
              }
          }

          // capitals
          if (letterType === 1) {
            // check if switch is on..
            if (document.getElementById("capitals").checked == true) {    
                letterType = alphabetChar[getRandomNumber(alphabetChar.length)];              
                  }
              }

          // lowercase
          if (letterType === 2) {
            // check if switch is on..
            if (document.getElementById("lowercaseSwitch").checked == true) {    
                letterType = alphabetChar[getRandomNumber(alphabetChar.length)];
                letterType = letterType.toLowerCase();
                  }
              }

              // numerical
              if (letterType === 3) {
                // check if switch is on..
                if (document.getElementById("numericSwitch").checked == true) {    
                    letterType = numbersChar[getRandomNumber(numbersChar.length)];
                    }
                  }
          
            return letterType;
}


    function createPassword() {
      // get the password size preference and loop until it is satisfied  
        passwordSize = document.getElementById("passwordlength").value;
          thePassWordFinal = "";

        
          for (loopCounter = 0; loopCounter < passwordSize; loopCounter++) {
            //go fetch the desired letter;
            thePassWordFinal = thePassWordFinal + returnCharacter();

          }
               //alert(thePassWordFinal );
               document.getElementById("password").innerHTML = thePassWordFinal;
      }


  // adjust toggle switch based on capitals on or off

    function toggleStatus(sliderid, labelid, texttoshow) {
      if (document.getElementById(sliderid).checked == true) {
            document.getElementById(labelid).innerHTML = texttoshow + "on";
          } 
            else 
            {
              document.getElementById(labelid).innerHTML = texttoshow + "off";
                  }
                    } 

            
          

// Add event listener to generate button
    generateBtn.addEventListener("click", createPassword);
    passwordlength.addEventListener("change", adjustLength);

    SpecialStatusSwitch.addEventListener("change",function(){toggleStatus("SpecialSwitch", "specialcharactersLabel","Special Characters  ")}, false);
    capitalsOn.addEventListener("change",function(){toggleStatus("capitals", "CapitalsStatus","Capital Letters  ")}, false);
    lowercaseSwitch.addEventListener("change",function(){toggleStatus("lowercaseSwitch", "lowercaseStatus","Lowercase  ")}, false);
    numericSwitch.addEventListener("change",function(){toggleStatus("numericSwitch", "numericStatusLabel","Numerical ")}, false);
