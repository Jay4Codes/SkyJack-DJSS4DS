var CryptoJS = require("crypto-js");

export function Decrypt(ciphertext) {
    if (ciphertext === undefined) {
      return undefined
    }
    let decryptedData = ''
    try {
      let bytes = CryptoJS.AES.decrypt(ciphertext, process.env.REACT_APP_SECRET).toString(CryptoJS.enc.Utf8);
      decryptedData = JSON.parse(bytes);
    } catch(err) {
      decryptedData = undefined
    }
    return decryptedData
  }