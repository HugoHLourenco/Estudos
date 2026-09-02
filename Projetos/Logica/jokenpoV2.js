const jogarJokenpo = (minhaJogada) => {
    let jogadaAdversaria = geradorDeJogadaAdversaria();

    if (minhaJogada == jogadaAdversaria) {
        console.log(`Você jogou ${minhaJogada} e o adversário jogou ${jogadaAdversaria}\nEMPATOU!`);
    }
};

const geradorDeJogadaAdversaria = () => {
    let jogadaAdversaria = Math.floor(Math.random() * 3);

    if (jogadaAdversaria === 0) {
        jogadaAdversaria = "Pedra";

    } else if (jogadaAdversaria === 1) {
        jogadaAdversaria = "Papel";

    } else {
        jogadaAdversaria = "Tesoura";
    }

    return jogadaAdversaria;
};

jogarJokenpo();