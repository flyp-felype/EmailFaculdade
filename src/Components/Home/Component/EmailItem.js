import React, { Component } from 'react';

// import { Container } from './styles';

export default class EmailItem extends Component {
    render() {
        return (
                <div className="email-item email-item-selected pure-g">
                    <div className="pure-u">
                        <img width="64" height="64" alt="Tilo Mitra&#x27;s avatar" className="email-avatar" src={this.props.ItemEmail.avatar} />
                    </div>

                    <div className="pure-u-3-4">
                        <h5 className="email-name">{this.props.ItemEmail.title}</h5>
                        <h4 className="email-subject">{this.props.ItemEmail.emailSubject}</h4>
                        <p className="email-desc">
                            {this.props.ItemEmail.emaildesc}
                        </p>
                    </div>
                </div>
        );
    }
}

