var CryptoJS = require("crypto-js");

export function Encrypt(text) {
    let ciphertext = CryptoJS.AES.encrypt(JSON.stringify(text), process.env.REACT_APP_SECRET).toString();

    return ciphertext
}