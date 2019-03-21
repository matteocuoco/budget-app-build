import React, { Component } from 'react';

class Input extends Component {

    constructor(props) {
        super(props);
        this.state = {
            budget: 0,
            nome: '',
            spesa: 0
        }

        this.handleChangeBudget = this.handleChangeBudget.bind(this);
        this.handleSubmitBudget = this.handleSubmitBudget.bind(this);
        this.handleChangeNome = this.handleChangeNome.bind(this);
        this.handleChangeSpesa = this.handleChangeSpesa.bind(this);
        this.handleSubmitSpesa = this.handleSubmitSpesa.bind(this);
    }

    handleChangeBudget(event) {
        this.setState({
            budget: event.target.value
        });
    }

    handleSubmitBudget(event) {
        localStorage.setItem('budget',this.state.budget);
    }

    handleChangeNome(event) {
        this.setState({
            nome: event.target.value
        });
    }

    handleChangeSpesa(event) {
        this.setState({
            spesa: event.target.value
        });
    }

    handleSubmitSpesa(event) {
        if ( !localStorage.getItem('listaSpese') ) {
            localStorage.setItem('listaSpese', JSON.stringify([this.state.nome, this.state.spesa]));
        } else {
            const oldListaSpese = JSON.parse(localStorage.getItem('listaSpese'));
            localStorage.setItem('listaSpese', JSON.stringify([...oldListaSpese, this.state.nome, this.state.spesa]));
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmitBudget}>
                    <h3>Il mio budget</h3>
                    <div className="row justify-content-md-center">
                        <div className="col-sm-4">
                            <input
                                type="number"
                                className="form-control"
                                id="input-budget"
                                placeholder="Inserire il budget"
                                value={this.state.value}
                                onChange={this.handleChangeBudget}
                            />
                        </div>
                        <div className="col-sm-4">
                            <button type="submit" className="btn btn-primary btn-sm btn-block">Invia</button>
                        </div>
                    </div>
                </form>
                <form onSubmit={this.handleSubmitSpesa}>
                    <h3>Le mie spese</h3>
                    <div className="row justify-content-md-center">
                        <div className="col-sm-4">
                            <input
                                type="text"
                                className="form-control"
                                id="input-nome"
                                placeholder="Inserire la spesa"
                                value={this.state.value}
                                onChange={this.handleChangeNome}
                            />
                        </div>
                        <div className="col-sm-4">
                            <input
                                type="number"
                                className="form-control"
                                id="input-spesa"
                                placeholder="Inserire l'importo"
                                value={this.state.value}
                                onChange={this.handleChangeSpesa}
                            /> 
                        </div>
                    </div>
                    <div className="row justify-content-md-center">
                        <div className="col-sm-8">
                            <button type="submit" className="btn btn-primary btn-sm btn-block">Invia</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Input;