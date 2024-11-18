"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlayers = exports.getPlayerById = exports.deletePlayerById = exports.updatePlayerById = exports.addPlayer = void 0;
let players = [
    {
        id: '1',
        name: 'Thibaut Courtois',
        position: 'Goalkeeper',
        number: 1,
        captain: false,
        teamId: '1',
        price: 80,
        rating: 88,
        imageUrl: 'https://b.fssta.com/uploads/application/soccer/headshots/1097.vresize.350.350.medium.17.png'
    },
    {
        id: '2',
        name: 'Jan Oblak',
        position: 'Goalkeeper',
        number: 13,
        captain: false,
        teamId: '1',
        price: 70,
        rating: 87,
        imageUrl: 'https://b.fssta.com/uploads/application/soccer/headshots/3678.png'
    },
    {
        id: '3',
        name: 'Alisson Becker',
        position: 'Goalkeeper',
        number: 13,
        captain: false,
        teamId: '2',
        price: 75,
        rating: 88,
        imageUrl: 'https://b.fssta.com/uploads/application/soccer/headshots/11280.vresize.350.350.medium.22.png'
    },
    {
        id: '4',
        name: 'Manuel Neuer',
        position: 'Goalkeeper',
        number: 1,
        captain: true,
        teamId: '3',
        price: 60,
        rating: 85,
        imageUrl: 'https://b.fssta.com/uploads/application/soccer/headshots/2257.vresize.350.350.medium.83.png'
    },
    {
        id: '5',
        name: 'Keylor Navas',
        position: 'Goalkeeper',
        number: 1,
        captain: false,
        teamId: '3',
        price: 40,
        rating: 83,
        imageUrl: 'https://b.fssta.com/uploads/application/soccer/headshots/1166.vresize.350.350.medium.18.png'
    },
    {
        id: '6',
        name: 'Virgil van Dijk',
        position: 'Defender',
        number: 4,
        captain: true,
        teamId: '1',
        price: 90,
        rating: 89,
        imageUrl: 'https://www.fifarosters.com/assets/players/fifa24/faces/203376.png'
    },
    {
        id: '7',
        name: 'Sergio Ramos',
        position: 'Defender',
        number: 4,
        captain: true,
        teamId: '2',
        price: 70,
        rating: 87,
        imageUrl: 'https://static.wikia.nocookie.net/dlls/images/6/68/SergioRamosProfile22.png/revision/latest/scale-to-width/360?cb=20220513162053'
    },
    {
        id: '8',
        name: 'Raphaël Varane',
        position: 'Defender',
        number: 5,
        captain: false,
        teamId: '3',
        price: 60,
        rating: 85,
        imageUrl: 'https://www.fifarosters.com/assets/players/fifa24/faces/201535.png'
    },
    {
        id: '9',
        name: 'Kalidou Koulibaly',
        position: 'Defender',
        number: 26,
        captain: false,
        teamId: '4',
        price: 65,
        rating: 84,
        imageUrl: 'https://img.a.transfermarkt.technology/portrait/big/93128-1697050549.png?lm=1'
    },
    {
        id: '10',
        name: 'Alessandro Bastoni',
        position: 'Defender',
        number: 95,
        captain: false,
        teamId: '4',
        price: 55,
        rating: 83,
        imageUrl: 'https://b.fssta.com/uploads/application/soccer/headshots/48753.png'
    },
    {
        id: '11',
        name: 'Kevin De Bruyne',
        position: 'Midfielder',
        number: 17,
        captain: false,
        teamId: '1',
        price: 120,
        rating: 91,
        imageUrl: 'https://b.fssta.com/uploads/application/soccer/headshots/2342.png'
    },
    {
        id: '12',
        name: 'Luka Modrić',
        position: 'Midfielder',
        number: 10,
        captain: true,
        teamId: '2',
        price: 60,
        rating: 88,
        imageUrl: 'https://static.wikia.nocookie.net/dlls/images/4/41/LModricProfile.png/revision/latest/scale-to-width/360?cb=20220515060307'
    },
    {
        id: '13',
        name: 'Bruno Fernandes',
        position: 'Midfielder',
        number: 18,
        captain: false,
        teamId: '3',
        price: 80,
        rating: 87,
        imageUrl: 'https://b.fssta.com/uploads/application/soccer/headshots/1593.vresize.350.350.medium.99.png'
    },
    {
        id: '14',
        name: 'Joshua Kimmich',
        position: 'Midfielder',
        number: 6,
        captain: false,
        teamId: '4',
        price: 85,
        rating: 88,
        imageUrl: 'https://sortitoutsidospaces.b-cdn.net/media/GBxvUyLKYLeXz7M5UOe2OmtMlyaqT96m5t9iZNi0.png'
    },
    {
        id: '15',
        name: 'Marco Verratti',
        position: 'Midfielder',
        number: 6,
        captain: false,
        teamId: '5',
        price: 70,
        rating: 85,
        imageUrl: 'https://www.fifarosters.com/assets/players/fifa24/faces/199556.png'
    },
    {
        id: '16',
        name: 'Lionel Messi',
        position: 'Forward',
        number: 30,
        captain: true,
        teamId: '1',
        price: 150,
        rating: 94,
        imageUrl: 'https://b.fssta.com/uploads/application/soccer/headshots/711.vresize.350.350.medium.24.png'
    },
    {
        id: '17',
        name: 'Cristiano Ronaldo',
        position: 'Forward',
        number: 7,
        captain: true,
        teamId: '2',
        price: 100,
        rating: 89,
        imageUrl: 'https://b.fssta.com/uploads/application/soccer/headshots/885.vresize.350.350.medium.19.png'
    },
    {
        id: '18',
        name: 'Kylian Mbappé',
        position: 'Forward',
        number: 7,
        captain: false,
        teamId: '3',
        price: 180,
        rating: 92,
        imageUrl: 'https://cdn.futwiz.com/assets/img/fc25/faces/231747.png'
    },
    {
        id: '19',
        name: 'Robert Lewandowski',
        position: 'Forward',
        number: 9,
        captain: false,
        teamId: '4',
        price: 120,
        rating: 91,
        imageUrl: 'https://b.fssta.com/uploads/application/soccer/headshots/2100.vresize.350.350.medium.7.png'
    },
    {
        id: '20',
        name: 'Erling Haaland',
        position: 'Forward',
        number: 9,
        captain: false,
        teamId: '5',
        price: 130,
        rating: 90,
        imageUrl: 'https://www.playmakerstats.com/img/jogadores/new/27/41/512741_erling_haaland_20240816210106.png'
    },
    {
        "id": "21",
        "name": "Lamine Yamal",
        "position": "Forward",
        "number": 11,
        "captain": false,
        "teamId": "6",
        "price": 80,
        "rating": 85,
        "imageUrl": "https://b.fssta.com/uploads/application/soccer/headshots/113441.png"
    },
    {
        "id": "22",
        "name": "Vinícius Júnior",
        "position": "Forward",
        "number": 20,
        "captain": false,
        "teamId": "2",
        "price": 150,
        "rating": 92,
        "imageUrl": "https://b.fssta.com/uploads/application/soccer/headshots/53004.vresize.350.350.medium.97.png"
    },
    {
        "id": "23",
        "name": "Jude Bellingham",
        "position": "Midfielder",
        "number": 5,
        "captain": false,
        "teamId": "2",
        "price": 140,
        "rating": 91,
        "imageUrl": "https://cdn.futwiz.com/assets/img/fc25/faces/252371.png"
    },
    {
        "id": "24",
        "name": "Pau Cubarsi",
        "position": "Defender",
        "number": 5,
        "captain": false,
        "teamId": "2",
        "price": 85,
        "rating": 87,
        "imageUrl": "https://www.playmakerstats.com/img/jogadores/new/54/45/1035445_pau_cubarsi_20240914123715.png"
    },
    {
        "id": "25",
        "name": "William Saliba",
        "position": "Defender",
        "number": 2,
        "captain": false,
        "teamId": "2",
        "price": 70,
        "rating": 85,
        "imageUrl": "https://www.zerozero.pt/img/jogadores/new/34/55/653455_william_saliba_20240817002832.png"
    },
    {
        "id": "26",
        "name": "Theo Hernandez",
        "position": "Defender",
        "number": 19,
        "captain": false,
        "teamId": "2",
        "price": 60,
        "rating": 86,
        "imageUrl": "https://b.fssta.com/uploads/application/soccer/headshots/42299.vresize.350.350.medium.79.png"
    },
    {
        "id": "27",
        "name": "James Rodríguez",
        "position": "Midfielder",
        "number": 10,
        "captain": false,
        "teamId": "2",
        "price": 50,
        "rating": 84,
        "imageUrl": "https://b.fssta.com/uploads/application/soccer/headshots/8370.png"
    },
    {
        "id": "28",
        "name": "Trent Alexander-Arnold",
        "position": "Defender",
        "number": 66,
        "captain": false,
        "teamId": "2",
        "price": 100,
        "rating": 88,
        "imageUrl": "https://sortitoutsidospaces.b-cdn.net/media/Tw323gOsw6EAh91GdRrG1sxWDdabm40DZGwjz5m2.png"
    }
];
const addPlayer = (req, res) => {
    const { name, position, number, captain, teamId, price, rating, imageUrl } = req.body;
    if (!name || !position || !number || !teamId || !price || !rating) {
        return res.status(400).json({ message: 'Missing required fields' });
    }
    const newPlayer = {
        id: String(players.length + 1),
        name,
        position,
        number: Number(number),
        captain: Boolean(captain),
        teamId,
        price: Number(price),
        rating: Number(rating),
        imageUrl: imageUrl || 'https://default-image-url.com/default.jpg'
    };
    players.push(newPlayer);
    res.status(201).json(newPlayer);
};
exports.addPlayer = addPlayer;
const updatePlayerById = (req, res) => {
    const { id } = req.params;
    const { name, position, number, captain, teamId } = req.body;
    const playerIndex = players.findIndex(player => player.id === id);
    if (playerIndex === -1) {
        res.status(404).json({ message: 'Player not found' });
    }
    else {
        players[playerIndex] = Object.assign(Object.assign({}, players[playerIndex]), { name, position, number, captain, teamId });
        res.json(players[playerIndex]);
    }
};
exports.updatePlayerById = updatePlayerById;
const deletePlayerById = (req, res) => {
    const { id } = req.params;
    const playerIndex = players.findIndex(player => player.id === id);
    if (playerIndex === -1) {
        res.status(404).json({ message: 'Player not found' });
        return;
    }
    players = players.filter(player => player.id !== id);
    res.status(200).json({
        message: 'Player deleted successfully',
    });
};
exports.deletePlayerById = deletePlayerById;
const getPlayerById = (req, res) => {
    const { id } = req.params;
    const player = players.find(player => player.id === id);
    if (!player) {
        res.status(404).json({ message: 'Player not found' });
    }
    else {
        res.json(player);
    }
};
exports.getPlayerById = getPlayerById;
const getPlayers = (req, res) => {
    res.json(players);
};
exports.getPlayers = getPlayers;
exports.default = {
    addPlayer: exports.addPlayer,
    updatePlayerById: exports.updatePlayerById,
    deletePlayerById: exports.deletePlayerById,
    getPlayerById: exports.getPlayerById,
    getPlayers: exports.getPlayers,
};
