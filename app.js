// const mockTest = async (url = '', data = {}) => {
//   const res = await fetch(url, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(data),
//   });
//   return res.json();
// };
// mockTest('https://643fd4a0b9e6d064befff0aa.mockapi.io/items/items', { test: 1 }).then((data) =>
//   console.log(data),
// );

const getMockTest = async (url = '') => {
  const response = await fetch(url);
  return response.json();
};
getMockTest('https://643fd4a0b9e6d064befff0aa.mockapi.io/items/items').then((data) =>
  console.log(data),
);
