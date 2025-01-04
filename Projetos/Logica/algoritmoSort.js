const sort = (input) => {
    let array = []
// Método quebrastring
    for(let i = 0; input[i] != null; i++) {
        array[i] = input.charAt(i)
    }
    console.log(array)
// Manipular a string
function ordena() {
    for(let i = 0; array[i] > array[array.length - 1]; i++) {
        // if(array[i] > array[i + 1]) {
        //     let x = ""
        //     x = array[i + 1]
        //     array[i + 1] = array[i]
        //     array[i] = x
        // }
    }
}

ordena()


    console.log(array)
}

sort("398542")