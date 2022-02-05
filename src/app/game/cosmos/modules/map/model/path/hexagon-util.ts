import { Hexagon } from '../hexagon';

export const hexagonRouteDraw = (
  hexagonA: Hexagon,
  hexagonB: Hexagon
): { q: number; r: number; s: number }[] => {
  const distance: number = hexagonDistance(hexagonA, hexagonB);
  const result: { q: number; r: number; s: number }[] = [];
  for (let i: number = 0; i <= distance; i++) {
    result.push(
      hexagonRound(hexagonLerp(hexagonA, hexagonB, (1 / distance) * i))
    );
  }

  return result;
};

export const hexagonRound = (frac: {
  q: number;
  r: number;
  s: number;
}): { q: number; r: number; s: number } => {
  let q: number = Math.round(frac.q);
  let r: number = Math.round(frac.r);
  let s: number = Math.round(frac.s);

  const q_diff: number = Math.abs(q - frac.q);
  const r_diff: number = Math.abs(r - frac.r);
  const s_diff: number = Math.abs(s - frac.s);

  if (q_diff > r_diff && q_diff > s_diff) {
    q = -r - s;
  } else if (r_diff > s_diff) {
    r = -q - s;
  } else {
    s = -q - r;
  }

  return { q, r, s };
};

export const hexagonDistance = (
  hexagonA: Hexagon,
  hexagonB: Hexagon
): number => {
  const vector: { q: number; r: number; s: number } = hexagonSubtract(
    hexagonA,
    hexagonB
  );
  return Math.max(Math.abs(vector.q), Math.abs(vector.r), Math.abs(vector.s));
};

export const hexagonSubtract = (
  hexagonA: Hexagon,
  hexagonB: Hexagon
): { q: number; r: number; s: number } => {
  return {
    q: hexagonA.attributes.q - hexagonB.attributes.q,
    r: hexagonA.attributes.r - hexagonB.attributes.r,
    s: hexagonA.attributes.s - hexagonB.attributes.s,
  };
};

export const lerp = (a: number, b: number, t: number): number => {
  return a + (b - a) * t;
};

export const hexagonLerp = (
  a: Hexagon,
  b: Hexagon,
  t: number
): { q: number; r: number; s: number } => {
  return {
    q: lerp(a.attributes.q, b.attributes.q, t),
    r: lerp(a.attributes.r, b.attributes.r, t),
    s: lerp(a.attributes.s, b.attributes.s, t),
  };
};
