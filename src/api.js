import axios from 'axios';

const checkLordName = (lordName, callback) => {
  // axios.post('https://gamad-anak-salt.herokuapp.com/check', { lordName })
  axios.post('http://localhost:8080/check', { lordName })
    .then(function (response) {
      console.log(response);
      callback(response)
    })
    .catch(function (error) {
      console.log(error);
    });
}

const decryptMessage = (encrypted, key, callback) => {
  // axios.post('https://gamad-anak-salt.herokuapp.com/decrypt', { lordName })
  axios.post('http://localhost:8080/decrypt', { encrypted, key })
    .then(function (response) {
      console.log(response);
      callback(response)
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default {checkLordName, decryptMessage}