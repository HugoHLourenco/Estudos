// Triangulo ret. ---------------------------------------------------------------------------------------------------------------

function TrianguloRetangulo(altura) {
    for (let i = 1; i <= altura ; i++) {
        console.log("*".repeat(i))
    }
}
TrianguloRetangulo(0);



// Quadrado ------------------------------------------------------------------------------------------------------------------

function quadrado( lado ) {
    for(let i = 1; i <= lado; i++ ) {
        console.log("*".repeat(lado))
    }
}
quadrado(0)


// Triângulo Inverso ------------------------------------------------------------------------------------------------------------------

function trianguloInvertido(lado) {
    for(let i = 1; i <= lado; i++) {
        console.log("*".repeat(lado - i + 1))
    }
}
trianguloInvertido(0)


// Diagonal  ------------------------------------------------------------------------------------------------------------------

function diagonal(num) {
    for(let i = 0; i <= num; i++) {
        console.log(" ".repeat(i ) + "*")
    }
}
diagonal(0)



// Diagonal Inversa ------------------------------------------------------------------------------------------------------------------

function diagonalInversa(num) {
    for(let i = 0; i <= num; i++) {
        console.log(" ".repeat(num - i) + "*")
    }
}
diagonalInversa(0)

// Teorema de Pitagoras ---------------------------------------------------------------------------------------------------------------------

function teoremaPitagoras(a, b) {
    let c = a*a + b*b
    let hipotenusa = Math.sqrt(c).toFixed(1)

    console.log(`A hipotenusa de um triângulo com lado A(${a}), e lado B(${b}) é = ${hipotenusa}`)
}
teoremaPitagoras(20 , 40)



