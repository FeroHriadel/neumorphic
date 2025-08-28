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
