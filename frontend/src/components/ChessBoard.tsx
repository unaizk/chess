import { Chess, Color, PieceSymbol, Square } from "chess.js";
import { useState } from "react";
import { MOVE } from "../messages/message";


const ChessBoard = ({chess, board,socket, setBoard} : {
  chess : any
  board : ({
    square : Square,
    type : PieceSymbol,
    color : Color
  } | null)[][],
  socket : WebSocket,
  setBoard : any
}) => {

  const [from,setFrom] = useState<null | Square>(null);
  const [to,setTo] = useState<null | Square>(null)
  return (
    <div className="text-white-200">
      {board.map((row,i) =>{
        return <div key={i} className="flex">
          {row.map((square,j) =>{
            const squareRepresentation = String.fromCharCode(97+(j%8)) + "" + (8-i) as Square
            return <div onClick={() =>{
              if(!from){
                setFrom(squareRepresentation)
              }else{
                
                socket.send(JSON.stringify({
                  type : MOVE,
                  payload : {
                    move : {
                      from, 
                      to : squareRepresentation
                    }
                  }
                }))

                setFrom(null);
                chess.move({
                  from, 
                  to : squareRepresentation
                })
                setBoard(chess.board())
              }
            }} key={j} className={`w-16 h-16 ${(i+j)%2 ===0 ? 'bg-slate-500' : 'bg-white'}`}>
              <div className="flex justify-center h-full">
                <div className="flex flex-col justify-center h-full">
                  {square? square.type : ""}
                </div>
              </div>
            </div>
          })}
        </div>
      })}
    </div>
  )
}

export default ChessBoard