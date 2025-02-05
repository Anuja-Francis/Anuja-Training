const fs = require('node:fs');
const util = require('node:util');

async function example() {
  const open = util.promisify(fs.open);
  
  try {
    const fd = await open('./file.txt', 'r');
    console.log('File opened with file descriptor:', fd);

    fs.close(fd, (err) => {
      if (err) throw err;
      console.log('File closed');
    });

  } catch (err) {
    console.error('Error occurred:', err);
  }
}

example();
