function TrianguloRetangulo(altura) {
    for (let i = 1; i <= altura ; i++) {
        console.log("*".repeat(i))
    }
}
TrianguloRetangulo(0);





function quadrado( lado ) {
    for(let i = 1; i <= lado; i++ ) {
        console.log("*".repeat(lado))
    }
}
quadrado(0)




function trianguloInvertido(lado) {
    for(let i = 1; i <= lado; i++) {
        console.log("*".repeat(lado - i + 1))
    }
}
trianguloInvertido(0)




function diagonal(num) {
    for(let i = 0; i <= num; i++) {
        console.log(" ".repeat(i ) + "*")
    }
}
diagonal(0)




function diagonalInversa(num) {
    for(let i = 0; i <= num; i++) {
        console.log(" ".repeat(num - i) + "*")
    }
}
diagonalInversa(50)