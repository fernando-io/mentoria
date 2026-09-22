// Notação Big O:
// Pior caso, quando o pivô sempre for o menor ou maior da lista = O(n²), pois iremos sempre percorrer a lista inteira a cada elemento
// Melhor caso, o pivô divide a lista proprocionalmente = O(log n), pois a lista vai sendo dividida pela metade a cada etapa 

// function quickSortLast(array) {
//   if (array.length <= 1) {
//     return array;
//   }

//   let menores = [];
//   let maiores = [];
//   let pivo = array[array.length - 1];

//   for (let i = 0; i < array.length - 1; i++){
//     if (array[i] < pivo) {
//       menores.push(array[i]);
//     } else {
//       maiores.push(array[i]);
//     }
//   }

//   return [...quickSortLast(menores), pivo, ...quickSortLast(maiores)];
// }

// console.log(quickSortLast([5, 3, 8, 1, 2]));

// function quickSortFirst(array) {
//   if (array.length <= 1) {
//     return array;
//   }

//   let menores = [];
//   let maiores = [];
//   let pivo = array[0];

//   for (let i = 1; i < array.length; i++){
//     if (array[i] < pivo) {
//       menores.push(array[i]);
//     } else {
//       maiores.push(array[i]);
//     }
//   }

//   return [...quickSortFirst(menores), pivo, ...quickSortFirst(maiores)];
// }

// console.log(quickSortFirst([5, 3, 8, 1, 2]));

function quickSortRandom(array) {
  if (array.length <= 1) {
    return array;
  }

  let menores = [];
  let maiores = [];
  let sorteioPivo = Math.floor(Math.random() * array.length)
  let pivo = array[sorteioPivo];

  for (let i = 0; i < array.length; i++){
    if (i === sorteioPivo) {
      continue;
    }

    if (array[i] < pivo) {
      menores.push(array[i]);
    } else {
      maiores.push(array[i]);
    }
  }

  return [...quickSortRandom(menores), pivo, ...quickSortRandom(maiores)];
}

console.log(quickSortRandom([5, 3, 8, 1, 2]));