import Magician from '../Magician';

test('should calculate the attack', () => {
  const received = new Magician();

  const expected = 72;

  expect(received.getStoned(3)).toBe(expected);
});
