'use strict';

import React, {Component} from "react";
import injectTapEventPlugin from "react-tap-event-plugin";

const client = require('./client.jsx');
const ReactDOM = require('react-dom');


injectTapEventPlugin();

class App extends Component {

    constructor(props) {
        super(props);
        this.generate = this.generate.bind(this);
        this.state = {
            tweet: 'Generate a Tweet By Clicking Below!'
        }
    }

    generate() {
        const self = this;
        client({
            method: 'GET',
            path: 'generate',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .done(response => {
                this.setState({
                    tweet: response.entity.tweet
                })
            });
    }


    render() {
        const self = this;
        return <div>
            <div className="container">
                <h1 className="tweet-title">Trump Tweet Generator</h1>
                <div className="tweet-container">
                    <div className="tweet-header">
                        <div className="tweet-profile">
                            <div className="tweet-avatar">
                                <img src="https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_bigger.jpg"/>
                            </div>
                            <div className="tweet-account-container">
                                <h4 className="tweet-name"><a href="#">Donald J. Trump</a></h4>
                                <h6 className="tweet-username">@realDonaldTrump</h6>
                            </div>
                            <div className="tweet-follow-button">
                                <button className="tweet-button">Follow</button>
                            </div>
                        </div>
                    </div>
                    <p className="tweet-text">
                        {this.state.tweet}
                    </p>
                    <div className="tweet-timestamp">3:46 PM - 17 Aug 2017</div>
                </div>
            </div>
            <div>
                <button className="tweet-generate-button tweet-button" onClick={this.generate}>Generate</button>
            </div>
        </div>
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('react')
);