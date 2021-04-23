const uploadFile = () => {
  const inputUpload = document.getElementsByName('file-upload');
  inputUpload[0].click();
}

const listFiles = () => {
  const inputUpload = document.getElementsByName('file-upload');
  const files = inputUpload[0].files;

  if (files.length > 0) {
    console.log(files);
    document.querySelector('body > main').classList.add('hidden-element');
    document.querySelector('body > div').classList.remove('hidden-element');

    for(let file of files) {
      console.log(file);
      makeList(file);
    }

    // for(let x=0; x < files.length; x++) {
    //   console.log(files[x]);
    //   makeList(files[x]);
    // }
  }
}

const makeList = (file) => {
  // <li></li>
  const li = document.createElement('li');
  li.innerText = file.name;
  const img = document.createElement('img');

  //object url
  const url = URL.createObjectURL(file);
  img.src = url;
  li.appendChild(img);
  document.querySelector('.list-files').appendChild(li);

  // leitura como base64
  // const fileReader = new FileReader();
  // fileReader.addEventListener('load', () => {
  //   img.src = fileReader.result;
  //   li.appendChild(img);
  //   document.querySelector('.list-files').appendChild(li);
  // });

  // fileReader.readAsDataURL(file);
}