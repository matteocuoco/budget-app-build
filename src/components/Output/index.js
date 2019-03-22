import React, { Component } from 'react';

class Output extends Component {

    render() {
        
        var valoreBudget = 0;
        valoreBudget = JSON.parse(localStorage.getItem('budget'));

        if ( localStorage.getItem('listaSpese') ) {
            
            var nomeHtml = '';
            var nomeParagraphs = [];
            var spesaHtml = '';
            var spesaParagraphs = [];
            var spesaTotale = '';
            var spesaImporti = [];
            var residuo = 0;
            var totaleSpese = 0;

            const listaSpese = JSON.parse(localStorage.getItem('listaSpese'));
            for ( let i = 0; i < listaSpese.length; i = i + 2 ) {
                nomeParagraphs.push(`<p>${listaSpese[i]}</p>`);
            };
            for ( let i = 1; i < listaSpese.length; i = i + 2 ) {
                spesaParagraphs.push(`<p>${listaSpese[i]}</p>`);
            }
            for ( let i = 1; i < listaSpese.length; i = i + 2 ) {
                spesaImporti.push(`${listaSpese[i]}`);
            }

            nomeHtml = nomeParagraphs.join('');
            spesaHtml = spesaParagraphs.join('');
            spesaTotale = spesaImporti.join('+');

             //eslint-disable-next-line
            totaleSpese = eval(spesaTotale);  
            residuo = valoreBudget - totaleSpese;

        }


        return (
            <div>
                <h3>Riepilogo</h3>                
                <div className="container-fluid">
                    <div className="row justify-content-md-center">
                        <div className="col-6">
                            <h5>Spesa</h5>
                            <div dangerouslySetInnerHTML={{
                                __html: nomeHtml
                            }}>
                            </div>
                        </div>
                        <div className="col-6">
                            <h5>Importo</h5>
                            <div dangerouslySetInnerHTML={{
                                __html: spesaHtml
                            }}>
                            </div>
                        </div>
                   </div> 
                   <div className="row justify-content-md-center">
                        <div className="col-sm-8">
                            <h3>Totale</h3> 
                        </div>
                    </div> 
                    <div className="row justify-content-md-center">                        
                        <div className="col-sm-4">
                            <div className="card">
                                <h5 className="card-header">Budget</h5>
                                <div className="card-body">
                                    <h5 className="card-title">Il mio patrimonio</h5>
                                    <p className="card-text">{valoreBudget}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <h5 className="card-header">Spese</h5>
                                <div className="card-body">
                                    <h5 className="card-title">Le mie uscite</h5>
                                    <p className="card-text">{totaleSpese}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <h5 className="card-header">Residuo</h5>
                                <div className="card-body">
                                    <h5 className="card-title">I miei risparmi</h5>
                                    <p className="card-text" id="residuo">{residuo}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Output;