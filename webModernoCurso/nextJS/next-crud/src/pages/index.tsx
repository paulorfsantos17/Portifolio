
import Botao from "../components/Botao"
import Formulario from "../components/Formulario"
import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import useClientes from "../hooks/useClientes" 

export default function Home() {
 

  const {
    novoCliente,
    clienteSelecionado,
    excluirCliente,
    salvarCliente,
    cliente,
    clientes,
    tabelaVisivel
    ,exibirTabela
  } = useClientes()
  
  return (
    <div className={`flex justify-center items-center h-screen
         bg-gradient-to-r from-blue-500 to-purple-500
        text-white
    `}>
      
        <Layout tittle="Cadastro Simples">
          {tabelaVisivel? (
              <>
              <div className="flex justify-end">
                  <Botao onClick={() => novoCliente()} cor="from-blue-400 to-blue-800" className="mb-4">
                    Novo Cliente
                    </Botao>
              </div>
              <Tabela 
                  clientes={clientes} 
                  clienteSelecionado={clienteSelecionado}
                  clienteExcluido={excluirCliente}>  
              </Tabela>
          </>
          ): (
            <Formulario
                cancelado={()=> exibirTabela()}
                cliente={cliente}
                clienteMudou={salvarCliente}>
            </Formulario>
          )}
          
         
        </Layout>
  

     </div>
  )
}
