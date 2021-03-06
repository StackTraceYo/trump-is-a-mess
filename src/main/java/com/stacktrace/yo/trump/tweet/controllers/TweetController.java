package com.stacktrace.yo.trump.tweet.controllers;

import com.google.common.base.Joiner;
import com.stacktrace.yo.trump.tweet.internal.GenerationRequest;
import com.stacktrace.yo.trump.tweet.internal.GenerationResponse;
import com.stacktrace.yo.trump.tweet.response.TweetResponse;
import com.stacktrace.yo.trump.tweet.service.TweetGenerationService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Ahmad Farag
 */
@RestController
public class TweetController {
    private Logger LOGGER = LoggerFactory.getLogger("TweetController");

    private final TweetGenerationService searchService;

    @Autowired
    public TweetController(TweetGenerationService searchService) {
        this.searchService = searchService;
    }


    @RequestMapping(value = "/generate", method = RequestMethod.GET)
    public TweetResponse search() {
        GenerationResponse generationResponse = searchService.generateTweet(new GenerationRequest());
        String tweetText = Joiner.on(" ").join(generationResponse.getTokens());
        return new TweetResponse().setTweet(tweetText);
    }
}