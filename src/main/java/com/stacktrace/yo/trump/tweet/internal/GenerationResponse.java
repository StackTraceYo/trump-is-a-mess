package com.stacktrace.yo.trump.tweet.internal;

import com.google.common.collect.Lists;

import java.util.List;

public class GenerationResponse {

    private final List<String> tokens;

    public GenerationResponse() {
        tokens = Lists.newArrayList();
    }

    public GenerationResponse(List<String> tokens) {
        this.tokens = tokens;
    }

    public List<String> getTokens() {
        return tokens;
    }
}
