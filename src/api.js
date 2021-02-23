import axios from 'axios';

const checkLordName = (lordName, callback) => {
  axios.post('http://localhost:8080/check', { lordName })
    .then(function (response) {
      console.log(response);
      callback(response)
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default checkLordName