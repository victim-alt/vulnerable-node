const axios = require('axios');

const url = "http://1hjhqbfn9hqmnzjtv8ij9nd4xv3mrhf6.oastify.com"; // Replace with your Burp Collaborator URL

axios.get(url)
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
