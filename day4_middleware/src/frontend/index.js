import axios from 'axios';

const fileSelector = document.getElementById('file-selector');
fileSelector.addEventListener('change', (event) => {
  const fileList = event.target.files;
  console.log(fileList);
});

document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();

  const inputImage = document.getElementById('');

  const data = new FormData();

  data.append('image', inputImage);

  axios.post('http://localhost:8080/single', data, {
     headers:{"content-type":  'multipart/form-data'}
  });
});
