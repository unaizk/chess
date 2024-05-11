import { Navigate } from "react-router-dom"
import Button from "../components/Button"
import ChessBoard from "../components/ChessBoard"


const Game = () => {
  return (
    <div className="flex justify-center">
      <div className="pt-8 max-w-screen-lg w-full">
          <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-8 ">
                  <ChessBoard />
              </div>
              <div className="col-span-12 md:col-span-4 ">
                <Button onClick={() =>{}}>
                  Play
                </Button>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Game