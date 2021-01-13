import Magician from '../magician';

const magicial = new Magician(100);

test('маг создан, дефолтная атака = 100', () => {
  const magicial = new Magician(100);
  expect(magicial.attack).toBe(100);
});


