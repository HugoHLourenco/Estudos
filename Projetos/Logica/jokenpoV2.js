// Jokenpô pós Clean Code.

const jogarJokenpo = (minhaJogada) => {
    let jogadaAdversaria = geradorDeJogadaAdversaria();

    if (minhaJogada.trim().toLowerCase() == jogadaAdversaria) {
        console.log(`Você jogou ${minhaJogada} e o adversário jogou ${jogadaAdversaria}.\nEMPATOU!`);

    } else {
        console.log(`Você jogou ${minhaJogada} e o adversário jogou ${jogadaAdversaria}.\n${chamarResultado(minhaJogada, jogadaAdversaria)}`);
    }
};

const geradorDeJogadaAdversaria = () => {
    let jogadaAdversaria = Math.floor(Math.random() * 3); // Gera um número 0, 1 ou 2

    if (jogadaAdversaria === 0) {
        jogadaAdversaria = "pedra";

    } else if (jogadaAdversaria === 1) {
        jogadaAdversaria = "papel";

    } else {
        jogadaAdversaria = "tesoura";
    }

    return jogadaAdversaria;
};

const chamarResultado = (minhaJogada, jogadaAdversaria) => {
    let resultado = "";
    let jogada = minhaJogada.trim().toLowerCase();

    if (jogada == "pedra") {
        if (jogadaAdversaria == "papel") {
            resultado = "PERDEU!";
        } else {
            resultado = "GANHOU!";
        }

    } else if (jogada == "papel") {
        if (jogadaAdversaria == "tesoura") {
            resultado = "PERDEU!";
        } else {
            resultado = "GANHOU!";
        }
    } else if (jogada == "tesoura") {
        if (jogadaAdversaria == "pedra") {
            resultado = "PERDEU!";
        } else {
            resultado = "GANHOU!";
        }
    }

    return resultado;
};

jogarJokenpo("pedra");