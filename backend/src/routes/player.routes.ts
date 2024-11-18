import { Router } from 'express';
import playerController from '../controllers/player.controller';
import { checkAuth } from '../middleware/auth';

const playerRouter = Router();

playerRouter.post('/add', checkAuth, playerController.addPlayer);
playerRouter.put('/update/:id', checkAuth, playerController.updatePlayerById);
playerRouter.delete('/delete/:id', checkAuth, playerController.deletePlayerById);
playerRouter.get('/:id', checkAuth, playerController.getPlayerById);
playerRouter.get('/', checkAuth, playerController.getPlayers);

export default playerRouter;