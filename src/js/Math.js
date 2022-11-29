export default class MathAtt {
  getAttack(x) {
    const attack = this.attack * ((100 - (10 * (x - 1))) / 100);
    return attack;
  }

  getStoned(x) {
    const attack = this.getAttack(x);
    const stonedAtt = Math.round(attack - Math.log2(x) * 5);
    return stonedAtt;
  }
}
