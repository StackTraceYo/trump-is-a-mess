package com.stacktrace.yo.trump.tweet.internal;

public class GenerationRequest {

    private final Integer maxCount;

    public GenerationRequest() {
        maxCount = 20;
    }

    public GenerationRequest(Integer maxCount) {
        this.maxCount = maxCount;
    }

    public Integer getMaxCount() {
        return maxCount;
    }
}
