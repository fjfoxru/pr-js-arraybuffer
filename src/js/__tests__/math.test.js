import Math from '../math';

const math = new Math();

test('math создан, дефолтная атака = 100', () => {
  const magicial = new Math(100);
  expect(magicial.attack).toBe(100);
});

test('маг под stoned', () => {
    const magicial = new Math(100);
    magicial.stonedHit = true;
    expect(magicial.stoned).toBe(true);
  });

  test('атака мага под stoned первой клетки меньше на 10', () => {
    const magicial = new Math(100);
    magicial.stonedHit = true;
    magicial.hit(1)
    expect(magicial.attack).toBe(90);
  });
  test('атака мага 1 клетки 100%', () => {
    const magicial = new Math(100);
    magicial.hit(1)
    expect(magicial.attack).toBe(100);
  });
  test('атака мага 2 клетки 90%', () => {
    const magicial = new Math(100);
    magicial.hit(2)
    expect(magicial.attack).toBe(90);
  });
  test('атака мага 3 клетки 80%', () => {
    const magicial = new Math(100);
    magicial.hit(3)
    expect(magicial.attack).toBe(80);
  });
  test('атака мага 4 клетки 70%', () => {
    const magicial = new Math(100);
    magicial.hit(4)
    expect(magicial.attack).toBe(70);
  });
  test('атака мага 5 клетки 60%', () => {
    const magicial = new Math(100);
    magicial.hit(5)
    expect(magicial.attack).toBe(60);
  });
  test('атака мага 0 клетки невозможна', () => {
    const magicial = new Math(100);
    magicial.hit(0)
    expect(magicial.attack).toBe(undefined);
  });


