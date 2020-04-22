/**
 * Encrypt message using Playfair cipher
 * @param {string} message Message to encrypt
 * @param {string} keyPhrase Key phrase for Playfair cipher
 */
export function encrypt(message, keyPhrase) {
  message = Array.from(sanitize(message));

  const keyTable = generateKeyTable(keyPhrase);
  const charPos = getCharPositions(keyTable);

  let cipherText = [];

  const msgLength = message.length;
  for (let i = 0; i < msgLength; i += 2) {
    // if two consecutive letters are same, or total length is odd,
    // then use 'X' or 'Z' as filler character
    if (message[i] == message[i + 1] || i == msgLength - 1) {
      if (message[i] == "X") message[i + 1] = "Z";
      else message[i + 1] = "X";
    }

    // if the letters are in same row, then use the letters to their immediate right respectively
    if (charPos[message[i]].row == charPos[message[i + 1]].row) {
      const x1 = charPos[message[i]].row;
      const y1 = (charPos[message[i]].col + 1) % 5;
      const x2 = x1;
      const y2 = (charPos[message[i + 1]].col + 1) % 5;

      cipherText[i] = keyTable[x1][y1];
      cipherText[i + 1] = keyTable[x2][y2];
    }

    // if the letters are in same column, then use the letters immediately below respectively
    else if (charPos[message[i]].col == charPos[message[i + 1]].col) {
      const x1 = (charPos[message[i]].row + 1) % 5;
      const y1 = charPos[message[i]].col;
      const x2 = (charPos[message[i + 1]].row + 1) % 5;
      const y2 = y1;

      cipherText[i] = keyTable[x1][y1];
      cipherText[i + 1] = keyTable[x2][y2];
    }

    // if the letters are not on the same row or column,
    // replace them with the letters on the same row respectively
    // but at the other pair of corners of the rectangle defined by the original pair.
    else {
      const x1 = charPos[message[i]].row;
      const y1 = charPos[message[i + 1]].col;
      const x2 = charPos[message[i + 1]].row;
      const y2 = charPos[message[i]].col;

      cipherText[i] = keyTable[x1][y1];
      cipherText[i + 1] = keyTable[x2][y2];
    }
  }

  return cipherText.join("");
}

/**
 * Decrypt the given message using playfair cipher
 * @param {string} message Message to decrypt
 * @param {string} keyPhrase Keyphrase for Playfair cipher
 */
export function decrypt(message, keyPhrase) {
  message = Array.from(sanitize(message));

  const keyTable = generateKeyTable(keyPhrase);
  const charPos = getCharPositions(keyTable);

  let plainText = [];

  // If message has odd number of letters then remove the last letter
  if (message.length % 2 != 0) {
    message.pop();
  }

  for (let i = 0; i < message.length; i += 2) {
    // if the letters are in same row, then use the letters to their immediate left respectively
    if (charPos[message[i]].row == charPos[message[i + 1]].row) {
      const x1 = charPos[message[i]].row;
      const y1 = charPos[message[i]].col ? charPos[message[i]].col - 1 : 4;
      const x2 = x1;
      const y2 = charPos[message[i + 1]].col
        ? charPos[message[i + 1]].col - 1
        : 4;
      plainText[i] = keyTable[x1][y1];
      plainText[i + 1] = keyTable[x2][y2];
    }

    // if the letters are in same column, then use the letters immediately above respectively
    else if (charPos[message[i]].col == charPos[message[i + 1]].col) {
      const x1 = charPos[message[i]].row ? charPos[message[i]].row - 1 : 4;
      const y1 = charPos[message[i]].col;
      const x2 = charPos[message[i + 1]].row
        ? charPos[message[i + 1]].row - 1
        : 4;
      const y2 = y1;
      plainText[i] = keyTable[x1][y1];
      plainText[i + 1] = keyTable[x2][y2];
    }

    // if the letters are not on the same row or column,
    // replace them with the letters on the same row respectively
    // but at the other pair of corners of the rectangle defined by the original pair.
    else {
      const x1 = charPos[message[i]].row;
      const y1 = charPos[message[i + 1]].col;
      const x2 = charPos[message[i + 1]].row;
      const y2 = charPos[message[i]].col;

      plainText[i] = keyTable[x1][y1];
      plainText[i + 1] = keyTable[x2][y2];
    }
  }
  return plainText.join("");
}

/**
 * Generates the key table for Playfair cipher
 * @param {string} keyPhrase Key phrase for Playfair cipher
 * @returns {Array} Array[5][5] representing letters in key table
 */
function generateKeyTable(keyPhrase) {
  keyPhrase = sanitize(keyPhrase);
  let uniqueLetters = new Set(keyPhrase);
  for (let i = 0; i < 26; i++) uniqueLetters.add(String.fromCharCode(65 + i));

  uniqueLetters.delete("J");
  uniqueLetters = Array.from(uniqueLetters);

  let keyTable = [];
  while (uniqueLetters.length) keyTable.push(uniqueLetters.splice(0, 5));

  return keyTable;
}

/**
 * Returns a array of position objects indexed by each letter
 * @param {Array} keyTable Key table of Playfair cipher
 */
function getCharPositions(keyTable) {
  let positions = [];
  for (let i = 0; i < 5; i++)
    for (let j = 0; j < 5; j++) positions[keyTable[i][j]] = { row: i, col: j };
  return positions;
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

/**
 * Returns the full key string from a given key phrase of Playfair cipher
 * @param {string} keyPhrase Key phrase for Playfair cipher
 */
export function getKeyTableString(keyPhrase) {
  keyPhrase = sanitize(keyPhrase);
  let uniqueLetters = new Set(keyPhrase);
  for (let i = 0; i < 26; i++) uniqueLetters.add(String.fromCharCode(65 + i));

  uniqueLetters.delete("J");
  return Array.from(uniqueLetters).join("");
}
