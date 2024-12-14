function imprimirTrianguloRetangulo(altura) {
    for (let i = 1; i <= altura ; i++) {
        console.log("*".repeat(i));
    }
}

// Exemplo: Triângulo com altura 5
imprimirTrianguloRetangulo(0);


function quadrado( lado ) {
    for(let i = 1; i <= lado; i++ ) {
        console.log("*".repeat(lado))
    }
}

quadrado(10)