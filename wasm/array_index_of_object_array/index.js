var MyCode = require('./string.js');                                      // import modularized 'MyCode' function

let mod;

MyCode().then(Module => {

    mod = Module;

    const string_object = [
        {
            name: "Simon",
            age: "30",
            nationality: "Taiwan",
            date_of_birth: "01/01/1900"
        },
        {
            name: "John",
            age: "27",
            nationality: "Ireland",
            date_of_birth: "03/03/1900"
        },
        {
            name: "David",
            age: "23",
            nationality: "Germany",
            date_of_birth: "05/05/1900"
        },
        {
            name: "Peter",
            age: "25",
            nationality: "Australia",
            date_of_birth: "07/07/1900"
        }
    ];

    const value = "David";

    document.write("Object 'David' index: " + arrayIndexOf(string_object, value));
    document.close();
})

function send_string(string) {
    const lengthBytes = mod.lengthBytesUTF8(string) + 1;               // get string length in bytes
    const stringOnWasmHeap = mod.getMemory(lengthBytes);               // get memory address in wasm heap
    mod.stringToUTF8(string, stringOnWasmHeap, lengthBytes + 1);       // use 'stringToUTF8' funciton to write string in wasm heap
    return stringOnWasmHeap;
}


function arrayIndexOf(obj_arr, value) {
    const obj = JSON.stringify(obj_arr);
    const obj_heap = send_string(obj);
    const str_heap = send_string(value);
    const id = mod._arrayIndexOf(obj_heap, str_heap, obj_arr.length, Object.keys(obj_arr).length);             // call c function with memory address
    return id;
    // const len = mod._getLen(offset);                                         // get string length
    // return mod.Pointer_stringify(offset, len);                    // use 'Pointer_stringify' function to convert to javascript string
}