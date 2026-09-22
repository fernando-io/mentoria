// função receber array de n crescentes
// numero atual é o anterior + 1
// em algum momento a sequência não é cumprida e pula o número
// objetivo é encontrar o número que foi pulado

function numeros(crescentes) {
  for (let i = 0; i < crescentes.length; i++) {
    if (crescentes[i] + 1 !== crescentes[i + 1]) {
      console.log(`${crescentes[i] + 1} foi pulado!`)
      return
    };
  }
}

numeros([1, 2, 3, 5]);