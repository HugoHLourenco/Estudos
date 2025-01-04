const sort = (input) => {
    let array = []
// Método quebrastring
    for(let i = 0; input[i] != null; i++) {
        array[i] = input.charAt(i)
    }

    let fim = array.length

// Manipular a string
    for(let i = 0; array[0] <= array[fim]; i++) {
        if(array[i] > array[i + 1]) {
            let x = ""
            x = array[i + 1]
            array[i + 1] = array[i]
            array[i] = x
        }
    }

    console.log(array)
}

sort("54321")