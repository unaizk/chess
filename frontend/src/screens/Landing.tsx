import { useNavigate } from "react-router-dom"
import Button from "../components/Button"

const Landing = () => {
    const navigate = useNavigate()
  return (
    <div className="pt-10 flex justify-center">
         <div className="grid grid-cols-1 gap-4 md:grid-cols-2 max-w-screen-lg">
            <div className="flex justify-center">
                <img src="./chessBoard.jpeg" className="max-w-96" />
            </div>
            <div>
                <div className="flex justify-center">
                    <h1 className="text-4xl font-bold text-white text-center pt-11">
                        Play Chess Online on the #2 site! 
                    </h1>
                </div>
                
                <div className="mt-4 flex justify-center">
                   <Button onClick={() =>{navigate('/game')}}>
                        Play Online
                    </Button>
                </div>

            </div>
        </div>
    </div>
   
  )
}

export default Landing