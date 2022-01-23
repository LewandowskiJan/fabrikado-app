export interface PlanetConfiguration {
  satStrength: number;
  maxTemperature: number;
  requireSat: number;
  crystal: number;
  deuterium: number;
  deuteriumEfficiency: number;
}

export const planetConfigurationByPlanetIndexMap: Map<
  number,
  PlanetConfiguration
> = new Map([
  [
    0,
    {
      satStrength: 100,
      maxTemperature: 999,
      requireSat: 0,
      crystal: 0,
      deuterium: 0,
      deuteriumEfficiency: 0,
    },
  ],
  [
    1,
    {
      satStrength: 65,
      maxTemperature: 260,
      requireSat: 4615,
      crystal: 9_230_769,
      deuterium: 2_307_692,
      deuteriumEfficiency: 0.24,
    },
  ],
  [
    2,
    {
      satStrength: 55,
      maxTemperature: 190,
      requireSat: 5_455,
      crystal: 10_910_000,
      deuterium: 2_727_500,
      deuteriumEfficiency: 0.34,
    },
  ],
  [
    3,
    {
      satStrength: 46,
      maxTemperature: 140,
      requireSat: 6_522,
      crystal: 13_044_000,
      deuterium: 3_261_000,
      deuteriumEfficiency: 0.44,
    },
  ],
  [
    4,
    {
      satStrength: 38,
      maxTemperature: 90,
      requireSat: 7_895,
      crystal: 15_790_000,
      deuterium: 9_947_500,
      deuteriumEfficiency: 0.54,
    },
  ],
  [
    5,
    {
      satStrength: 36,
      maxTemperature: 80,
      requireSat: 8_334,
      crystal: 16_668_000,
      deuterium: 4_167_000,
      deuteriumEfficiency: 0.56,
    },
  ],
  [
    6,
    {
      satStrength: 35,
      maxTemperature: 70,
      requireSat: 8_572,
      crystal: 17_144_000,
      deuterium: 4_286_000,
      deuteriumEfficiency: 0.58,
    },
  ],
  [
    7,
    {
      satStrength: 33,
      maxTemperature: 60,
      requireSat: 9_091,
      crystal: 18_182_000,
      deuterium: 4_545_500,
      deuteriumEfficiency: 0.6,
    },
  ],
  [
    8,
    {
      satStrength: 31,
      maxTemperature: 50,
      requireSat: 9_678,
      crystal: 19_356_000,
      deuterium: 4_839_000,
      deuteriumEfficiency: 0.62,
    },
  ],
  [
    9,
    {
      satStrength: 30,
      maxTemperature: 40,
      requireSat: 10_000,
      crystal: 20_000_000,
      deuterium: 5_000_000,
      deuteriumEfficiency: 0.64,
    },
  ],
  [
    10,
    {
      satStrength: 28,
      maxTemperature: 30,
      requireSat: 10_715,
      crystal: 21_430_000,
      deuterium: 5_357_500,
      deuteriumEfficiency: 0.66,
    },
  ],
  [
    11,
    {
      satStrength: 26,
      maxTemperature: 20,
      requireSat: 11_539,
      crystal: 23_078_000,
      deuterium: 5_769_500,
      deuteriumEfficiency: 0.68,
    },
  ],
  [
    12,
    {
      satStrength: 25,
      maxTemperature: 10,
      requireSat: 12_000,
      crystal: 24_000_000,
      deuterium: 6_000_000,
      deuteriumEfficiency: 0.7,
    },
  ],
  [
    13,
    {
      satStrength: 18,
      maxTemperature: -30,
      requireSat: 16_667,
      crystal: 33_334_000,
      deuterium: 8_333_500,
      deuteriumEfficiency: 0.78,
    },
  ],
  [
    14,
    {
      satStrength: 11,
      maxTemperature: -70,
      requireSat: 27_273,
      crystal: 54_546_000,
      deuterium: 13_636_500,
      deuteriumEfficiency: 0.86,
    },
  ],
  [
    15,
    {
      satStrength: 4,
      maxTemperature: -110,
      requireSat: 60_000,
      crystal: 120_000_000,
      deuterium: 30_000_000,
      deuteriumEfficiency: 0.94,
    },
  ],
]);
