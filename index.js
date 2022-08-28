function isPalindrome(word) {
  const forwardsArray = [];
  const backwardsArray = [];
  for (let i = 0; i <= word.length; i++)
  { forwardsArray.push(word[i]); 
    }
    for (let j = word.length - 1; j >= 0; j--){
      backwardsArray.push(word[j]); 
    }
   if (forwardsArray == backwardsArray)
   { return true
  }
  else {
    return false;
  }
}

/* 
  Add your pseudocode here
  if (word reads the same way back and forth) 
  {return true}
  else {return false}

  if the first letter is the same as the last..
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
