import { v4 as uuidv4 } from 'uuid';
import { Player } from '../types/player';

class PlayerModel {
  private players: Player[] = [];

  // Get all players
  findAll(teamId: string): Player[] {
    return this.players.filter(player => player.teamId === teamId);
  }

  // Search for a player by id
  findById(id: string): Player | undefined {
    return this.players.find(player => player.id === id);
  }

  // Create a new player
  create(newData: Omit<Player, 'id'>): Player {
    const newPlayer = {
      id: uuidv4(),
      ...newData,
    };
    this.players.push(newPlayer);
    return newPlayer;
  }

  // Edit a existing player
  edit(id: string, newData: Partial<Player>): Player | undefined {
    const index = this.players.findIndex(player => player.id === id);
    if (index === -1) return undefined;
    if (newData.teamId && this.players[index].teamId !== newData.teamId) return undefined; // Verifica el equipo
    const updatedPlayer = {
      ...this.players[index],
      ...newData,
    };
    this.players[index] = updatedPlayer;
    return updatedPlayer;
  }

  // Delete a player by id
  delete(id: string, teamId: string): boolean {
    const index = this.players.findIndex(player => player.id === id && player.teamId === teamId);
    if (index === -1) return false;
    this.players.splice(index, 1);
    return true;
  }
}

export default new PlayerModel();