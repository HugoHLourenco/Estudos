function IdentificarNumPrimo(n) {
    let NumPrimos = [] // Vetor que armezena os Num. primos

    for (i = 1; n > i; i++) { // Laço que gera os primos
        if (n / i || n / 1) {
            NumPrimos.push(i)
            for (j = 0; j <= i; j++) {
                if (NumPrimos[j] / i) {
                    
                }
            }
        }
    }
    console.log(NumPrimos)
}

IdentificarNumPrimo(5)