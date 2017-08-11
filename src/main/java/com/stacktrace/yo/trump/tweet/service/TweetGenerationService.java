package com.stacktrace.yo.trump.tweet.service;

import com.stacktrace.yo.markov.MarkovChain;
import com.stacktrace.yo.markov.MarkovTextChainGenerator;
import com.stacktrace.yo.trump.tweet.internal.GenerationRequest;
import com.stacktrace.yo.trump.tweet.internal.GenerationResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

@Component
public class TweetGenerationService {

    private Logger LOGGER = LoggerFactory.getLogger("TweetGenerationService");
    //    private final MarkovChain chain;
    private final MarkovTextChainGenerator generator;
    private MarkovChain<String> chain;


    @Autowired
    public TweetGenerationService() throws IOException {
        generator = new MarkovTextChainGenerator(2)
                .generateChainFromStream(
                        Files.newInputStream(
                                Paths.get("src/main/resources/tweets/trumptweets.txt")
                        )
                );
        chain = generator.getState();
    }

    public GenerationResponse generateTweet(GenerationRequest request) {
        return new GenerationResponse(chain.generateTokens(request.getMaxCount()));
    }


}
