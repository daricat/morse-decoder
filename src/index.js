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
  let array = []; 
  let space = '**********';
  
  for ( let i = 0, j = 10; i <= expr.length, j <= expr.length; i += 10, j += 10 ) {    
    array.push((expr.slice(i, j).split('')));    
  }

  for ( let k = 0; k < array.length; k++ ) {      
    for ( let m = 0; m < array[k].length; m++ ) {
      if ( array[k][m] == '1' ) {
        array[k].splice(0, m);         
        break;
      }      
    }
        
  }
  
  for ( let y = 0; y < array.length; y++ ) {
    for ( let t = 0, z = t + 1; t < array[y].length, t < (array[y].length) - 1; t++, z++ ) {
      (array[y]).splice(t, 2, (array[y][t]+array[y][t+1]));
    }
  }

  for ( let h = 0; h < array.length; h++ ) {
    for ( let q = 0; q < array[h].length; q++) {
      switch (array[h][q]) {
        case '10':
          array[h][q] = '.';
          break;
        case '11':
          array[h][q] = '-';
          break;          
      }
    }
  }

  for ( let s = 0; s < array.length; s++ ) {
    array[s] = array[s].join('');
  }

  for ( let v = 0; v < array.length; v++ ) {
    for (var key in MORSE_TABLE) {
      switch (array[v]) {
        case key:
          array[v] = MORSE_TABLE[key];
          break;
        case space:
          array[v] = ' ';
          break;           
      }            
    }
  }
  

  return (array.join(''));
}

module.exports = {
    decode
}