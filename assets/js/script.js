// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


function getRandomNumber(totalNumber) {
  randomResponse = Math.floor(Math.random() * totalNumber);
  return randomResponse;
}


// get value of password length
function adjustLength() {
  document.getElementById("passwordLengthTextBox").value = document.getElementById("passwordLengthRange").value;
}


// after manual key input for fields, fix slider range
function fixRange() {

// check that values are between 8 and 128.
  if (((document.getElementById("passwordLengthTextBox").value) < 129) && ((document.getElementById("passwordLengthTextBox").value) > 7)) {
    document.getElementById("passwordLengthRange").value = document.getElementById("passwordLengthTextBox").value;
  }
  else {
    // the user got input value wrong - reset to 8.
    document.getElementById("passwordLengthTextBox").value = 8;
      fixRange();
      alert( "Password must be between 8 and 128 characters");
   }

}

function returnCharacter() {
  let specialChar = ['@', '#', '$', '%', '<', '^', '<', '~', '}', '|', '{', '`', '_', '!', '&', '”', '(', ')', '*', '+', ','];
  // Will just use an array and switch between caps and lowercase depending on switch
  let alphabetChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let numbersChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  do {

    // lets set up a random scenario of 1 to 4. based on that let's choose the ideal response. For 0, special, 1 alpha, 2 caps, 3 lowercase
    letterType = getRandomNumber(4);

    // use this to ensure that only the correct type is returned
    var satisfied = false;

    // special characters
    if (letterType === 0) {
      // check if switch is on..
      if (document.getElementById("SpecialSwitch").checked == true) {
        letterType = specialChar[getRandomNumber(specialChar.length)];
        satisfied = true;
      }
    }

    // capitals
    if (letterType === 1) {
      // check if switch is on..
      if (document.getElementById("capitals").checked == true) {
        letterType = alphabetChar[getRandomNumber(alphabetChar.length)];
        satisfied = true;
      }
    }

    // lowercase
    if (letterType === 2) {
      // check if switch is on..
      if (document.getElementById("lowercaseSwitch").checked == true) {
        letterType = alphabetChar[getRandomNumber(alphabetChar.length)];
        letterType = letterType.toLowerCase();
        satisfied = true;
      }
    }

    // numerical
    if (letterType === 3) {
      // check if switch is on..
      if (document.getElementById("numericSwitch").checked == true) {
        letterType = numbersChar[getRandomNumber(numbersChar.length)];
        satisfied = true;
      }
    }

  } while (satisfied === false);
  return letterType;
}

  // this function will display a message depending on if the password was sucesfull or a failure
  
function flashmessage(typeofMessage) {

  // two options success and failed - set up the box accordingly.

  if (typeofMessage === "success") {
    var classvariable = "alert alert-success";
    var messagevariable = "  Password copied to memory";

  } else {
    var classvariable = "alert alert-danger";
    var messagevariable = "You must include options from from the toggle switches below";
  }
  document.getElementById("alertMessage").setAttribute("class", classvariable);
  document.getElementById("alertMessage").innerHTML = messagevariable;
  document.getElementById("alertMessage").style = "visibility:block;"

  function showagain() {
    document.getElementById("alertMessage").style = "visibility:hidden;"
  }
  // show some fancy stuff to make it look a bit more beautiful.
  $("#alertMessage").fadeTo("slow", 0.15);
  $("#alertMessage").fadeTo("slow", 0.4);
  $("#alertMessage").fadeTo("slow", 0.7);
  $("#alertMessage").fadeTo("slow", 0, showagain);

}



function createPassword() {
  // get the password size preference and loop until it is satisfied  
  passwordSize = document.getElementById("passwordLengthTextBox").value;
  thePassWordFinal = "";

  // check that at least one condition is turned to on
  if ((document.getElementById("numericSwitch").checked == false) && (document.getElementById("lowercaseSwitch").checked == false) && (document.getElementById("capitals").checked == false) && (document.getElementById("SpecialSwitch").checked == false)) {
    flashmessage("failed");

    return;

  } else {
    flashmessage("success");
  }

  for (loopCounter = 0; loopCounter < passwordSize; loopCounter++) {
    //go fetch the desired letter;
    thePassWordFinal = thePassWordFinal + returnCharacter();

  }

  // insert the password and copy to ram
  document.getElementById("password").innerHTML = thePassWordFinal;
  // copy the new password to the clipboard
  var copyText = document.querySelector("#password");
  copyText.select();
  document.execCommand("copy");

}


// adjust toggle switch based on capitals on or off

function toggleStatus(sliderid, labelid, texttoshow) {
  if (document.getElementById(sliderid).checked == true) {
    document.getElementById(labelid).innerHTML = texttoshow + "on";
  }
  else {
    document.getElementById(labelid).innerHTML = texttoshow + "off";
  }
}




// Add event listener to generate button
generateBtn.addEventListener("click", createPassword);
passwordLengthRange.addEventListener("change", adjustLength);

SpecialStatusSwitch.addEventListener("change", function () { toggleStatus("SpecialSwitch", "specialcharactersLabel", "Special Characters  ") }, false);
capitalsOn.addEventListener("change", function () { toggleStatus("capitals", "CapitalsStatus", "Capital Letters  ") }, false);
lowercaseSwitch.addEventListener("change", function () { toggleStatus("lowercaseSwitch", "lowercaseStatus", "Lowercase  ") }, false);
numericSwitch.addEventListener("change", function () { toggleStatus("numericSwitch", "numericStatusLabel", "Numerical ") }, false);
passwordLengthTextBox.addEventListener("change", fixRange);


