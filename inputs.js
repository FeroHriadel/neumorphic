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
const triggerHeight = 50;
const optionHeight = 50;
const optionsMaxHeight = 200;
const gap = 5;
const multiselectEl = document.querySelector('.multiselect-wrap');
const multiselectText = document.querySelector('.multiselect-text');
const multiselectItemsWrap = document.querySelector('.multiselect-items-wrap');
const multiselectOptions = Array.from(multiselectItemsWrap.children);
const multiselectLabelEl = document.querySelector('.multiselect-label');
const optionsHeight = multiselectOptions.length * optionHeight;
const selectedItems = [];
let isOpen = false;

function canOpenDownwards() {
    const rect = multiselectEl.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    return spaceBelow > Math.min(optionsHeight + gap, optionsMaxHeight + gap);
}

function showOptionsUp() {
    multiselectItemsWrap.style.transition = 'opacity 0.2s ease';
    multiselectItemsWrap.style.top = `-${Math.min(optionsHeight, optionsMaxHeight) + gap}px`;
    multiselectItemsWrap.style.height = `${Math.min(optionsHeight, optionsMaxHeight)}px`;
    multiselectItemsWrap.style.opacity = '1';
}

function showOptionsDown() {
    multiselectItemsWrap.style.top = `${triggerHeight + gap}px`;
    multiselectItemsWrap.style.transition = 'opacity 0.2s ease, height 0.2s ease';
    multiselectItemsWrap.style.height = `${Math.min(optionsHeight, optionsMaxHeight)}px`;
    multiselectItemsWrap.style.opacity = '1';
    setTimeout(() => { multiselectItemsWrap.scrollIntoView({ behavior: 'smooth' }); }, 100);
}

function openMultiselect() {
    if (multiselectEl?.classList.contains('disabled')) return;
    isOpen = true;
    multiselectEl?.setAttribute('aria-expanded', 'true');
    const enoughSpace = canOpenDownwards();
    if (enoughSpace) showOptionsDown()
    else showOptionsUp();
}

function closeMultiselect(event) {
    if (event.target.classList.contains('multiselect-item')) return;
    isOpen = false;
    multiselectItemsWrap.style.height = '0px';
    multiselectItemsWrap.style.opacity = '0';
    multiselectEl?.setAttribute('aria-expanded', 'false');
}

function toggleSelectedItem(event) {
    const item = event.target;
    if (!item.classList.contains('multiselect-item')) return;
    const itemValue = item.dataset.value;
    if (selectedItems.includes(itemValue)) {
        selectedItems.splice(selectedItems.indexOf(itemValue), 1);
        item.classList.remove('multiselect-item-selected');
        item.setAttribute('aria-selected', 'false');
        item.querySelector('.multiselect-check-icon').style.opacity = '0';
    } else {
        selectedItems.push(itemValue);
        item.classList.add('multiselect-item-selected');
        item.setAttribute('aria-selected', 'true');
        item.querySelector('.multiselect-check-icon').style.opacity = '1';
    }
    multiselectText.textContent = selectedItems.length ? `${selectedItems.length} selected` : 'Choose options';
}

multiselectEl?.addEventListener('click', (event) => {
    if (!isOpen) { openMultiselect(); }
    else { closeMultiselect(event); }
});

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('multiselect-label')) return;
    if (!multiselectEl.contains(event.target)) {
        closeMultiselect(event);
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeMultiselect(event);
    }
});

multiselectItemsWrap.addEventListener('click', (event) => {
    toggleSelectedItem(event);
});

multiselectLabelEl?.addEventListener('click', (event) => {
    if (!isOpen) openMultiselect()
    else closeMultiselect(event);
})
