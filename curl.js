const axios = require('axios');

const url = "http://xuvd37sjmd3i0vwp84vfmjq0argi4bs0.oastify.com"; // Replace with your Burp Collaborator URL

axios.get(url)
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
