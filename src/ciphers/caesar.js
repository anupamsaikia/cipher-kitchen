/**
 * Encrypt a given message with Caesar cipher
 * @param {string} message The plaintext message
 * @param {number} shift Shift value
 */
export function encrypt(message, shift) {
  // check for correct type
  if (typeof shift != "number") {
    console.error("expected type: number");
    return;
  }
  if (typeof message != "string") {
    console.error("expected type: string");
    return;
  }

  while (shift < 0) shift += 26;
  return caesarShift(message, shift);
}

/**
 * Decrypt a given encrypted message with Caesar cipher to plaintext
 * @param {string} message The ciphertext message
 * @param {number} shift Shift value
 */
export function decrypt(message, shift) {
  // check for correct type
  if (typeof shift != "number") {
    console.error("expected type: number");
    return;
  }
  if (typeof message != "string") {
    console.error("expected type: string");
    return;
  }

  while (shift < 0) shift += 26;

  shift = shift % 26;
  shift = 26 - shift;
  return caesarShift(message, shift);
}

/**
 * Performs Caesar shifting on a given string.
 * The letters retain their original casing. Other non-alphabet characters are not changed
 * @param {string} message
 * @param {number} shift
 */
function caesarShift(message, shift) {
  return message.replace(/[A-Za-z]/g, match => {
    // ascii code of the matched character
    let code = match.charCodeAt(0);

    // handle uppercase & lowercase letters
    if (code >= 65 && code <= 90)
      return String.fromCharCode(((code - 65 + shift) % 26) + 65);
    else return String.fromCharCode(((code - 97 + shift) % 26) + 97);
  });
}
