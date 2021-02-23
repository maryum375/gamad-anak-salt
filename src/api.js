import axios from 'axios';

const checkLordName = (lordName, callback) => {
  axios.post('https://gamad-anak-salt.herokuapp.com/check', { lordName })
    .then(function (response) {
      console.log(response);
      callback(response)
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default checkLordName