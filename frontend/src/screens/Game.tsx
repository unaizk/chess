import { Chess } from "chess.js";
import { useEffect, useState } from "react";
import Button from "../components/Button"
import ChessBoard from "../components/ChessBoard"
import useSocket from "../hooks/useSocket"
import { GAME_OVER, INIT_GAME, MOVE } from "../messages/message";






const Game = () => {
  const socket = useSocket()
  const [chess, setChess] = useState(new Chess());
  const [board, setBoard] = useState(chess.board())
  useEffect(() =>{
    if(!socket){
      return
    }
    socket.onmessage = (event) =>{
      const message = JSON.parse(event.data);

      switch (message.type){
        case INIT_GAME:
              setChess(new Chess());
              setBoard(chess.board())
             break;
        case MOVE:
              const move = message.payload;
              chess.move(move);
              setBoard(chess.board())
              break;
        case GAME_OVER:
            break;
      }
    }
  },[socket])
  

  if(!socket){
    return(
      <div>
        Connecting.....
      </div>
    )
  }
  return (
    <div className="flex justify-center">
      <div className="pt-8 max-w-screen-lg w-full">
          <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-8 flex justify-center ">
                  <ChessBoard chess={chess} setBoard={setBoard} socket={socket} board={board}/>
              </div>
              <div className="col-span-12 bg-slate-900 md:col-span-4 flex justify-center ">
                <div className="pt-8">
                  <Button onClick={() =>{
                    socket.send(JSON.stringify({
                      type : INIT_GAME
                    }))
                  }}>
                    Play
                  </Button>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Game