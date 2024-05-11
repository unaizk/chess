import React from "react"


const Button = ({onClick, children} : {onClick : () => void, children : React.ReactNode}) => {
  return (
    <button onClick={onClick} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        {children}
    </button>
  )
}

export default Button