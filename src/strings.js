
/** STRING MANIPULATION FUNCTIONS */
const reverseString = (value = 'string to be reversed') => {
  if (value.length < 2) {
    return value;
  }

  let reversed = '';
  for (let i = value.length - 1; i >= 0; i--) {
    reversed += value[i];
  }

  return reversed;
}

const countCharacters = (value = 'count-me') => {
  return value.length;
}

const capitalizeWords = (sentence = 'this should be capitalized') => {
  const words = sentence.split(' ');
  const wordsFormatted = [];

  words.forEach(word => {
    const formatted = word.charAt(0).toUpperCase() + word.slice(1);
    wordsFormatted.push(formatted);
  });

  const result = wordsFormatted.join(' ');
  return result;
}