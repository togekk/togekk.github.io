#include <stdio.h>  // for 'printf' function
#include <string.h> // for 'strtok' & 'strcmp'
#include <stdlib.h> // for 'free' function

using namespace std;

extern "C" {

// get object array from javascript

int arrayIndexOf(char* arr, char* value_selected, int arr_length, int key_length)
{
    char* a;
    int id = 0;
    int id_found = -1;
    
    strtok(arr, "\"");

    do {

        a = strtok(NULL, "{,\"}");
        if (strcmp(a, value_selected) == 0) {
            id_found = id;
        }
        id++;

    } while (strcmp(a, value_selected) != 0 && id < arr_length * key_length * 3);

    if (id_found >= 0) {
        return (id_found / key_length) / 3;
    } else {
        return -1;
    }
    
    free(value_selected);
    free(arr);
}
}
