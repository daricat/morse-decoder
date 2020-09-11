const morseTable = [
  {'.-':     'a'},
  {'-...':   'b'},
  {'-.-.':   'c'},
  {'-..':    'd'},
  {'.':      'e'},
  {'..-.':   'f'},
  {'--.':    'g'},
  {'....':   'h'},
  {'..':     'i'},
  {'.---':   'j'},
  {'-.-':    'k'},
  {'.-..':   'l'},
  {'--':     'm'},
  {'-.':     'n'},
  {'---':    'o'},
  {'.--.':   'p'},
  {'--.-':   'q'},
  {'.-.':    'r'},
  {'...':    's'},
  {'-':      't'},
  {'..-':    'u'},
  {'...-':   'v'},
  {'.--':    'w'},
  {'-..-':   'x'},
  {'-.--':   'y'},
  {'--..':   'z'},
  {'.----':  '1'},
  {'..---':  '2'},
  {'...--':  '3'},
  {'....-':  '4'},
  {'.....':  '5'},
  {'-....':  '6'},
  {'--...':  '7'},
  {'---..':  '8'},
  {'----.':  '9'},
  {'-----':  '0'},
];

let dotRegExp = /\./g;
let hyphenRegExp = /\-/g;

let morseDigitTable = morseTable.map((element) => {
  let digitMorse = Object.keys(element)[0];
  digitMorse = digitMorse.replace(dotRegExp, 10);
  digitMorse = digitMorse.replace(hyphenRegExp, 11);
  digitMorse = digitMorse.padStart(10, 0);
  return {[digitMorse]: element[Object.keys(element)[0]]}
})
morseDigitTable.push({'**********': ' '});

morseDigitTable = morseDigitTable.reduce(function(result, item) {
  var key = Object.keys(item)[0];
  result[key] = item[key];
  return result;
}, {});

function decode(expr) {
  expr = expr.match(/.{1,10}/g);
  let result = expr.map((element) => {
    return morseDigitTable[element];
  })
  return result.join('');
}

module.exports = {
    decode
}