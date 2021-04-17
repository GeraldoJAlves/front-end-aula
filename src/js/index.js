const uploadFile = () => {
  const inputUpload = document.getElementsByName('file-upload');
  inputUpload[0].click();
}

const listFiles = () => {
  const inputUpload = document.getElementsByName('file-upload');
  const files = inputUpload[0].files;

  if (files.length > 0) {
    document.querySelector('body > main').classList.add('hidden-element');
    document.querySelector('body > div').classList.remove('hidden-element');
  }
}
