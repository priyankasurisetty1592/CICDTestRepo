# Palindrome Project

This project contains a simple implementation of a Palindrome checker using JavaScript. It includes a class that provides functionality to determine if a given string is a palindrome, as well as tests to verify its correctness.

## Project Structure

```
palindrome-project
├── src
│   └── Palindrome.js       # Contains the Palindrome class
├── test
│   └── Palindrome.test.js   # Contains tests for the Palindrome class
├── package.json             # NPM configuration file
└── README.md                # Project documentation
```

## Usage

To use the `Palindrome` class, you can import it into your JavaScript file as follows:

```javascript
import Palindrome from './src/Palindrome';
const palindromeChecker = new Palindrome();
console.log(palindromeChecker.isPalindrome('racecar')); // true
console.log(palindromeChecker.isPalindrome('hello'));   // false
```

## Running Tests

To run the tests for the `Palindrome` class, follow these steps:

1. Install the necessary dependencies by running:
   ```
   npm install
   ```

2. Run the tests using the following command:
   ```
   npm test
   ```

This will execute the test cases defined in `Palindrome.test.js` and display the results in the console.

## License

This project is licensed under the MIT License.