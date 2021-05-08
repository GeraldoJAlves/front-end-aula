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

    let items = '';
    for(let file of files) {
      items += makeItemFile(file);
    }
    
    document.querySelector('.list-files').innerHTML = items;
  }
}

const makeItemFile = (file) => {
  const url = URL.createObjectURL(file);
  return `
    <li>
      <div>
        <i class="fas fa-chevron-down"></i>
        <span>${file.name}</span>
        <i class="fas fa-trash"></i>
      </div>
      <img src="${url}" />
    </li>
  `;
}