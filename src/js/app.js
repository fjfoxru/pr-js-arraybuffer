// Задание 2
// import ArrayBufferConverter from './arrayBufferConverter';
// import getBuffer from './getBuffer';


// const testArrayBuffer = getBuffer();

// const arrayBufferConverter = new ArrayBufferConverter();
// arrayBufferConverter.load(testArrayBuffer);
// console.log(arrayBufferConverter.buffer);
// console.log(arrayBufferConverter.toString());




// Задание 1
import Magician from './magician';
import Daemon from './daemon';
const magicial = new Magician(100);
const daemon = new Daemon(100);


daemon.hit(3)
console.log(daemon.attack, 'атака daemon по третьей клетке')
daemon.stoned = true;
daemon.hit(3)
console.log(daemon.attack, 'атака daemon под stoned по третьей клетке')


magicial.hit(2)
console.log(magicial.attack)
magicial.stoned = true;
magicial.hit(2)
console.log(magicial.attack)
