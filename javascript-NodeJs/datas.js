// const date = new Date();
// console.log(date);

// const date1 = new Date("2024-10-20");
// console.log(date1);

// const date2 = new Date(2024, 9, 20);
// console.log(date2);

// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getTime());

// const past = new Date(1759317457289);

// console.log(date);
// console.log(past);

// const date = new Date();

// date.setHours(date.getHours() + 5);
// console.log(date.toString());

const timer = setInterval(() => {
  const date = new Date();
  console.log(date.getSeconds());
  if (date.getSeconds() > 30) clearInterval(timer);
}, 500);
