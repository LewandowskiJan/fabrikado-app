import { GameRuleConfiguration } from './rule/game-rule-configuration';

export interface GameConfig {
  galaxyNumber: number;
  solarSystemNumber: number;
  planetsInSolarSystem: number;
  playerNumber: number;
  gameRuleConfiguration: GameRuleConfiguration;
}
