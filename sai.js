// index.js

const axios = require('axios'); // Example dependency

function greet(name) {
  console.log(`Hello, ${name}!`);
}

async function fetchData() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    console.log('Fetched data:', response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

greet('John');
fetchData();
