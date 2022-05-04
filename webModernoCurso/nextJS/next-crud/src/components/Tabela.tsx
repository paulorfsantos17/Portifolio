import Cliente from "../core/Cliente"
import { iconeEdicao, iconeLixo } from "./icones"

interface TableProps {
    clientes : Cliente[],
    clienteSelecionado?: (cliente : Cliente) => void,
    clienteExcluido?: (cliente : Cliente) => void,

}



export default function Tabela(props: TableProps) {
    
    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

    function renderizarCabecalho(){
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>  
                {exibirAcoes ?<th className="text-center p-4">Ações</th> : false} 
            </tr>
        )
    }
            
    function renderizarDados(){
        return props.clientes?.map((cliente, i) => {
            return (<tr key={cliente.Id}
                    className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                <td className="text-left p-4 text-black">{cliente.Id}</td>
                <td className="text-left p-4 text-black">{cliente.Nome}</td>
                <td className="text-left p-4 text-black">{cliente.Idade}</td>
                {exibirAcoes ? renderizarAcoes(cliente): false}
            </tr>)

        })

    }

    function renderizarAcoes(cliente : Cliente ){
        return (
            <td className="flex justify-center">
                {props.clienteSelecionado ? (
                    <button onClick={() => props.clienteSelecionado?.(cliente)}
                        className={`flex justify-center items-center
                                    text-green-600 rounded-full
                                    hover:bg-purple-50 p-2 m-1`}>
                        {iconeEdicao}
                     </button>
                ): false}

                {props.clienteExcluido ? (
                    <button  onClick={() => props.clienteExcluido?.(cliente)}
                         className={`flex justify-center items-center
                                text-red-600 rounded-full
                                hover:bg-purple-50 p-2 m-1`} >
                        {iconeLixo}
                    </button>
                ): false}
               
           
            </td>
        )
    }
    
    return (
        <table className={`w-full text-gray-100 rounded-xl overflow-hidden`}>
            <thead className={`
                 bg-gradient-to-r from-purple-400 to-purple-800`}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
           </tbody>
        </table>)
}