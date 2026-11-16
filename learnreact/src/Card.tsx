
import './App.css'

type CardProps = {
    title: string;
    description: string;
    route?: string; // Optional route prop
}

function Card({ title, description}: CardProps) {
    return(
        <div className="bg-yellow-500 p-4  rounded shadow-sm m-2">
            <h1 className="text-white text-center text-2xl font-bold">{title}</h1>
            <p className="text-white text-center mt-5">{description}</p>
            
        </div>
    )
}
export default Card