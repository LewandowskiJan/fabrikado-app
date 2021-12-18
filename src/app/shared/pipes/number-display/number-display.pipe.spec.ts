import { NumberDisplayPipe } from './number-display.pipe';

describe('NumberDisplayPipe ', () => {
  it('create an instance ', () => {
    const pipe: NumberDisplayPipe = new NumberDisplayPipe();
    expect(pipe).toBeTruthy();
  });

  describe('tests ', () => {
    let pipe: NumberDisplayPipe;
    beforeAll(() => {
      pipe = new NumberDisplayPipe();
    });

    it('should transform 0 to 0', () => {
      expect(pipe.transform(0)).toBe(0);
    });

    it('should transform 1_000 to "1 K"', () => {
      expect(pipe.transform(1_000)).toBe('1 K');
    });

    it('should transform 1_000_000 to "1 M"', () => {
      expect(pipe.transform(1_000_000)).toBe('1 M');
    });

    it('should transform 1_000_000_000 to "1 B"', () => {
      expect(pipe.transform(1_000_000_000)).toBe('1 B');
    });

    it('should transform 1_000_000_000_000 to "1 T"', () => {
      expect(pipe.transform(1_000_000_000_000)).toBe('1 T');
    });

    it('should transform 1_000_000_000_000_000 to "1 Q"', () => {
      expect(pipe.transform(1_000_000_000_000_000)).toBe('1 Q');
    });
  });
});
