"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const player_model_1 = __importDefault(require("../models/player.model"));
// Obtener todos los jugadores
const getPlayers = (req, res) => {
    const players = player_model_1.default.findAll('someTeamId');
    res.json(players);
};
// Obtener un jugador por su ID
const getPlayerById = (req, res) => {
    const { id } = req.params;
    const player = player_model_1.default.findById(id);
    if (!player) {
        res.status(404).json({ message: 'Player not found' });
        return;
    }
    res.json(player);
};
// Agregar un jugador
const addPlayer = (req, res) => {
    const { name, position, teamId, nationality, age, goals, assists, isCaptain, isActive } = req.body;
    if (!name || !position || !teamId) {
        res.status(400).json({ message: 'Missing required player information' });
        return;
    }
    const player = player_model_1.default.create({ name, position, teamId, nationality, age, goals, assists, isCaptain, isActive });
    res.status(201).json(player);
};
// Actualizar un jugador por su ID
const updatePlayerById = (req, res) => {
    const { id } = req.params;
    const { name, position, teamId, nationality, age, goals, assists, isCaptain, isActive } = req.body;
    const player = player_model_1.default.edit(id, { name, position, teamId, nationality, age, goals, assists, isCaptain, isActive });
    if (!player) {
        res.status(404).json({ message: 'Player not found' });
        return;
    }
    res.json(player);
};
// Eliminar un jugador por su ID
const deletePlayerById = (req, res) => {
    const { id, teamId } = req.params;
    const response = player_model_1.default.delete(id, teamId);
    if (!response) {
        res.status(404).json({ message: 'Player not found' });
        return;
    }
    res.status(204).send();
};
exports.default = {
    getPlayers,
    getPlayerById,
    addPlayer,
    updatePlayerById,
    deletePlayerById
};
