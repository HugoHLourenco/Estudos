const volEsfera = (r) => {
    let res = Math.pow(r, 3)

    res *= 4.18878

    console.log(`Uma esfera com ${r}cm de raio tem volume de ${Math.round(res * 100) / 100}cm³`)
} 




volEsfera(6)