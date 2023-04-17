//El problema te pide que implementes la función "countingValleys" que tome dos parámetros: "steps"
// que es un número entero que representa el número total de pasos dados en la caminata, y "path", que es una cadena que 
// describe la secuencia de pasos hacia arriba y hacia abajo que se realizaron durante la caminata.



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
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
    // Write your code here

    //-----------------------CODIGO IMPLEMENTADO------------------------------
    let seaLevel = 0; 
    let valleyCount = 0;
    let isInValley = false; 

    for (let i = 0; i < steps; i++) {
    const currentStep = path.charAt(i);
    
    if (currentStep === "U") {
    seaLevel++;
    } else if (currentStep === "D") {
    seaLevel--;
    }
    
    if (seaLevel < 0 && !isInValley) {
    isInValley = true;
    }
    
    if (seaLevel === 0 && isInValley) {
    valleyCount++;
    isInValley = false;
    }
}

return valleyCount;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const steps = parseInt(readLine().trim(), 10);

    const path = readLine();

    const result = countingValleys(steps, path);

    ws.write(result + '\n');

    ws.end();
}