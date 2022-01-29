export interface PlanetRuleConfiguration {
  generatePlanetSizeFn: (planetPositionInSolarSystem: number) => number;
  generatePlanetTemperatureFn: (planetPositionInSolarSystem: number) => number;
}
