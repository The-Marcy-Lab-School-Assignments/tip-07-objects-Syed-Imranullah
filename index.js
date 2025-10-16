//write your code here
//"hello world hello" -> {"hello":2, "world": 1}
const countWordFrequency = (sentence) => {
  // Split the sentence into an array of words
  // "hello world" -> ["hello", "world", "hello"]
  const words = sentence.split(" ");

  // Create frequency object to store { word: frequency } pairs
  const frequency = {};

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (frequency[word] === undefined) {
      frequency[word] = 1;
    } else {
      frequency[word]++;
    }
  }
  return frequency;
};

// Test the function
console.log(countWordFrequency("hello world hello"));
console.log(countWordFrequency("the cat and the hat"));
// { the: 2, cat: 1, and: 1, hat: 1 }