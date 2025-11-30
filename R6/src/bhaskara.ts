export default class Bhaskara {
  public calcularRaizes(a: number, b: number, c: number): number[] {
    const delta = b * b - 4 * a * c;

    if (delta > 0) {
      const x1 = (-b + Math.sqrt(delta)) / (2 * a);
      const x2 = (-b - Math.sqrt(delta)) / (2 * a);
      return [x1, x2];
    } else if (delta === 0) {
      const x = -b / (2 * a);
      return [x];
    } else {
      console.log('Δ < 0: A equação não possui raízes reais.');
      return [];
    }
  }
}
