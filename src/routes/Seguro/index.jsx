import fundo from '../../img/plano_fundo_2.png'
import check from '../../img/check.png'

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
                <button>Faça uma cotação</button>
            </div>
        </div>
        <br />
        <div class='container3'>
        <h2>Com o Porto Seguro Bike, você escolhe as <br />coberturas de acordo com as suas <br />necessidades.</h2>
        <br />
        <p>São diversas coberturas para você <br />
        só se preocupar em pedalar:</p>

        </div>
        </main>
    )
}