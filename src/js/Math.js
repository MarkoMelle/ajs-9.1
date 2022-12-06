export default class MathAtt {
  constructor() {
    this.isStoned = false;
  }

  getAttack(x) {
    if (this.stoned) {
      return this.getStoned(x);
    }
    return this.setAttack(x);
  }

  setAttack(x) {
    const attack = this.attack * ((100 - (10 * (x - 1))) / 100);
    return attack;
  }

  getStoned(x) {
    const attack = this.setAttack(x);
    const stonedAtt = Math.round(attack - Math.log2(x) * 5);
    return stonedAtt;
  }

  setStoned() {
    this.stoned = !this.stoned;
  }
}
