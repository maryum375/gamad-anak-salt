import axios from 'axios';

axios.get('https://localhost:8080/check')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });