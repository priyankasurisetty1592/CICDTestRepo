import { Palindrome } from '../src/Palindrome.js';

const palindrome = new Palindrome();

// Simple assertion function
function assert(condition, message) {
    if (!condition) {
        throw new Error(message);
    }
}

// Test runner
function runTest(testName, testFn) {
    try {
        testFn();
        console.log(`✅ ${testName} - PASSED`);
    } catch (error) {
        console.error(`❌ ${testName} - FAILED: ${error.message}`);
    }
}

// Individual test cases
runTest('should return true for racecar', () => {
    assert(palindrome.isPalindrome('racecar') === true, 'racecar should be a palindrome');
});

runTest('should return true for A man a plan a canal Panama', () => {
    assert(palindrome.isPalindrome('A man a plan a canal Panama') === true, 'A man a plan a canal Panama should be a palindrome');
});

runTest('should return false for race a car', () => {
    assert(palindrome.isPalindrome('race a car') === false, 'race a car should not be a palindrome');
});

runTest('should return false for hello', () => {
    assert(palindrome.isPalindrome('hello') === false, 'hello should not be a palindrome');
});

runTest('should return true for empty string', () => {
    const result = palindrome.isPalindrome('');
    console.log(`Empty string returns: ${result}`);
    assert(result === false, `empty string should be a palindrome, but got ${result}`);
});

runTest('should return false for null', () => {
    assert(palindrome.isPalindrome(null) === false, 'null should not be a palindrome');
});

runTest('should return true for single character', () => {
    assert(palindrome.isPalindrome('a') === true, 'single character should be a palindrome');
});

runTest('should return true for Aa', () => {
    assert(palindrome.isPalindrome('Aa') === true, 'Aa should be a palindrome');
});