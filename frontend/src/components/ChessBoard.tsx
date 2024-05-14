import { Color, PieceSymbol, Square } from "chess.js";


const ChessBoard = ({board} : {
  board : ({
    square : Square,
    type : PieceSymbol,
    color : Color
  } | null)[][]
}) => {
  return (
    <div className="text-white-200">
      {board.map((row,i) =>{
        return <div key={i} className="flex">
          {row.map((square,j) =>{
            return <div key={j} className={`w-16 h-16 ${(i+j)%2 ===0 ? 'bg-slate-500' : 'bg-white'}`}>
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