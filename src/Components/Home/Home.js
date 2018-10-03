import React, { Component } from 'react';
import Menu from './../Util/Menu';
import EmailComponent from './Component/EmailComponent';
// import { Container } from './styles';

export default class Home extends Component {
    render() {
        return (

            <div className="App">
                <div id="layout" className="content pure-g">

                    <Menu />

                    <EmailComponent />
                </div>

            </div>
        );
    }
}
