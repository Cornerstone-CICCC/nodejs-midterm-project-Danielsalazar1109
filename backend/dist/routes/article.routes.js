"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const player_controller_1 = __importDefault(require("../controllers/player.controller"));
const auth_1 = require("../middleware/auth");
const playerRouter = (0, express_1.Router)();
// Agregar un jugador
playerRouter.post('/add', auth_1.checkAuth, player_controller_1.default.addPlayer);
// Actualizar un jugador por ID
playerRouter.put('/update/:id', auth_1.checkAuth, player_controller_1.default.updatePlayerById);
// Eliminar un jugador por ID
playerRouter.delete('/delete/:id', auth_1.checkAuth, player_controller_1.default.deletePlayerById);
// Obtener un jugador por ID
playerRouter.get('/:id', auth_1.checkAuth, player_controller_1.default.getPlayerById);
// Obtener todos los jugadores de un equipo
playerRouter.get('/', auth_1.checkAuth, player_controller_1.default.getPlayers);
exports.default = playerRouter;