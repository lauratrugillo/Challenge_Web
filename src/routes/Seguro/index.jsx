import fundo from '../../img/plano_fundo_2.png'
import check from '../../img/check.png'
import exclamacao_icon from '../../img/exclamacao_icon.png'
import acidente_icon from '../../img/acidente_icon.png'
import bicicleta_icon from '../../img/bicicleta_icon.png'
import grupo_icon from '../../img/grupo_icon.png'
import { Link } from "react-router-dom"

export default function Seguro(){

    return(
        <main>
        <div class="container">
            <img src={fundo} id='fundo2'/>
            <div class="overlay">
                <h1>Quem tem Porto, tem <br />mais tranquilidade <br />para pedalar</h1><br />
                <div class="container2">
                    <img src={check} alt="" id='check' /><h2>Porto Seguro Bike</h2>
                </div>
                <br />
                <p>Mais do que um seguro para bicicleta, uma solução <br />
                completa que oferece proteção e serviços para você <br />
                se aventurar sem medo.</p><br />
                <Link to='/seguro/cadastro'><button>Faça uma cotação</button></Link>
            </div>
        </div>
        <br />

        <div class='container3'>
            <h2>Com o Porto Seguro Bike, você escolhe as <br />coberturas de acordo com as suas <br />necessidades.</h2>
            <br />
            <p>São diversas coberturas para você <br />
            só se preocupar em pedalar:</p>
        </div>

        <div class="card-container">
            <div class="card">
                <img src={exclamacao_icon} alt="Card 1" />
                <h2>Danos a bike</h2>
            </div>
            <div class="card">
                <img src={bicicleta_icon} alt="Card 2"/>
                <h2>Roubo</h2>
            </div>
            <div class="card">
                <img src={acidente_icon} alt="Card 3"/>
                <h2>Acidentes pessoais</h2>
            </div>
            <div class="card">
                <img src={grupo_icon} alt="Card 4"/>
                <h2>Danos a terceiros</h2>
            </div>
        </div>
        </main>
    )
}