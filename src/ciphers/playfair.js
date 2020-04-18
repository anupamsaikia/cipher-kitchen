/**
 * Generates the key table for Playfair cipher
 * @param {string} keyPhrase Key phrase for Playfair cipher
 */
function generateKeyTable(keyPhrase) {
  let uniqueLetters = new Set(keyPhrase);
  for (let i = 0; i < 26; i++) uniqueLetters.add(String.fromCharCode(65 + i));

  uniqueLetters.delete("J");
  uniqueLetters = Array.from(uniqueLetters);

  let keyTable = [];
  while (uniqueLetters.length) keyTable.push(uniqueLetters.splice(0, 5));

  return keyTable;
}

/**
 * Sanitize input string. Remove non alphabets, transform to uppercase & replace 'J' by 'I'
 * @param {string} input String to sanitize
 */
function sanitize(input) {
  return input
    .toUpperCase()
    .replace(/[^A-Z]/g, "")
    .replace("J", "I");
}
