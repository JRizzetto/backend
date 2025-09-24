// (Expressão) ? (se verdadeiro) : (se false)

// const number = 4;
// console.log(number % 2 === 0 ? "par" : "Impar");

// const age = 22;
// console.log(age > 18 ? "Maior" : "Menor");

// const learnedJs = false;
// const withRincko = true;

// console.log(
//   learnedJs && withRincko
//     ? "Aprendeu com o Rincko"
//     : learnedJs
//     ? "Mas não aprendeu com Rincko"
//     : "Não aprendeu Javascript"
// );

// const bank = 300;
// const transferValue = 20;

// console.log(
//   bank > transferValue
//     ? "A transferência pode ser feita"
//     : "A transferência NÃO pode ser feita"
// );

// const isAdult = true;
// console.log(`Cristiano ${isAdult ? "Não" : ""} é criança`);

const hours = 19;

console.log(
  `Está de ${
    hours > 0 && hours < 6
      ? "madrugada"
      : hours > 6 && hours < 12
      ? "manhã"
      : hours > 12 && hours < 18
      ? "tarde"
      : "noite"
  }`
);
