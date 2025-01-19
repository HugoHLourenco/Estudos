const pilha = (base) => {
    let res = 0
    let basei = base

    for(let i = base; base >= 1; base --) {
        res += base * base
    }

    console.log(`Uma pilha de base ${basei} tem ${res} objetos`)
} 

pilha(10)