import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">🍋 Bill Split 🥲</h1>
                    <p className="py-6">Separa la cuenta mas rapido</p>
                    <Link to={'/new-bill'}className="btn btn-primary">Agregar cuenta</Link>
                </div>
            </div>
        </div>
    )
}

export default Home