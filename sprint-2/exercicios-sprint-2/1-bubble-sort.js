// Notação Big O:
// Pior caso, quando a lista está em ordem decrescente = O(n²)
// Melhor caso, quando a lista já está ordenada = O(n)

function bubble(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let houveTroca = false;

    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        let t = array[j];
        array[j] = array[j + 1];
        array[j + 1] = t;

        houveTroca = true;
      } 
    }

    if (houveTroca === false) {
      console.log('Finalizado, pois mais nenhuma troca foi realizada.')
      return array
    }
  }

  return array
}

console.log(bubble([5, 3, 8, 1, 2]));
