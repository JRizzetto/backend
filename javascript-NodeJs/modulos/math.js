// function sum(a, b) {
//   return a + b;
// }

// function sub(a, b) {
//   return a - b;
// }

// // Exportação usando CommonJS
// module.exports = { sum, sub };

// module.exports = {
//   sum(a, b) {
//     return a + b;
//   },
//   sub(a, b) {
//     return a - b;
//   },
// };

function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

export default { sum, sub };
