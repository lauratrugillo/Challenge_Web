import Carousel from '../../components/Carousel'
import { Link } from 'react-router-dom'

export default function Home(){

    return(
        <main>
            <Carousel />

            <div class='container3'>
            <br />
            <br />
            <h2>Porto Seguro Bike</h2>
            <br />
            <p>Mais do que um seguro Para Bicicleta, uma Solução Completa que Oferece Proteção e Serviços. <br />
            Sua Bike Segura. Contrate Agora.</p>
            <br />
            <Link to='/seguro'><button>Venha conferir</button></Link>
            <br />
            <br />
            
        </div>
        </main>
    )
}