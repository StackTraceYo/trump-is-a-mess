'use strict';

import React, {Component} from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
import RaisedButton from "material-ui/RaisedButton";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {deepPurple400, tealA700} from "material-ui/styles/colors";

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

    createTweet() {

        return <div>
            <br/>
            Tweet: {this.state.tweet}:
            <br/>
        </div>;
    }


    render() {
        const self = this;
        return <div>
            <div className="container">
                <div id="main">
                    <h1>Trump Tweet Generator</h1>
                </div>
            </div>
            <MuiThemeProvider muiTheme={getMuiTheme(
                {
                    palette: {
                        primary1Color: deepPurple400,
                        secondary1Color: tealA700,
                    }
                }
            )}>
                <div id="box">
                    <div>
                        {this.createTweet()}
                    </div>
                    <div>
                        <br/>
                        <RaisedButton label="Generate" primary={true} fullWidth={false} containerElement='label'
                                      onClick={this.generate}>
                        </RaisedButton>
                    </div>
                </div>
            </MuiThemeProvider>
        </div>
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('react')
);