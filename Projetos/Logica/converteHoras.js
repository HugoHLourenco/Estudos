const converteHoras = (string)  => {
    let h = string.split(":")[0]
    let m = string.split(":")[1]
    let s = string.split(":")[2]

    let horas = Number(h * 360)
    let minutos = Number(m * 60)
    let segundos = Number(s)
    let soma = horas + minutos + segundos

    console.log(`${h} horas, ${m} minutos e ${s} segundos são: ${soma} segundos`)
}

converteHoras("47:37:42")