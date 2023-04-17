//HackerRank ejercicios semana 2 Preparation Kit: Lonely Integer.
//El problema te pide que implementes una función llamada "lonelyinteger" que tome como entrada un array 
// de enteros y devuelva el entero que aparece solo una vez en el array.
// La función debe tener un parámetro que sea un array de enteros llamado "a" 
// y debe devolver un entero que es el número que aparece solo una vez en el array.





'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a) {
    // Write your code here
    //------------------------------------------CODIGO IMPLEMENTADO-----------------------------------------------------------
    let ans =0;
    for(let i=0; i<a.length; i++){
    ans ^=a[i]
    }
    return ans
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = lonelyinteger(a);

    ws.write(result + '\n');

    ws.end();
}