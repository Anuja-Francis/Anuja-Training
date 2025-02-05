// const fs = require('node:fs');
// fs.readFile('./file.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });



// const fs = require('node:fs');
// try {
//   const data = fs.readFileSync('file.txt', 'utf8');
//   console.log(data);
// } catch (err) {
//   console.error(err);
// }



const fs = require('node:fs/promises');
async function example() {
  try {
    const data = await fs.readFile('file.txt', { encoding: 'utf8' });
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
example();