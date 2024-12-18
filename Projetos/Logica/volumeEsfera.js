const volEsfera = (r) => {
    let res = Math.pow(r, 3)

    res *= 3.14159

    console.log(`Uma esfera de raio(${r}) tem volume de ${res} cm³`)
} 

volEsfera(6)