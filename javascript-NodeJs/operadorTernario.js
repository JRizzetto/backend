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

// const hours = 19;

// console.log(
//   `Está de ${
//     hours > 0 && hours < 6
//       ? "madrugada"
//       : hours > 6 && hours < 12
//       ? "manhã"
//       : hours > 12 && hours < 18
//       ? "tarde"
//       : "noite"
//   }`
// );

/*
Exercício 1 (Nível Fácil): Verificador de Maioridade

Contexto: Você está construindo um sistema simples para um site que verifica se um usuário pode acessar determinado conteúdo com base na idade.

Sua Tarefa:
Escreva uma função chamada verificarMaioridade que recebe uma idade (número) como parâmetro.

A função deve usar um único operador ternário para retornar:

"Acesso permitido" se a idade for maior ou igual a 18.

"Acesso negado" se a idade for menor que 18.

*/

// function verificarMaioridade(idade) {
//   return idade >= 18 ? "Acesso permitido" : "Acesso negado";
// }

// console.log(verificarMaioridade(15));

/*
Exercício 2 (Nível Intermediário).

Contexto: Agora o sistema precisa ser mais específico. Além de verificar a maioridade, ele deve categorizar o usuário.

Sua Tarefa:
Escreva uma função chamada categorizarUsuario que recebe uma idade.

A função deve usar um operador ternário aninhado (um ternário dentro de outro) para retornar:

"Criança" se a idade for menor que 12 anos.

"Adolescente" se a idade for entre 12 e 17 anos (incluindo 12 e 17).

"Adulto" se a idade for 18 anos ou mais.
*/

// function categorizarUsuario(idade) {
//   return idade < 12 ? "criança" : idade <= 17 ? "Adolescente" : "Adulto";
// }
// console.log(categorizarUsuario(10));
// console.log(categorizarUsuario(12));
// console.log(categorizarUsuario(18));

/*
Exercício 3 (Nível Avançado) - agora vamos para algo mais realista que um programador backend encontraria.

Contexto: Você está validando o cadastro de usuários. Precisa verificar múltiplas condições em uma única expressão.

Sua Tarefa:
Escreva uma função validarCadastroRapido que recebe idade (number) e possuiEmailVerificado (boolean).

A função deve retornar:

"Cadastro válido" se a idade for ≥ 18 E possuiEmailVerificado for true

"Verifique seu e-mail" se a idade for ≥ 18 E possuiEmailVerificado for false

"Idade insuficiente" se a idade for < 18

Regra: Use apenas um operador ternário (pode ser aninhado).

Dica: Você precisará usar operadores lógicos (&&, ||) dentro das condições.
*/

// function validarCadastroRapido(idade, IsEmailValid) {
//   return idade >= 18 && IsEmailValid
//     ? IsEmailValid
//       ? "Cadastro válido"
//       : "Verifique seu e-mail"
//     : "Idade insuficiente";
// }
// console.log(validarCadastroRapido(15, false));

/*
Exercício 4 (Desafio Final)
Contexto: Sistema de desconto em um e-commerce. Regras complexas:

Desconto de 20%: para membros premium OU compras acima de R$ 200

Desconto de 10%: para primeira compra E valor acima de R$ 50

Sem desconto: todos os outros casos

Sua Tarefa:
Escreva uma função calcularDesconto que recebe:

ehMembroPremium (boolean)

valorCompra (number)

ehPrimeiraCompra (boolean)

Retorne: a string com o percentual de desconto: "20%", "10%" ou "0%".

Regra: Use apenas um operador ternário (pode ser aninhado).
*/

function calcularDesconto(ehMembroPremium, valorCompra, ehPrimeiraCompra) {
  return ehMembroPremium || valorCompra > 200
    ? "Desconto de 20%"
    : ehPrimeiraCompra && valorCompra > 50
    ? "Desconto de 10%"
    : "Sem desconto";
}
console.log(calcularDesconto(false, 100, false));
