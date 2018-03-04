#include <stdio.h>
#include <emscripten.h>
#include "rapidjson/document.h"
// #include "rapidjson/writer.h"
// #include "rapidjson/stringbuffer.h"

void onload(unsigned handle, void *userData, void *data, unsigned size)
{
    Document d;
    d.Parse<kParseStopWhenDoneFlag>((char *)data);
}

void onerror(unsigned handle, void *userData, int status, const char *message)
{
}

void onprogress(unsigned handle, void *userData, int loaded, int total)
{
}

int main()
{
    emscripten_async_wget2_data("aaa.com", "GET", "", "aa", 1, onload, onerror, onprogress);
    return 0;
}