type CardProps = {
    title: string;
    description: string;
}

function HomeCard({ title, description }: CardProps) {
    return (
        <div className="bg-yellow-500 p-4  rounded shadow-sm m-2">
            <h1 className="text-white text-center text-2xl font-bold">{title}</h1>
            <p className="text-white text-center mt-5">{description}</p>
            <br />
            <p className="text-white text-center">Click this box to see implementation of {title}</p>
        </div>
    )
}
export default HomeCard
