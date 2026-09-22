// Merge Sort - Notação Big O: O(n) x O(log n) = O(n log n)

// Big O: O(n)
// Percorrendo os elementos pra mergear as sublistas em um array ordenado
function merge(esquerda, direita) {
  let resultado = [];
  let i = 0;
  let j = 0;

  while (i < esquerda.length && j < direita.length) {
    if (esquerda[i] < direita[j]) {
      resultado.push(esquerda[i]);
      i++;
    } else {
      resultado.push(direita[j]);
      j++;
    }
  }

  while (i < esquerda.length) {
    resultado.push(esquerda[i]);
    i++;
  }

  while (j < direita.length) {
    resultado.push(direita[j]);
    j++;
  }

  return resultado
}

// Big O: O(log n)
// Dividindo o array orginal por 2 até termos sublistas com 1 elemento cada
function mergeSort(array) {
  if (array.length <= 1) {
    return array
  } else {
    let metade = Math.floor(array.length / 2);
    let esquerda = mergeSort(array.slice(0, metade));
    let direita = mergeSort(array.slice(metade));

    return merge(esquerda, direita);
  }
}

console.log(mergeSort([5, 3, 8, 1, 2]));
