// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  alert(passwordText);

}

// get value of password length
function adjustLength() {
  var passwordLengthVar = document.getElementById("passwordlength").value;
  //alert(passwordLengthVar);
  document.getElementById("PasswordLengthLabel").innerHTML = passwordLengthVar + " characters";

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
    generateBtn.addEventListener("click", writePassword);
    passwordlength.addEventListener("change", adjustLength);

    SpecialStatusSwitch.addEventListener("change",function(){toggleStatus("SpecialSwitch", "specialcharactersLabel","Special Characters  ")}, false);
    capitalsOn.addEventListener("change",function(){toggleStatus("capitals", "CapitalsStatus","Capital Letters  ")}, false);
    lowercaseSwitch.addEventListener("change",function(){toggleStatus("lowercaseSwitch", "lowercaseStatus","Lowercase  ")}, false);
    numericSwitch.addEventListener("change",function(){toggleStatus("numericSwitch", "numericStatusLabel","Numerical ")}, false);


  //   someObj.addEventListener("click", function(){
  //     some_function(someVar);
  // }, false);

