import clienteRepositorio from "../../core/ClienteRepositorio";
import firebase from "../config";


import Cliente from "../../core/Cliente";

export default class ColecaoCliente implements clienteRepositorio{

    private conversor = {
        toFirestore(cliente : Cliente) {
            return {
                nome : cliente.Nome,
                idade : cliente.Idade,

            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions){
            const dados = snapshot.data(options)
            return new Cliente(dados.nome, dados.idade, snapshot.id)
        }
    }

    async salvar(cliente : Cliente): Promise<Cliente> {
        if(cliente?.Id){
            await this.colecao().doc(cliente.Id).set(cliente)
            return cliente
        } else {
            const docReference =  await this.colecao().add(cliente)
            const doc = await docReference.get()
            return doc.data()
        }
        return null
    }

    async excluir(cliente : Cliente): Promise<void>{
        return this.colecao().doc(cliente.Id).delete()
    }

    async obterTodos(cliente : Cliente): Promise<Cliente[]>{
        const query = await this.colecao().get()
        return query.docs.map(doc => doc.data()) ?? []
    }

    colecao (){
        return firebase.firestore().collection('clientes').withConverter(this.conversor)
    }
    

    
    
}