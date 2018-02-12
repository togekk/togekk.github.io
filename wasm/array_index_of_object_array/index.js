var MyCode = require('./string.js'); // import modularized 'MyCode' function
var mod;
MyCode().then(Module => {
    mod = Module;

    const string_object = [{
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
    var lengthBytes = mod.lengthBytesUTF8(string) + 1; // get string length in bytes
    var stringOnWasmHeap = mod.getMemory(lengthBytes); // get memory address in wasm heap
    mod.stringToUTF8(string, stringOnWasmHeap, lengthBytes + 1); // use 'stringToUTF8' funciton to write string in wasm heap
    return stringOnWasmHeap;
}


function arrayIndexOf(obj_arr, value) {
    var obj = JSON.stringify(obj_arr);
    var obj_heap = send_string(obj);
    var str_heap = send_string(value);
    var id = mod._arrayIndexOf(obj_heap, str_heap, obj_arr.length, Object.keys(obj_arr[0]).length); // call c function with memory address
    return id;
}