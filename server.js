let express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

let app = express();

mongoose.connect('mongodb://localhost/arcade');

let PlayerSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: [3, "name must be at least 3 characters"] }
}, { timestamps: true });

mongoose.model('Player', PlayerSchema);
let Player = mongoose.model('Player')

mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/arcadeangular/dist'));

class Game {
    constructor() {
        this.players = []
    }
}
class Playeruser {
    constructor(name, id) {
        this.name = name;
        this.socketid = id;
        this.addtolist();
    }

    addtolist() {
        game.players.push(this)
    }
}

var game = null;

app.post('/player', function (req, res) {
    console.log('POST DATA');
    Player.findOne({ name: req.body.name }, function (err, player) {
        if (player) {
            console.log("player exists")
            res.json({ message: 'Success', data: player })
        } else {
            console.log("new player")
            var player = new Player();
            // console.log("12312412312", req.body)
            player.name = req.body.name;
            // player.socketid = req.body.socketid;
            player.save(function (err) {
                if (err) {
                    res.json({ message: 'Error', error: player.errors })
                } else {
                    res.json({ message: 'Success', data: player })
                }
            })
        }

        // // console.log(req.body)
        // if (game.players.length == 0) {
        //     //console.log("++++++++++++++++++")
        //     console.log("Player 1 is:", player.name)
        //     const player1 = new Playeruser(player.name, req.body.socketid)
        //     //console.log("[[[[[[[[[[[[[")
        //     //console.log(player1)
        //     //console.log("[[[[[[[[[[[[[")

        // }
    })
})


// Catch 'other' routes
app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./arcadeangular/dist/index.html"))
});

let port = 8000
let server = app.listen(port, function () {
    console.log(port);
})

let io = require('socket.io').listen(server);

io.sockets.on('connection', (socket) => {

    socket.emit('init', { 
        socketid: socket.id 
    });
    console.log("Socket has connected at ", socket.id);

    socket.broadcast.emit('other: connection', { 
        message: 'hello friends!' 
    });

    socket.on('message', function (data) {
        console.log(data)
        socket.emit('message', { 
            message: data 
        });
    })

    socket.on('disconnect', function () {
        console.log("a player has disconnected")
    })


})