import React from "react";
import Main from "../template/Main"

const home = props=> (
    <Main icon="home"  title="Início"
    subtitle="Segundo Projeto do capítulo React" >
    <div className="display-4">Bem Vindo!!</div>
    <hr></hr>
    <p className="mb-0">Sistema para exemplificar a contrução de um
        Cadastro desenvolvido em React!</p>

</Main>

)

export default home