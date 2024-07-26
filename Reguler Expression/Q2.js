let text = "'I'm the cook,' he said, 'it's my job.'";
let result = text.replace(/(?<=\s)'|'(?=\s)/g, '"');
console.log(result);