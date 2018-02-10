# String Array Conversion
Send string arrays between JavaScript and Webassembly

### [Live demo](https://togekk.github.io/wasm/)

#### Install webpack
`npm i --save-dev webpack`

#### Install UglifyjsWebpackPlugin
`npm i -D uglifyjs-webpack-plugin`
`yarn add uglifyjs-webpack-plugin`

#### Compile wasm and js file
`emcc string.cpp -Oz --llvm-opts 3 -s WASM=1 -s MODULARIZE=1 -s EXPORT_
NAME="'MyCode'" -s EXTRA_EXPORTED_RUNTIME_METHODS="['Pointer_stringify', 'lengthBytesUTF8', 'getMemory', 'stringToUTF8']
" -s EXPORTED_FUNCTIONS="['_sendArrayToJS', '_getArrayFromJS', '_getLen']" -o string.js`

#### Compile webpack bundle
`npx webpack --config ../webpack.config.js`
