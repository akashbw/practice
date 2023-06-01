/**
 * Reverse order of words in a sentence
 *
 * https://www.youtube.com/watch?v=0ltJGE5Y4Mk
 */

const target = 'Reverse order of word of this sentence';
// 1. create array of words from the sentence using `split`
// 2. reverse array using `reverse`
// 3. join reversed array nto a string using `join`
const reverseWords = (str) => str.split(' ').reverse().join(' ');

console.log(reverseWords(target));
