import React, { Component } from 'react';
import {firebaseDatabase} from './../../Util/Firebase';
import EmailItem from './EmailItem';
import EmailLeitura from './EmailLeitura';
// import { Container } from './styles';

export default class EmailComponent extends Component {


    state = {
        itemEmail: null,
        item: null
    }

    componentDidMount() {
        // let jsonEmail = [
        //     {
        //         "avatar": "img/common/tilo-avatar.png",
        //         "title": "1 tilo mitra",
        //         "emailSubject": "Hello from toronto",
        //         "emaildesc": "  Hey, I just wanted to check in with you from Toronto. I got here earlier today."
        //     },
        //     {
        //         "avatar": "img/common/ericf-avatar.png",
        //         "title": "ERIC FERRAIUOLO",
        //         "emailSubject": "Re: Pull Requests",
        //         "emaildesc": "  Hey, I just wanted to check in with you from Toronto. I got here earlier today."
        //     },
        //     {
        //         "avatar": "img/common/yui-avatar.png",
        //         "title": "YUI LIBRARY",
        //         "emailSubject": "You have 5 bugs assigned to you",
        //         "emaildesc": " Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla."
        //     }]
        // this.setState({ itemEmail: jsonEmail })

        var that = this;
        firebaseDatabase.ref('email').on("value", snapshot => {
            if(snapshot.exists()){
                that.setState({itemEmail : snapshot.val()})
            }
        })
    }


    clickEmail = (item) => {
        this.setState({ item })
    }


    render() {
        return (
            <div>

                <div id="list" className="pure-u-1">
                    {
                        this.state.itemEmail ?
                            this.state.itemEmail.map((item, index) => {
                                return <a onClick={() => this.clickEmail(item)}>
                                    <EmailItem key={index} ItemEmail={item} clickEmail={() => this.clickEmail} />
                                </a>
                            })
                            : null
                    }
                </div>
                <div id="main" className="pure-u-1">
                    <EmailLeitura item={this.state.item} />
                </div>
            </div>
        );
    }
}
