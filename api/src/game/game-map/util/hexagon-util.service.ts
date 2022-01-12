export class HexagonUtilService {
  public static countHexagonsByLayouts(layout: number): number {
    if (layout <= 0 || !layout) return 0;
    if (layout === 1) return 1;

    let result: number = 1;
    for (let i: number = 1; i < layout; i++) {
      result += i * 6;
    }

    return result;
  }
}
