/**
 * Code generated by protoc-gen-twirp_js v5.0.0, DO NOT EDIT.
 * source: rpc/wordsearcher/searcher.proto
 */
// import our twirp js library dependency
var createClient = require("twirp");
// import our protobuf definitions
var pb = require("./rpc/wordsearcher/searcher_pb.js");
Object.assign(module.exports, pb);

/**
 * QuestionSearcher service searches for questions (duh!)
 */
module.exports.createQuestionSearcherClient = function(baseurl, extraHeaders, useJSON) {
    var rpc = createClient(baseurl, "wordsearcher.QuestionSearcher", "v5.0.0",  useJSON, extraHeaders === undefined ? {} : extraHeaders);
    return {
        /**
         * Search takes in a search request and returns a search response.
         * This response can be expanded or not, depending on the `expand` field
         * in SearchRequest.
         */
        search: function(data) { return rpc("Search", data, pb.SearchResponse); },
        /**
         * Expand takes in an unexpanded search response and returns a
         * search response (fully expanded). See expandedRepr above in
         * the Alphagram field.
         */
        expand: function(data) { return rpc("Expand", data, pb.SearchResponse); }
    }
}

/**
 * Creates a new AnagrammerClient
 */
module.exports.createAnagrammerClient = function(baseurl, extraHeaders, useJSON) {
    var rpc = createClient(baseurl, "wordsearcher.Anagrammer", "v5.0.0",  useJSON, extraHeaders === undefined ? {} : extraHeaders);
    return {
        /**
         * Anagram does a simple anagram search; it can either be
         * build mode or regular (exact) mode.
         * Maybe can add Regex later.
         */
        anagram: function(data) { return rpc("Anagram", data, pb.AnagramResponse); },
        /**
         * BlankChallengeCreator creates blank challenges for Aerolith
         */
        blankChallengeCreator: function(data) { return rpc("BlankChallengeCreator", data, pb.SearchResponse); },
        /**
         * BuildChallengeCreator creates build challenges for Aerolith.
         */
        buildChallengeCreator: function(data) { return rpc("BuildChallengeCreator", data, pb.SearchResponse); }
    }
}
