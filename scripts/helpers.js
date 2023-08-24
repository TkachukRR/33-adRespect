export function updateAccentWords(string, words) {
  const wordsFromString = string.split(" ");

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < wordsFromString.length; j++) {
      if (wordsFromString[j] === words[i]) {
        wordsFromString[j] = `<em>${wordsFromString[j]}</em>`;
      }
    }
  }
  return wordsFromString.join(" ");
}
