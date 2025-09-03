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



// Multiselect
const multiselectEl = document.querySelector('.multiselect-wrap');
const multiselectText = document.querySelector('.multiselect-text');
const multiselectItemsWrap = document.querySelector('.multiselect-items-wrap');
const multiselectOptions = Array.from(multiselectItemsWrap.children);
let isOpen = false;
const selectedItems = [];

function openMultiselect() {
    isOpen = true;
    multiselectItemsWrap.style.height = '200px';
    setTimeout(() => { multiselectItemsWrap.scrollIntoView({ behavior: 'smooth' }); }, 200);
}

function closeMultiselect(event) {
    if (event.target.classList.contains('multiselect-item')) return;
    isOpen = false;
    multiselectItemsWrap.style.height = '0px';
}

function toggleSelectedItem(event) {
    const item = event.target;
    if (!item.classList.contains('multiselect-item')) return;
    const itemValue = item.dataset.value;
    console.log(itemValue);
    if (selectedItems.includes(itemValue)) {
        selectedItems.splice(selectedItems.indexOf(itemValue), 1);
        item.classList.remove('multiselect-item-selected');
    } else {
        selectedItems.push(itemValue);
        item.classList.add('multiselect-item-selected');
    }
    multiselectText.textContent = selectedItems.length ? `${selectedItems.length} selected` : 'Choose options';
}

multiselectEl?.addEventListener('click', (event) => {
    if (!isOpen) { openMultiselect(); }
    else { closeMultiselect(event); }
});

multiselectItemsWrap.addEventListener('click', (event) => {
    toggleSelectedItem(event);
});
