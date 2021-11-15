#include <simdjson.h>
#include <iostream>
using namespace simdjson;
int main(void) {
    ondemand::parser parser;
    padded_string json = padded_string::load("simdjson/jsonexamples/twitter.json");
    ondemand::document tweets = parser.iterate(json);
    std::cout << uint64_t(tweets["search_metadata"]["count"]) << " results." << std::endl;
}