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

// teoremaPitagoras(20, 33)



// Área de um círculo -----------------------------------------------------------------------------------------------------------------------------------

const areaCirc = (r) => {
    let pi = 3.141592
    let area= pi * Math.pow(r, 2)

    console.log(`A área de um círculo de Raio(${r}) é: ${area.toFixed(2)} U.M.`)
}

// areaCirc(2)



// Área de um esfera ----------------------------------------------------------------------------------------------------------------------------

const areaEsf = (r) => {
    let pi = 3.141592
    let area= 4 * pi * Math.pow(r, 2)

    console.log(`A área de uma esfera de Raio(${r}) é: ${area.toFixed(2)} U.M.²`)
}

// areaEsf(2)