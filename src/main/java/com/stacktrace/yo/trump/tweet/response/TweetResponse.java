package com.stacktrace.yo.trump.tweet.response;

/**
 * Created by afarag on 7/19/2017.
 */
public class TweetResponse {

    private String tweet;

    public TweetResponse() {
    }

    public String getTweet() {
        return tweet;
    }

    public TweetResponse setTweet(String tweet) {
        this.tweet = tweet;
        return this;
    }
}
