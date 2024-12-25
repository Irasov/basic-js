const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(value = true) {
    this.straight = value;
    this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  }

  encrypt(message, key) {
    if(message === undefined || key ===undefined ){ 
      throw new Error("Incorrect arguments!");
    }
    let encryptedMessage = "";
    message = message.toUpperCase();
    key = key.toUpperCase();
    let index = 0;
    let pos = 0;
    let step = 0;
    for (let i = 0; i < message.length; i += 1) {
      pos = this.alphabet.indexOf(message[i]);
      step = this.alphabet.indexOf(key[index]);
      if(pos !== -1) {
        while(step != -1){
          if(pos === this.alphabet.length){
            pos = 0;
          }
          if(step === 0) {
            encryptedMessage += this.alphabet[pos];
          }
          step -= 1;
          pos += 1;
        }
      } else {
        encryptedMessage += message[i];
        index -= 1;
      }
      if(index < key.length - 1){
        index += 1;
      } else {
        index = 0;
      }
    }
    if(this.straight){
      return encryptedMessage;
    }
    return encryptedMessage.split("").reverse().join("");
  }
  decrypt(encryptedMessage, key) {
    if(encryptedMessage === undefined || key ===undefined ){ 
      throw new Error("Incorrect arguments!");
    }
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    let decrypted = "";
    let index = 0;
    let pos = 0;
    let step = 0;
    for(let i = 0; i < encryptedMessage.length; i += 1) {
      pos = this.alphabet.indexOf(encryptedMessage[i]);
      step = this.alphabet.indexOf(key[index]);
      if(pos !== -1) {
        while(step !== -1) {
          if(pos === -1) {
            pos = this.alphabet.length - 1; 
          }
          if(step === 0) {
            decrypted += this.alphabet[pos];
          }
          step -= 1;
          pos -= 1;
        }
      } else {
        decrypted += encryptedMessage[i];
        index -= 1;
      }
      if(index < key.length - 1){
        index += 1;
      } else {
        index = 0;
      }
      console.log(index);
    }
    if(this.straight){
      return decrypted;
    }
    return decrypted.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine
};
