module.exports = function(io, socket){
  // inform all socket clients of new user
  io.emit('chatMessage', {
    type: 'status',
    text: 'connected',
    created: Date.now(),
    username: socket.request.user.username
  });

  /* event handler for chatMessage from client ->
     inform all socket clients of message */
  socket.on('chatMessage', (message)=>{
    message.type = 'message';
    message.created = Date.now();
    message.username = socket.request.user.username;

    io.emit('chatMessage', message);
  });

  /* event handler for disconnect from client ->
     inform all socket clients */
  socket.on('disconnect', ()=>{
    io.emit('chatMessage', {
      type: 'status',
      text: 'disconnected',
      created: Date.now(),
      username: socket.request.user.username
    });
  });
}
