import Daemon from '../Daemon';

test('should calculate the attack', () => {
  const received = new Daemon();

  const expected = 88;

  expect(received.getStoned(3)).toBe(expected);
});
