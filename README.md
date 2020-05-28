Password Manager
Password manager is a JS application specifically designed to create a password ranging from 8 to 128 characters in length.

Installation
Use git to clone the project using the repository : git@github.com:ginganinjar/monash-assignment-3.git

git clone git@github.com:ginganinjar/monash-assignment-3.git
Usage
The application will create a password with the range of 8 to 128 chrs. The type of chrs can be selected from the toggle icons on the bottom of the page. Upon creation of a password, the result is copied to the clipboard allowing an easy paste into whatever application is required.

Acceptance Criteria
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
The following image demonstrates the application functionality:

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
Shareware. No license or copyright provisions.