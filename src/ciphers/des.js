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

export function decrypt(cipherText, password) {
  let output = CryptoJS.DES.decrypt(cipherText, password).toString(
    CryptoJS.enc.Utf8
  );

  if (output == "")
    return "The plaintext was empty or incorrect ciphertext/password";
  else return output;
}
