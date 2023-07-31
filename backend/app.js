const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: {
    // Allow communication with the frontend
    origin: "*",
  },
});
const port = 3000; // Change this to your desired port
const cors = require("cors");

app.use(cors());

// Enable CORS (Cross-Origin Resource Sharing) to allow communication with the frontend
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

io.on("connection", (socket) => {
  // Event handler for incoming transcription data from the frontend
  socket.on("transcription", (data) => {
    console.log("Transcription:", data);
    // Here you can further process or store the transcription data as per your needs
  });
});

http.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
