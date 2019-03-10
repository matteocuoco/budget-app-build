import React, { Component } from 'react';

class Input extends Component {

    constructor(props) {
        super(props);
        this.state = {
            budget: 0
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        /*this.setState({
            budget: event.target.value
        });*/
        console.log(event.target.value);
    }

    render() {
        return (
            <div>
                <form>
                    <div className="row justify-content-md-center">
                        <div className="col-sm-8">
                            <h3>Il mio budget</h3>
                            <input
                                type="number"
                                className="form-control"
                                id="input-budget"
                                placeholder="Inserire il budget"
                                value={this.state.value}
                                onChange={this.handleChange}
                            />
                            <button type="submit" className="btn btn-primary btn-sm btn-block">Invia</button>
                        </div>
                    </div>
                </form>
                <form>
                    <div className="row justify-content-md-center">
                        <div className="col-sm-8">
                            <h3>Le mie spese</h3>
                            <input type="number" className="form-control" id="input-budget" placeholder="Inserire le spese" />
                            <button type="submit" className="btn btn-primary btn-sm btn-block">Invia</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Input;