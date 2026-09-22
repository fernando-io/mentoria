const history = [
 { version: 1,  tests: "success" },
 { version: 2,  tests: "success" },
 { version: 3,  tests: "success" },
 { version: 4,  tests: "success" },
 { version: 5,  tests: "success" },
 { version: 6,  tests: "success" },
 { version: 7,  tests: "success" },
 { version: 8,  tests: "success" },
 { version: 9,  tests: "success" },
 { version: 10, tests: "success" },
 { version: 11, tests: "success" },
 { version: 12, tests: "success" },
 { version: 13, tests: "success" },
 { version: 14, tests: "failed" },
 { version: 15, tests: "failed" },
 { version: 16, tests: "failed" },
 { version: 17, tests: "failed" },
 { version: 18, tests: "failed" },
 { version: 19, tests: "failed" },
 { version: 20, tests: "failed" } ]

function bugTracker(versoes) {
  let meio = Math.floor(versoes.length / 2);
  let loops = 0;
  let array = [...versoes];

  while (loops < 10) {
    if (array[meio].tests === "failed" && array[meio - 1].tests === "success") {
      console.log(loops)
      return array[meio].version;
    } 
    
    if (array[meio].tests === "success") {
      array = array.slice(meio, array.length)
      meio = Math.floor(array.length / 2);
      console.log(array[meio].version, "direita");
      loops++;
    } else {
      array = array.slice(0, meio)
      meio = Math.floor(array.length / 2);
      console.log(array[meio].version, "esquerda");
      loops++;
    }
  }
}

console.log(bugTracker(history));


// function bugTracker(versoes) {
//   for (i = 0; i < versoes.length - 1; i++) {
//     if (versoes[i].tests === "failed") {
//       return versoes[i].version
//     }
//   }
// }