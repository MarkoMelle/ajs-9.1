import Magician from '../Magician';

test('should calculate the attack', () => {
  const received = new Magician();
  received.setStoned();
  const expected = 72;

  expect(received.getAttack(3)).toBe(expected);
});
