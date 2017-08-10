package org.stacktrace.yo.trump.tweet.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class TweetGenerationService {

    private Logger LOGGER = LoggerFactory.getLogger("TweetGenerationService");
//    private final MarkovChain chain;


    @Autowired
    public TweetGenerationService() throws IOException {
//        chain = new MarkovTextChainGenerator(2)
//                .generateDistributionFromStream(new FileInputStream(
//                                new File(String.valueOf(getClass().getClassLoader().getResources("trumptweets.txt")))
//                        )
//                );
//        chain.printDistribution();
    }


}
