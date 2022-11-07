import { useRef, useEffect } from "react";
import { io } from "socket.io-client";

export default function useSocket(handleNewMessage) {
  const socket = useRef();

  const uri = "localhost:5000";

  function getSocket() {
    socket.current = io(uri, {
      transports: ['websocket'],
    })
  }

  const handleOnMessage = message => {
    handleNewMessage(message)
    // store.dispatch here if add
  }

  useEffect(() => {
    getSocket();

    socket.current.onopen =  () => {
      console.log("opened connection");
    };

    socket.current.onclose = () => {
      console.log("closed connection");
    };

    socket.current.on('pushdata', handleOnMessage)


    socket.current.onerror = function (event) {
      console.error("error: " + event);
    };

    return () => {
      socket.current.close();
    };
  }, [handleNewMessage]);

  return socket.current;
}
