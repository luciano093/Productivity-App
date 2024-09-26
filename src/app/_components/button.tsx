import React from "react"

interface ButtonProps {
    message: string;
}
const Button: React.FC<ButtonProps> = ({message}) => {
    return (
        <button className="bg-blue-700 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded">
        {message}
        </button>
    )
}

export default Button;
