const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors()); // Allow CORS for all origins

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    // '*' Allow all origins by or set specific allowed origins,
    // for example - 'http://localhost:3000',
    // or ['http://localhost:3000', 'http://example.com', 'http://another-allowed-origin.com']
    origin: '*',
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

let activeSessions = 0;

io.on('connection', (socket) => {
  activeSessions++;
  io.emit('activeSessions', activeSessions);

  socket.on('disconnect', () => {
    activeSessions--;
    io.emit('activeSessions', activeSessions);
  });
});

app.get('/', (req, res) => {
  res.status(200).send();
});

const PORT = 4000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
