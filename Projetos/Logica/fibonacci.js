const chamarFibonacci = (numeroDaSequencia) => {
    console.log(`A sequência de Fibonacci até o ${numeroDaSequencia}° numero é: ` + fibonacci(numeroDaSequencia));
};

const fibonacci = (numeroDaSequncia) => {
    let n1 = 0;
    let n2 = 1;
    let sequenciaDeFibonacci = [];

    for (let i = 0; i < numeroDaSequncia; i++) {
        [n1, n2] = [n2, n1 + n2];
        sequenciaDeFibonacci.push(n2);
    }

    return sequenciaDeFibonacci;
};

chamarFibonacci(20);