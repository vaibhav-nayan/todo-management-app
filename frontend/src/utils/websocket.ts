// src/utils/websocket.ts
let socket: WebSocket | null = null;

export const connectWebSocket = (url: string) => {
  socket = new WebSocket(url);

  socket.onopen = () => console.log('WebSocket connected');
  socket.onmessage = (e) => console.log('Message:', e.data);
  socket.onclose = () => console.log('WebSocket closed');
  socket.onerror = (e) => console.error('WebSocket error:', e);
};

export const sendMessage = (msg: string) => {
  if (socket?.readyState === WebSocket.OPEN) {
    socket.send(msg);
  } else {
    console.error('WebSocket not open');
  }
};

export const closeWebSocket = () => {
  if (socket) {
    socket.close();
    socket = null;
  }
};