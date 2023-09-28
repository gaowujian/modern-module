import fs from 'fs';

export { default } from './button';
fs.readFile('./demo.txt', (err, data) => {
  if (err) {
    console.log('err:', err);
  }
  console.log('data:', data);
});
