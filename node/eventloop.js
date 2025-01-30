const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err.message);
    process.exit(1); 
  }
  console.log('File read completed:', data);
});

setTimeout(() => {
  console.log('Timer executed');
}, 0);

setImmediate(() => {
  console.log('Immediate callback executed');
});

console.log('Program started');
