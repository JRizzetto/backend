// function factorial(number) {
//   let result = 1;
//   for (let i = 1; i <= number; i++) {
//     result *= i;
//   }
//   return result;
// }

// console.log(factorial(5));
// console.log(factorial(3));
// console.log(factorial(6));
// console.log(factorial(8));

// IIFE
// Immediately invoked function expression
// ((name) => {
//   console.log("Seja bem vindo(a)", name);
// })("Jafferson");

// function createTag(name, prefix, suffix) {
//   if (prefix && suffix) {
//     return `${prefix} ${name} ${suffix}`;
//   }
//   if (prefix) {
//     return `${prefix} ${name}`;
//   }
//   return name;
// }

// const tag = createTag("Jefferson", "[Desenvolvedor", "Dev");
// console.log(tag);

// function pow(number, exponent = 2) {
//   return number ** exponent;
// }

// console.log(pow(5, 4));

function greet(name, log = false) {
  const text = `Seja bem vindo ${name}`;
  if (log) {
    console.log(text);
    return;
  }
  return text;
}

const text = greet("Jefferson");
console.log(text.toUpperCase());
