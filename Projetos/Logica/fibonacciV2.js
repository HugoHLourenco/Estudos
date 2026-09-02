// Esta versão contem uma variável a menos, porém é mais complexa que a versão 1.0

const FibonacciV2 = (numeroDaSequencia) => {
    let PrimeiroNumero = 0;
    let SegundoNumero = 1;
    let sequenciaDeFibonacci = [];

    for (let i = 0; i < numeroDaSequencia; i++) {
        PrimeiroNumero += SegundoNumero;
        sequenciaDeFibonacci[i] = PrimeiroNumero;
        i++;

        if(i < numeroDaSequencia) {
            SegundoNumero += PrimeiroNumero;
            sequenciaDeFibonacci[i] = SegundoNumero;
        }
    }

    console.log(sequenciaDeFibonacci);
}

FibonacciV2(20);
