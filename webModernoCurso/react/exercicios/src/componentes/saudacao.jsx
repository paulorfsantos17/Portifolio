import React, {Component} from "react";

export default class Saudacao extends Component {

    constructor(props) {
        super(props)

        this.setTipo = this.setTipo.bind(this)
        this.setNome = this.setNome.bind(this)
        
    }
    state = {
        tipo : this.props.tipo,
        nome: this.props.nome
    }

 

    setTipo(e) {
        this.setState({tipo:  e.target.value})
    }
    setNome(e) {
        this.setState({nome : e.target.value})
    }
    render() {
        const {tipo , nome} = this.state
        return (
            <div> 
                {tipo} {nome}!
                <hr />
                <input type="text" placeholder="Tipo..." value={tipo} onChange={this.setTipo}/>
                <input type="text" placeholder="Nome..." value={nome} onChange={ this.setNome} />
            </div>
        )
    }

}