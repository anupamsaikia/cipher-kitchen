/**
 * @param {string} message The plaintext message
 * @param {number} shift Shift value
 */
export function encrypt(message, shift) {
  if (shift < 0) {
    encrypt(message, shift + 26);
  } else {
    return message.replace(/[A-Za-z]/g, match => {
      //ascii code of the matched character
      let code = match.charCodeAt(0);

      // Uppercase letters
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + shift) % 26) + 65);
      }
      // Lowercase letters
      else {
        return String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }
    });
  }
}
