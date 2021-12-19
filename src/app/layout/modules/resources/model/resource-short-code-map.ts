export enum ResourceShortCode {
  METAL = 'm',
  CRYSTAL = 'c',
  DEUTERIUM = 'd',
  ENERGY = 'e',
}

export const resourceShortCodeMap: Map<string, ResourceShortCode> = new Map([
  ['metal', ResourceShortCode.METAL],
  ['crystal', ResourceShortCode.CRYSTAL],
  ['deuterium', ResourceShortCode.DEUTERIUM],
  ['energy', ResourceShortCode.ENERGY],
]);
