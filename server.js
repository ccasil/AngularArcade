let express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    session = require('express-session')

let app = express();

mongoose.connect('mongodb://localhost/AngularArcade');

let PlayerSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: [3, "name must be at least 3 characters"] }
}, { timestamps: true });

mongoose.model('Player', PlayerSchema);
let Player = mongoose.model('Player')

mongoose.Promise = global.Promise;

app.use(session({secret: 'myname'}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/AngularArcadeAngular/dist'));

app.post('/player', function (req, res) {
    console.log('POST DATA');
    Player.findOne({ name: req.body.name }, function (err, player) {
        // console.log("[[[[[[[[[[[[[[[[[[[[[")
        // console.log(req.body)
        // console.log("]]]]]]]]]]]]]]]]")
        if (player) {
            console.log("player exists")
            res.json({ message: 'Success', data: player })
        } else {
            console.log("new player")
            var player = new Player();
            //console.log("12312412312", req.body)
            player.name = req.body.name;

            player.save(function (err) {
                if (err) {
                    res.json({ message: 'Error', error: player.errors })
                } else {
                    res.json({ message: 'Success', data: player })
                }
            })
        }
    })
})


// Catch 'other' routes
app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./AngularArcadeAngular/dist/index.html"))
});

let port = 8000;
let server = app.listen(port, function () {
    console.log("listening on port 8000");
})

let io = require('socket.io').listen()

io.sockets.on('connection', (socket) => {

    socket.emit('initial', { socketid: socket.id });
    console.log("Socket has connected at ", socket.id);

    socket.broadcast.emit('other:connection', { message: 'hello friends!' });

    socket.on('message', function (data) {
        console.log(data)
    })

    socket.on("disconnect", function () {
        console.log("a player has disconnected")
    })

    socket.on("broadcasting", function () {
        // console.log("here in server broadcasting")
        // console.log(game.players)
        startgame();
        io.emit('broadcast', { allplayers: game.players })
    })

    socket.on("clear", function () {
        cleargame(game);
    })

})
