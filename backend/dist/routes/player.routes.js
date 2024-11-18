"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const player_controller_1 = __importDefault(require("../controllers/player.controller"));
const auth_1 = require("../middleware/auth");
const playerRouter = (0, express_1.Router)();
playerRouter.post('/add', auth_1.checkAuth, player_controller_1.default.addPlayer);
playerRouter.put('/update/:id', auth_1.checkAuth, player_controller_1.default.updatePlayerById);
playerRouter.delete('/delete/:id', auth_1.checkAuth, player_controller_1.default.deletePlayerById);
playerRouter.get('/:id', auth_1.checkAuth, player_controller_1.default.getPlayerById);
playerRouter.get('/', auth_1.checkAuth, player_controller_1.default.getPlayers);
exports.default = playerRouter;
