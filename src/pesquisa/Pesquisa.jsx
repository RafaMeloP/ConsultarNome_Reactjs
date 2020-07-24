import React from 'react';
import './Pesquisa.css';
import Layout from './Layout';
import Result from '../result/Result';
import If from '../condicional/If';

export default class Pesquisa extends React.Component {
    state = {
        pesq: false,
        url: "https://servicodados.ibge.gov.br/api/v2/censos/nomes/",
        nome: "",
        sexo: "",
        uf: "",
        p1930: "",
        p1940: "",
        p1950: "",
        p1960: "",
        p1970: "",
        p1980: "",
        p1990: "",
        p2000: "",
        p2010: "",
    }
    setNome = (event) => {
        this.setState({ nome: event.target.value, pesq: false })
    }
    setUf = (event) => {
        this.setState({ uf: event.target.value })
    }
    setSexo = (event) => {
        this.setState({ sexo: event.target.value })
    }
    Pesquisa = (url, name, uf, sexo) => {
        if (uf !== "" && sexo !== "") {
            url += name + "?sexo=" + sexo + "&localidade=" + uf;
        }
        else {
            if (uf !== "") {
                url += name + "?localidade=" + uf;
            }
            else if (sexo !== "") {
                url += name + "?sexo=" + sexo;
            }
            else {
                url += name;
            }
        }
        fetch(url).then(res => res.json()).then(res =>
            res.map(resp =>
                resp.res.map(item => {
                    var periodo=item.periodo;
                    switch (periodo) {
                        case "1930[": this.setState({ p1930: item.frequencia }); break;
                        case "[1930,1940[": this.setState({ p1940: item.frequencia }); break;
                        case "[1940,1950[": this.setState({ p1950: item.frequencia }); break;
                        case "[1950,1960[": this.setState({ p1960: item.frequencia }); break;
                        case "[1960,1970[": this.setState({ p1970: item.frequencia }); break;
                        case "[1970,1980[": this.setState({ p1980: item.frequencia }); break;
                        case "[1980,1990[": this.setState({ p1990: item.frequencia }); break;
                        case "[1990,2000[": this.setState({ p2000: item.frequencia }); break;
                        case "[2000,2010[": this.setState({ p2010: item.frequencia }); break;
                    }
                    this.setState({ nome: resp.nome, uf:resp.localidade, pesq: true })

                })
            )
        )
        this.setState({url:'https://servicodados.ibge.gov.br/api/v2/censos/nomes/'})
    }
    render() {
        return (
            <div>
                <Layout
                    url={this.state.url}
                    nome={this.state.nome}
                    sexo={this.state.sexo}
                    uf={this.state.uf}
                    Pesquisa={this.Pesquisa}
                    setNome={this.setNome}
                    setUf={this.setUf}
                    setSexo={this.setSexo}
                />
                <If condicao={this.state.pesq}>
                    <Result
                        nome={this.state.nome}
                        url={this.state.url}
                        sexo={this.state.sexo}
                        uf={this.state.uf}
                        Pesquisa={this.Pesquisa}
                        p1930={this.state.p1930}
                        p1940={this.state.p1940}
                        p1950={this.state.p1950}
                        p1960={this.state.p1960}
                        p1970={this.state.p1970}
                        p1980={this.state.p1980}
                        p1990={this.state.p1990}
                        p2000={this.state.p2000}
                        p2010={this.state.p2010}
                    />
                </If>
            </div>
        )
    }
}