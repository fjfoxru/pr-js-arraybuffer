// Задание 2
import ArrayBufferConverter from './arrayBufferConverter';
import getBuffer from './getBuffer';


const testArrayBuffer = getBuffer();

const arrayBufferConverter = new ArrayBufferConverter();
arrayBufferConverter.load(testArrayBuffer);
console.log(arrayBufferConverter.buffer);
console.log(arrayBufferConverter.toString());




// Задание 1
// import Magician from './magician';
// import Daemon from './daemon';
// const magicial = new Magician(100);
// const daemon = new Daemon(100);
// daemon.hit(1)
// console.log(daemon.attack)
// magicial.hit(1)
// console.log(magicial.attack)
// magicial.hit(2)
// console.log(magicial.attack)
// magicial.stonedHit = true;
// console.log(magicial.attack)
// magicial.hit(2)
// magicial.hit(5)
// magicial.hit(5)
// console.log(magicial.attack)
// console.log(magicial)