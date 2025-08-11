class Palindrome {
    
    isPalindrome(str){
       if(str === null || str === undefined || str === ''){
        return false;
       }
       
       // Convert to lowercase and remove non-alphanumeric characters
       const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
       
       let left = 0;
       let right = cleanStr.length - 1;
       
       while(left < right) {
           if(cleanStr.charAt(left) !== cleanStr.charAt(right)) {
               return false;
           }
           left++;
           right--;
       }
       return true;
    }
}

export { Palindrome };