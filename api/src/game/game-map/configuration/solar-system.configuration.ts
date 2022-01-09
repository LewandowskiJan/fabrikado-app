export interface SolarSystemConfiguration {
  layouts: number;
  planetsInSolarSystemMax: number;
  planetsInSolarSystemMin: number;
  minDistanceBetweenPlanet: number;
}

export const solarSystemConfiguration: SolarSystemConfiguration = {
  layouts: 5,
  planetsInSolarSystemMax: 5,
  planetsInSolarSystemMin: 7,
  minDistanceBetweenPlanet: 4,
};
