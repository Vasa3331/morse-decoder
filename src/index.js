const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let strArr = expr.split('**********');
    let strLetter = [];
    for (let i = 0; i < strArr.length; i++) {
      for (let j = 0; j < (strArr[i].length / 10); j++) {
        strLetter.push(strArr[i].slice(j * 10, (j + 1) * 10));
      }
      if (i !== strArr.length - 1) {
      strLetter.push(' ');
      }
    }
   
    let strLetterArr = strLetter.map(function(item) {
      let result = '';
      for (let i = 0; i < item.length / 2; i++) {
        if (item.slice(i * 2, i * 2 + 2) == '10') {
          result += '.';
        } else if (item.slice(i * 2, i * 2 + 2) == '11') {
          result += '-';
        }
      }
      return item == ' ' ? item : result;      
      });
    let strFinish = strLetterArr.map(function(item) {
        let result = '';
        for (const [key, value] of Object.entries(MORSE_TABLE)) {
            if(item == key) {
                result = value;
            } else if (item == ' ') {
                result = ' ';
                continue;
            }
          }
        return result;      
        });
return strFinish.join('');
}

module.exports = {
    decode
}