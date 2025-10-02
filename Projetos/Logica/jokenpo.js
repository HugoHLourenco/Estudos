const jokenpo = (mao) =>{
    let randow = Math.floor(Math.random() * 3) + 1

    switch(mao) {
        case 1:
        if(randow == 1) {
            console.log(`Pedra contra Pedra\nEMPATE`)
        } else if(randow == 2) {
            console.log(`Pedra contra Papel\nDERROTA`)
        } else if(randow == 3) {
            console.log(`Pedra contra Tesoura\nVITÓRIA`)
        }
        break

        case 2:
        if(randow == 1) {
            console.log(`Papel contra Pedra\nVITÓRIA`)
        } else if(randow == 2) {
            console.log(`Papel contra Papel\nEMPATE`)
        } else if(randow == 3) {
            console.log(`Papel contra Tesoura\nDERROTA`)
        } 
        break

        case 3:
        if(randow == 1) {
            console.log(`Tesoura contra Pedra\nDERROTA`)
        } else if(randow == 2) {
            console.log(`Tesoura contra Papel\nVITÓRIA`)
        } else if(randow == 3) {
            console.log(`Tesoura contra Tesoura\nEMPATE`)
        }
        break
    }
}

jokenpo()

