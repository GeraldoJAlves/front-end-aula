let listFilesUpload = [];
let indexCurrentImage = 0;

const uploadFile = () => {
  const inputUpload = document.getElementsByName('file-upload');
  inputUpload[0].click();
}

const listFiles = () => {
  const inputUpload = document.getElementsByName('file-upload');
  const files = inputUpload[0].files;

  if (files.length > 0) {
    listFilesUpload = [];
    document.querySelector('body > main').classList.add('hidden-element');
    document.querySelector('body > div').classList.remove('hidden-element');
    
    let index = 0;
    for(let file of files) {
      const item = makeItemFile(file);
      listFilesUpload.push(item);
      addThumbnail(index++, item);
    }
    setImagePreview(0);
  }
}

const addThumbnail = (index, {src, name}) => {
  const thumbnails = document.querySelector('.thumbnails');
  thumbnails.innerHTML+= `
    <li>
      <img onclick="setImagePreview(${index})" src="${src}" alt="${name}" />
    </li>
  `;
}

const makeItemFile = (file) => {
  const src = URL.createObjectURL(file);
  return {
    src,
    name: file.name
  }
}

const setImagePreview = (indexFile) => {
  indexCurrentImage = indexFile;
  const {src, name} = listFilesUpload[indexFile];
  document.querySelector('.preview-file img').setAttribute('src', src);
  document.querySelector('.preview-file span').innerText = name;
  document.querySelector('.base-menu.footer span').innerText =
    `${indexCurrentImage + 1} / ${listFilesUpload.length}`;
  const activeThumbnail = document.querySelector('.thumbnails li .active');
  if (activeThumbnail) {
    activeThumbnail.classList.remove('active');
  }
  const imgThumbnail = document.querySelector(`.thumbnails li:nth-child(${indexCurrentImage + 1}) img`);
  imgThumbnail.classList.add('active');

  const fastBackward = document.querySelector('.base-menu i.fa-fast-backward');
  const stepBackward = document.querySelector('.base-menu i.fa-step-backward');
  const stepForward = document.querySelector('.base-menu i.fa-step-forward');
  const fastForward = document.querySelector('.base-menu i.fa-fast-forward');

  if (indexCurrentImage === 0) {
    fastBackward.classList.add('disable-action');
    stepBackward.classList.add('disable-action');
  } else {
    fastBackward.classList.remove('disable-action');
    stepBackward.classList.remove('disable-action');
  }

  if (indexCurrentImage === (listFilesUpload.length - 1) ) {
    stepForward.classList.add('disable-action');
    fastForward.classList.add('disable-action');
  } else {
    stepForward.classList.remove('disable-action');
    fastForward.classList.remove('disable-action');
  }
}
