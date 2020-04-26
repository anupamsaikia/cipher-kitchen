import CryptoJS from "crypto-js";

/**
 * Encrypt a given message using DES in CBC mode, PKCS#7 padding & MD5 digest.
 * The returned object contains cipherText in base64 encoded form.
 * @param {string} message The message to encrypt
 * @param {string} password Secret password to use for encryption
 * @returns An object containing key, iv, salt and cipherText
 */
export function encrypt(message, password) {
  let encrypted = CryptoJS.DES.encrypt(message, password);
  let output = {};
  output.key = encrypted.key.toString();
  output.iv = encrypted.iv.toString();
  output.salt = encrypted.salt.toString();
  output.cipherText = encrypted.toString();

  return output;
}

/**
 * Decrypts a given ciphertext in base64 encoded form to plaintext
 * @param {string} cipherText The ciphertext to decrypt
 * @param {string} password Secret password to use for decryption
 * @returns A string containing Plaintext or error message if failed
 */
export function decrypt(cipherText, password) {
  let output = CryptoJS.DES.decrypt(cipherText, password).toString(
    CryptoJS.enc.Utf8
  );

  if (output == "")
    return "The plaintext was empty or incorrect ciphertext/password";
  else return output;
}
