import io from "socket.io-client";

let socket;

export const initiateSocket = () => {
  console.log(`Connecting socket...`);
  socket = io("http://localhost:3001", {
    transports: ["websocket"],
  });

  socket.on("connect", () => console.log("Connected!"));
};

export const send = (color) => {
  socket.emit("newColor", color);
};

export const subscribe = (cb) => {
  socket.on("receive", (color) => {
    console.log("Color received: ", color);
    cb(color);
  });
};
