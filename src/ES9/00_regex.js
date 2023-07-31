const regex = /(\d{4})-(\d{2})-(\d{2})/;
const matchers = regex.exec("2023-01-01");
console.log(matchers);

// [
//     '2023-01-01',
//     '2023',
//     '01',
//     '01',
//     index: 0,
//     input: '2023-01-01',
//     groups: undefined
//   ]