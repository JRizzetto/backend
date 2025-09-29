function requestCar(drivers) {
  return new Promise((resolve, reject) => {
    if (drivers > 0) {
      return resolve("Seu motorista está a caminho!");
    }
    return reject("Não há motoristas disponíveis");
  });
}

// function main() {
//   let drivers = 2;

//   const request = requestCar(drivers);

//   request
//     .then((text) => {
//       console.log(" concluída!", text);
//     })
//     .catch((error) => {
//       console.log(error);
//     })
//     .finally(() => {
//       console.log("Fim da promessa!");
//     });
// }
// main();

async function main() {
  let drivers = 2;

  const request = await requestCar(drivers);

  console.log(request);
}
main();
