const converteHoras = (h, m, s)  => {
    let horas = h * 360
    let minutos = m * 60
    let segundos = s
    let soma = horas + minutos + segundos

    console.log(`${h} horas, ${m} minutos e ${s} segundos são: ${soma} segundos`)
}

converteHoras(1, 1, 30)