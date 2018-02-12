var MyCode = require('./string.js'); // import modularized 'MyCode' function

let mod;

MyCode().then(Module => {

    mod = Module;
    const string_object = [];
    for (let a = 0; a < 500; a++) {
        string_object.push(createRandomObj(5));
    }
    document.write('Done generating<br>');

    const value = "sss";

    document.write('Starting JavaScript for loops<br>');
    window.setTimeout(function () {
        const start = new Date();
        arrayIndexOfJS(string_object, value);
        const end = new Date() - start;
        document.write(end + ' ms<br>');
        document.write('Starting WASM do while loops<br>');
    }, 1);
    window.setTimeout(function () {
        const start2 = new Date();
        arrayIndexOf(string_object, value)
        const end2 = new Date() - start2;
        document.write(end2 + ' ms<br>');
        document.close();
    }, 1);
})

function send_string(string) {
    const lengthBytes = mod.lengthBytesUTF8(string) + 1; // get string length in bytes
    const stringOnWasmHeap = mod.getMemory(lengthBytes); // get memory address in wasm heap
    mod.stringToUTF8(string, stringOnWasmHeap, lengthBytes + 1); // use 'stringToUTF8' funciton to write string in wasm heap
    return stringOnWasmHeap;
}


function arrayIndexOf(obj_arr, value) {
    const obj = JSON.stringify(obj_arr);
    const obj_heap = send_string(obj);
    const str_heap = send_string(value);
    const id = mod._arrayIndexOf(obj_heap, str_heap, obj_arr.length, Object.keys(obj_arr[0]).length); // call c function with memory address
    return id;
}

function arrayIndexOfJS(obj_arr, value) {
    let id = -1;
    for (let i = 0; i < obj_arr.length; i++) {
        for (let j = 0; j < Object.values(obj_arr).length; j++) {
            if (obj_arr[i][Object.values(obj_arr)[j]] === value) {
                id = i;
            }
        }
    }
    return id;
}

function createRandomObj(fieldCount, allowNested) {
    var generatedObj = {};

    for (var i = 0; i < fieldCount; i++) {
        var generatedObjField;

        switch (randomInt(allowNested ? 6 : 5)) {

            case 0:
                generatedObjField = randomInt(1000);
                break;

            case 1:
                generatedObjField = Math.random();
                break;

            case 2:
                generatedObjField = Math.random() < 0.5 ? true : false;
                break;

            case 3:
                generatedObjField = randomString(randomInt(4) + 4);
                break;

            case 4:
                generatedObjField = null;
                break;

            case 5:
                generatedObjField = createRandomObj(fieldCount, allowNested);
                break;
        }
        generatedObj[randomString(8)] = generatedObjField;
    }
    return generatedObj;
}

// helper functions

function randomInt(rightBound) {
    return Math.floor(Math.random() * rightBound);
}

function randomString(size) {
    var alphaChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var generatedString = '';
    for (var i = 0; i < size; i++) {
        generatedString += alphaChars[randomInt(alphaChars.length)];
    }

    return generatedString;
}