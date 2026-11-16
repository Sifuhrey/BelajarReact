import { Link } from 'react-router-dom';
import './App.css'

type CardProps = {
    title: string;
    description: string;
    route?: string; // Optional route prop
}

function Card({ title, description, route }: CardProps) {
    return(
        <div className="bg-yellow-500 p-4 min-h-3/4 w-1/4 rounded shadow-sm m-2">
            <h1 className="text-white text-center text-2xl font-bold">{title}</h1>
            <p className="text-white text-center mt-5">{description}</p>
            <Link to={route ?? "/"} className="bg-gray-500 rounded px-4 py-2 text-white hover:bg-gray-600 mt-5 block text-center">
                Go to {title} Page
            </Link>
        </div>
    )
}
export default Card