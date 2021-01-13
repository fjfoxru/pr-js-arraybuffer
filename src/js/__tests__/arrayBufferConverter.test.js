import ArrayBufferConverter from '../arrayBufferConverter';
import getBuffer from '../getBuffer';

const testArrayBuffer = getBuffer();

test('при load загрузились байты', () => {
  const arrayBufferConverter = new ArrayBufferConverter();
  arrayBufferConverter.load(testArrayBuffer)
  expect(arrayBufferConverter.buffer).toHaveProperty('byteLength');
});

test('при load загрузились байты', () => {
  const arrayBufferConverter = new ArrayBufferConverter();
  const testString = arrayBufferConverter.toString()
  expect(typeof testString).toBe('string');
});



