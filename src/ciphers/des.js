import CryptoJS from "crypto-js";

export function encrypt(message, password) {
  let encrypted = CryptoJS.DES.encrypt(message, password);
  let output = {};
  output.key = encrypted.key.toString();
  output.iv = encrypted.iv.toString();
  output.salt = encrypted.salt.toString();
  output.cipherText = encrypted.toString();

  return output;
}
