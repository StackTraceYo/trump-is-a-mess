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
            tweet: 'Generate a Tweet By Clicking Below!',
            avatars: [
                {
                    profile: 'https://twitter.com/lesleyrosem',
                    image: 'https://pbs.twimg.com/profile_images/892493508380053504/ima7_lsJ_normal.jpg'
                },
                {
                    profile: 'https://twitter.com/tomslyck',
                    image: 'https://pbs.twimg.com/profile_images/3062777262/675a207de759ab3efd2fa5dd6ad40fc1_normal.jpeg'
                },
                {
                    profile: 'https://twitter.com/DebbieJ73420522',
                    image: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png',
                }
            ]
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

    createAvatarLi() {

        let avatarElements = this.state.avatars.map(avatar => this.createAvatar(avatar));

        return (
            <li className="tweet-avatar-row">
                {avatarElements}
            </li>
        )
    }

    createAvatar(avatar) {
        return (
            <a className="tweet-avatar" href={avatar.profile}><img src={avatar.image}/></a>
        )
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
                                <h4 className="tweet-name">
                                    <a className="tweet-blue-link" href="#">Donald J. Trump</a>
                                    <i className="tweet-verified edge-icon edge-icon-verified" />
                                </h4>
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
                    <ul className="tweet-stats unstyled-list">
                        <li className="tweet-stat tweet-retweets"><a href="#"><strong>19,253</strong>Retweets</a></li>
                        <li className="tweet-stat tweet-likes"><strong>73,910</strong>Likes</li>
                       {this.createAvatarLi()}
                    </ul>
                    <ul className="tweet-action-list unstyled-list">
                        <li className="tweet-reply">
                            <a className="tweet-gray tweet-blue-link" href="#">
                                <i className="edge-icon edge-icon-reply" />
                                <span>9.9K</span>
                            </a>
                        </li>
                        <li className="tweet-retweet">
                            <a className="tweet-gray tweet-green-link" href="#">
                                <i className="edge-icon edge-icon-retweet" />
                                <span>148</span>
                            </a>
                        </li>
                        <li className="tweet-heart">
                            <a className="tweet-gray tweet-red-link" href="#">
                                <i className="edge-icon edge-icon-heart" />
                                <span>39K</span>
                            </a>
                        </li>
                    </ul>
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