import React from 'react';
import './Result.css';

export default props =>
    <div id="container">
        <div id="mapa">
            <select id="uf" value={props.uf} onChange={(event) => props.Pesquisa(props.url, props.nome, event.target.value, props.sexo)}>
                <option value="">Brasil</option>
                <option value="12">Acre</option>
                <option value="27">Alagoas</option>
                <option value="16">Amapá</option>
                <option value="13">Amazonas</option>
                <option value="29">Bahia</option>
                <option value="23">Ceará</option>
                <option value="53">Distrito Federal</option>
                <option value="32">Espírito Santo</option>
                <option value="52">Goiás</option>
                <option value="21">Maranhão</option>
                <option value="51">Mato Grosso</option>
                <option value="50">Mato Grosso do Sul</option>
                <option value="31">Minas Gerais</option>
                <option value="15">Pará</option>
                <option value="25">Paraíba</option>
                <option value="41">Paraná</option>
                <option value="26">Pernambuco</option>
                <option value="22">Piauí</option>
                <option value="33">Rio de Janeiro</option>
                <option value="24">Rio Grande do Norte</option>
                <option value="43">Rio Grande do Sul</option>
                <option value="11">Rondônia</option>
                <option value="14">Roraima</option>
                <option value="42">Santa Catarina</option>
                <option value="35">São Paulo</option>
                <option value="28">Sergipe</option>
                <option value="17">Tocantins</option>
            </select>
            <img src={`img/${props.uf}.jpg`} alt="mapa" />
        </div>
        <h3>Frequência</h3>
        <div id="table">
            <div>
                <table className="table table-condensed">
                    <thead>
                        <tr>
                            <td><strong>1930</strong></td>
                            <td><strong>1940</strong></td>
                            <td><strong>1950</strong></td>
                            <td><strong>1960</strong></td>
                            <td><strong>1970</strong></td>
                            <td><strong>1980</strong></td>
                            <td><strong>1990</strong></td>
                            <td><strong>2000</strong></td>
                            <td><strong>2010</strong></td>
                        </tr>
                    </thead>
                    <tbody id="tabela">
                        <tr>
                            <td>{props.p1930}</td>
                            <td>{props.p1940}</td>
                            <td>{props.p1950}</td>
                            <td>{props.p1960}</td>
                            <td>{props.p1970}</td>
                            <td>{props.p1980}</td>
                            <td>{props.p1990}</td>
                            <td>{props.p2000}</td>
                            <td>{props.p2010}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>