"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class PlayerModel {
    constructor() {
        this.players = [];
    }
    // Obtener todos los jugadores de un equipo
    findAll(teamId) {
        return this.players.filter(player => player.teamId === teamId);
    }
    // Buscar jugador por ID
    findById(id) {
        return this.players.find(player => player.id === id);
    }
    // Crear un nuevo jugador
    create(newData) {
        const newPlayer = Object.assign({ id: (0, uuid_1.v4)() }, newData);
        this.players.push(newPlayer);
        return newPlayer;
    }
    // Editar un jugador existente
    edit(id, newData) {
        const index = this.players.findIndex(player => player.id === id);
        if (index === -1)
            return undefined;
        if (newData.teamId && this.players[index].teamId !== newData.teamId)
            return undefined; // Verifica el equipo
        const updatedPlayer = Object.assign(Object.assign({}, this.players[index]), newData);
        this.players[index] = updatedPlayer;
        return updatedPlayer;
    }
    // Eliminar un jugador por ID y equipo
    delete(id, teamId) {
        const index = this.players.findIndex(player => player.id === id && player.teamId === teamId);
        if (index === -1)
            return false;
        this.players.splice(index, 1);
        return true;
    }
}
exports.default = new PlayerModel();