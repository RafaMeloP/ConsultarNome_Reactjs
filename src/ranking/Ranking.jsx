import React from 'react';
export default class Ranking extends React.Component {
    state = {
        url: 'https://servicodados.ibge.gov.br/api/v2/censos/nomes/ranking',
        nome0: "",
        frequencia0: "",
        nome1: "",
        frequencia1: "",
        nome2: "",
        frequencia2: "",
        nome3: "",
        frequencia3: "",
        nome4: "",
        frequencia4: "",
        nome5: "",
        frequencia5: "",
        nome6: "",
        frequencia6: "",
        nome7: "",
        frequencia7: "",
        nome8: "",
        frequencia8: "",
        nome9: "",
        frequencia9: "",
        nome10: "",
        frequencia10: "",
        nome11: "",
        frequencia11: "",
        nome12: "",
        frequencia12: "",
        nome13: "",
        frequencia13: "",
        nome14: "",
        frequencia14: "",
        nome15: "",
        frequencia15: "",
        nome16: "",
        frequencia16: "",
        nome17: "",
        frequencia17: "",
        nome18: "",
        frequencia18: "",
        nome19: "",
        frequencia19: ""
    }
    pesquisa = (url) => {
        fetch(url).then(res => res.json()).then(res =>
            res.map(item =>
                item.res.map(resp => {
                    var nome = resp.ranking;
                    switch (nome) {
                        case 1: this.setState({ nome0: resp.nome, frequencia0: resp.frequencia }); break;
                        case 2: this.setState({ nome1: resp.nome, frequencia1: resp.frequencia }); break;
                        case 3: this.setState({ nome2: resp.nome, frequencia2: resp.frequencia }); break;
                        case 4: this.setState({ nome3: resp.nome, frequencia3: resp.frequencia }); break;
                        case 5: this.setState({ nome4: resp.nome, frequencia4: resp.frequencia }); break;
                        case 6: this.setState({ nome5: resp.nome, frequencia5: resp.frequencia }); break;
                        case 7: this.setState({ nome6: resp.nome, frequencia6: resp.frequencia }); break;
                        case 8: this.setState({ nome7: resp.nome, frequencia7: resp.frequencia }); break;
                        case 9: this.setState({ nome8: resp.nome, frequencia8: resp.frequencia }); break;
                        case 10: this.setState({ nome9: resp.nome, frequencia9: resp.frequencia }); break;
                        case 11: this.setState({ nome10: resp.nome, frequencia10: resp.frequencia }); break;
                        case 12: this.setState({ nome11: resp.nome, frequencia11: resp.frequencia }); break;
                        case 13: this.setState({ nome12: resp.nome, frequencia12: resp.frequencia }); break;
                        case 14: this.setState({ nome13: resp.nome, frequencia13: resp.frequencia }); break;
                        case 15: this.setState({ nome14: resp.nome, frequencia14: resp.frequencia }); break;
                        case 16: this.setState({ nome15: resp.nome, frequencia15: resp.frequencia }); break;
                        case 17: this.setState({ nome16: resp.nome, frequencia16: resp.frequencia }); break;
                        case 18: this.setState({ nome17: resp.nome, frequencia17: resp.frequencia }); break;
                        case 19: this.setState({ nome18: resp.nome, frequencia18: resp.frequencia }); break;
                        case 20: this.setState({ nome19: resp.nome, frequencia19: resp.frequencia }); break;
                    }
                })
            )
        )
    }
    render() {
        return (
            <div>
                {this.pesquisa(this.state.url)}
                <h3>Ranking por frequência</h3>
                <br />
                <hr />
                <h4><strong>1º</strong> {this.state.nome0}</h4>
                <p><strong>Frequência: </strong>{this.state.frequencia0}</p>
                <hr/>
                <h4><strong>2º</strong> {this.state.nome1}</h4>
                <p><strong>Frequência: </strong>{this.state.frequencia1}</p>
                <hr/>
                <h4><strong>3º</strong> {this.state.nome2}</h4>
                <p><strong>Frequência: </strong>{this.state.frequencia2}</p>
                <hr/>
                <h4><strong>4º</strong> {this.state.nome3}</h4>
                <p><strong>Frequência: </strong>{this.state.frequencia3}</p>
                <hr/>
                <h4><strong>5º</strong> {this.state.nome4}</h4>
                <p><strong>Frequência: </strong>{this.state.frequencia4}</p>
                <hr/>
                <h4><strong>6º</strong> {this.state.nome5}</h4>
                <p><strong>Frequência: </strong>{this.state.frequencia5}</p>
                <hr/>
                <h4><strong>7º</strong> {this.state.nome6}</h4>
                <p><strong>Frequência: </strong>{this.state.frequencia6}</p>
                <hr/>
                <h4><strong>8º</strong> {this.state.nome7}</h4>
                <p><strong>Frequência: </strong>{this.state.frequencia7}</p>
                <hr/>
                <h4><strong>9º</strong> {this.state.nome8}</h4>
                <p><strong>Frequência: </strong>{this.state.frequencia8}</p>
                <hr/>
                <h4><strong>10º</strong> {this.state.nome9}</h4>
                <p><strong>Frequência: </strong>{this.state.frequencia9}</p>
                <hr/>
                <h4><strong>11º</strong> {this.state.nome10}</h4>
                <p><strong>Frequência: </strong>{this.state.frequencia10}</p>
                <hr/>
                <h4><strong>12º</strong> {this.state.nome11}</h4>
                <p><strong>Frequência: </strong>{this.state.frequencia11}</p>
                <hr/>
                <h4><strong>13º</strong> {this.state.nome12}</h4>
                <p><strong>Frequência: </strong>{this.state.frequencia12}</p>
                <hr/>
                <h4><strong>14º</strong> {this.state.nome13}</h4>
                <p><strong>Frequência: </strong>{this.state.frequencia13}</p>
                <hr/>
                <h4><strong>15º</strong> {this.state.nome14}</h4>
                <p><strong>Frequência: </strong>{this.state.frequencia14}</p>
                <hr/>
                <h4><strong>16º</strong> {this.state.nome15}</h4>
                <p><strong>Frequência: </strong>{this.state.frequencia15}</p>
                <hr/>
                <h4><strong>17º</strong> {this.state.nome16}</h4>
                <p><strong>Frequência: </strong>{this.state.frequencia16}</p>
                <hr/>
                <h4><strong>18º</strong> {this.state.nome17}</h4>
                <p><strong>Frequência: </strong>{this.state.frequencia17}</p>
                <hr/>
                <h4><strong>19º</strong> {this.state.nome18}</h4>
                <p><strong>Frequência: </strong>{this.state.frequencia18}</p>
                <hr/>
                <h4><strong>20º</strong> {this.state.nome19}</h4>
                <p><strong>Frequência: </strong>{this.state.frequencia19}</p>
                <hr/>
            </div>
        )
    }
}