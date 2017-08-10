'use strict';

import React, {Component} from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
const ReactDOM = require('react-dom');
injectTapEventPlugin();

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tweet: ''
        }
    }


    render() {
        const self = this;
        return (
            <div>
                <div className="container">
                    <div id="main">
                        <h1>Trump Tweet Generator</h1>
                    </div>
                </div>
                {/*<div id="box">*/}
                {/*<div>*/}
                {/*{renderResult}*/}
                {/*</div>*/}
                {/*</div>*/}
            </div>
        )

    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('react')
);