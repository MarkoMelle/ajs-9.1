import Daemon from '../Daemon';

test('should calculate the attack', () => {
  const received = new Daemon();
  received.setStoned();

  const expected = 88;

  expect(received.getAttack(3)).toBe(expected);
});
