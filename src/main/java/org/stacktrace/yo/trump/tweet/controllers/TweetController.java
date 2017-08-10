package org.stacktrace.yo.trump.tweet.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.stacktrace.yo.trump.tweet.response.TweetResponse;
import org.stacktrace.yo.trump.tweet.service.TweetGenerationService;

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
        return new TweetResponse().setTweet("test");

    }
}