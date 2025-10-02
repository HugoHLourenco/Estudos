const jokenpo = (mao) =>{
    var randow = Math.floor(Math.random() * 3) + 1

    switch(mao) {
        case 1:
        if(randow == 1) {
            console.log(`Pedra contra Pedra\nEMPATE`)
        } else if(randow == 2) {
            console.log(`Pedra contra Papel\nDERROTA`)
        } else if(randow == 3) {
            console.log(`Pedra contra Tesoura\nVITÓRIA`)
        } else {
            console.log("Escolha um valor válido")
        }
        break

        case 2:
        if(randow == 1) {
            console.log(`Papel contra Pedra\nVITÓRIA`)
        } else if(randow == 2) {
            console.log(`Papel contra Papel\nEMPATE`)
        } else if(randow == 3) {
            console.log(`Papel contra Tesoura\nDERROTA`)
        } else {
            console.log("Escolha um valor válido")
        }
        break

        case 3:
        if(randow == 1) {
            console.log(`Tesoura contra Pedra\nDERROTA`)
        } else if(randow == 2) {
            console.log(`Tesoura contra Papel\nVITÓRIA`)
        } else if(randow == 3) {
            console.log(`Tesoura contra Tesoura\nEMPATE`)
        } else {
            console.log("Escolha um valor válido")
        }
        break
    }
}

// 1 == Pedra
// 2 == Papel
// 3 == Tesoura
jokenpo(3)