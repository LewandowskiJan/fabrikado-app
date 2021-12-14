import { Player } from './player';

export class GameState {
  players: Player[];

  constructor(players: Player[]) {
    this.players = players;
    players.forEach((player: Player) => player.updateData());
  }
}
