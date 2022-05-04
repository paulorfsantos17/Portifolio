import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface formularioProps {
    cliente : Cliente,
    cancelado?: () => void,
    clienteMudou?: (cliente : Cliente) => void
}

export default function Formulario (props : formularioProps ){
    const id = props.cliente?.Id
    const [nome,setNome] = useState(props.cliente?.Nome ?? '')
    const [idade,setIdade] = useState(props.cliente?.Idade ?? 0)


    return (
        <div>
            {
                id ?   (
                <Entrada
                    texto="Código"  
                    valor={id}
                    somenteLeitura
                    className="mb-4">
                </Entrada>
                ): false
            }
            <Entrada
                texto="Nome"  
                valor={nome} 
                valorMudou={setNome}
                className="mb-4">
            </Entrada>
            <Entrada 
                texto="Idade"  
                valor={idade} 
                tipo="number" 
                valorMudou={setIdade}>
            </Entrada>
            <div className="mt-7 flex justify-end">
                <Botao cor="from-green-400 to-green-800"
                    className="mr-2" 
                    onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}>
                        {id ? "Alterar" : "Salvar"}
                    </Botao>
                <Botao cor="from-gray-400 to-gray-800"
                    onClick={props.cancelado}>
                        Cancelar
                    </Botao>
            </div>
        </div>
    )
}