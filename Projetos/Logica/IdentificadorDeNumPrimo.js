function IdentificarNumPrimo(n) {
    let NumPrimos = [] // Vetor que armezena os Num. primos

    for (i = 1; n >= i; i++) { // Laço que gera os primos
        for (j = 0; j <= i; j++) {
            if (n / i) {
                NumPrimos.push(i)
            }
        }
    }
    console.log(NumPrimos)
}

IdentificarNumPrimo(5)