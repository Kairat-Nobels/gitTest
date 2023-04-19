const postMockTest = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response.json();
};
// postMockTest('https://643fd4a0b9e6d064befff0aa.mockapi.io/items/items', { test: 1 }).then((data) =>
//   console.log(data),
// );

const getMockTest = async (url = '') => {
  const response = await fetch(url);
  return response.json();
};
// getMockTest('https://643fd4a0b9e6d064befff0aa.mockapi.io/items/items').then((data) =>
//   console.log(data),
// );

const deleteMockTest = async (url = '', id) => {
  const response = await fetch(url, {
    method: 'DELETE',
  });
  return response.json();
};
// deleteMockTest(`https://643fd4a0b9e6d064befff0aa.mockapi.io/items/items/${1}`).then((data) => data);

const patchMockTest = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response.json();
};
patchMockTest(`https://643fd4a0b9e6d064befff0aa.mockapi.io/items/items/${2}`, {
  testPacth: 1,
}).then((data) => console.log(data));
