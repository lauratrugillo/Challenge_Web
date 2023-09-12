export default function Cadastro(){

    return(
        <main>
            <h1>Cadastro</h1>

            <h3>Ligamos para você</h3>
            <h4>Sua Bicicleta</h4>

            <form action="#" method="POST">
            
                <input type="text" id="valorBicicleta" name="valorBicicleta" placeholder="Qual o valor da sua bicicleta?" required ><br><br>
            
                <input type="text" id="nome" name="nome" placeholder="Nome" required><br><br>

                <input type="text" id="email" name="email" placeholder="E-mail" required><br><br>

                <input type="text" id="telefone" name="telefone" placeholder="Telefone para contato" required><br><br>

                <input type="text" id="cpf" name="cpf" placeholder="CPF" required><br><br>

                <input type="text" id="cep" name="cep" placeholder="CEP" required><br><br>

                <button type="submit">Continuar</button>

            </form>
        </main>
    )
}
