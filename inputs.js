// File Input
const fileInputEl = document.querySelector('.input-file');
const fileInputText = document.querySelector('.file-input-text');



fileInputEl?.addEventListener('change', (event) => {
    if (!event?.target?.files?.length) {
        fileInputText.textContent = 'Choose a file...';
        fileInputText.style.color = 'var(--color-dark)';
        fileInputText.style.left = '0.5rem';
        return;
    }
    else {
        const file = event?.target?.files[0];
        fileInputText.textContent = file.name;
        fileInputText.style.color = 'var(--color-mid)';
        fileInputText.style.left = '1rem';
    }
});



// Multiple files input
const multipleFilesInputEl = document.querySelector('.multiple-files-input');
const multipleFilesInputText = document.querySelector('.multiple-files-input-text');

multipleFilesInputEl?.addEventListener('change', (event) => {
    if (!event?.target?.files?.length) {
        multipleFilesInputText.textContent = 'Choose files...';
        multipleFilesInputEl.value = '';
    }
    else {
        const maxFiles = multipleFilesInputEl.getAttribute('max');
        const files = Array.from(event?.target?.files).slice(0, maxFiles ? parseInt(maxFiles) : undefined);
        multipleFilesInputText.textContent = `${files.length} file(s) selected`;
        console.log(files.length);
    }
});




// Image Input
const imageInputEl = document.querySelector('.image-input');
const imageInputText = document.querySelector('.image-input-text');

imageInputEl?.addEventListener('change', (event) => {
    if (!event?.target?.files?.length) {
        imageInputText.textContent = 'Choose an image';
    }
    else {
        const file = event?.target?.files[0];
        imageInputText.textContent = file.name;
    }
});



// Multiple Images Input
const multipleImagesInputEl = document.querySelector('.multiple-images-input');
const multipleImagesInputText = document.querySelector('.multiple-images-input-text');

multipleImagesInputEl?.addEventListener('change', (event) => {
    if (!event?.target?.files?.length) {
        multipleImagesInputText.textContent = 'Choose images';
        multipleImagesInputEl.value = '';
    }
    else {
        const maxFiles = multipleImagesInputEl.getAttribute('max');
        const files = Array.from(event?.target?.files).slice(0, maxFiles ? parseInt(maxFiles) : undefined);
        multipleImagesInputText.textContent = `${files.length} file(s) selected`;
        console.log(files.length);
    }
});
