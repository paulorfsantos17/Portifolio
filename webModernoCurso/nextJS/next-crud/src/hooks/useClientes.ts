import Cliente from "../core/Cliente"
import clienteRepositorio from "../core/ClienteRepositorio"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import { useState, useEffect } from "react"
import useTabelaouForm from "./useTabelaouForm"

export default function useClientes(){
    const repo : clienteRepositorio = new ColecaoCliente()
    const {tabelaVisivel, exibirFormulario, exibirTabela} = useTabelaouForm()

  
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])
    
  
    useEffect(obterTodos,[])
  
    function obterTodos(){
      repo.obterTodos().then(clientes => {
        setClientes(clientes)
        exibirTabela()
      })
      
      
    }
  
    function clienteSelecionado(cliente: Cliente){
      setCliente(cliente)
      exibirFormulario()
  
    }
  
   async function excluirCliente(cliente: Cliente){
      await repo.excluir(cliente) 
      obterTodos()
  
    }
    async function salvarCliente(cliente : Cliente){
      await repo.salvar(cliente)
      obterTodos()
    }
  
    function novoCliente(){
      setCliente(Cliente.vazio())
      exibirFormulario()
    }

    return {
        tabelaVisivel,
        exibirTabela,
        cliente,
        clientes,
        obterTodos,
        novoCliente,
        salvarCliente,
        excluirCliente,
        clienteSelecionado
    }
  

}