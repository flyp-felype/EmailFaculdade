import React, { Component } from 'react';

// import { Container } from './styles';

export default class EmailLeitura extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="email-content">
            {this.props.item ? 
            <div>
                <div className="email-content-header pure-g">
                    <div className="pure-u-1-2">
                        <h1 className="email-content-title">{this.props.item.title}</h1>
                        <p className="email-content-subtitle">
                            From <a>{this.props.item.emailSubject}</a> at <span>3:56pm, April 3, 2012</span>
                        </p>
                    </div>

                    <div className="email-content-controls pure-u-1-2">
                        <button className="secondary-button pure-button">Reply</button>
                        <button className="secondary-button pure-button">Forward</button>
                        <button className="secondary-button pure-button">Move to</button>
                    </div>
                </div>

                <div className="email-content-body">
                 {this.props.item.emaildesc}
                </div>
                </div>
            :null    
            }
            </div>
        );
    }
}
