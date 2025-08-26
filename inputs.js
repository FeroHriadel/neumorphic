const fileInputEl = document.querySelector('.input-file');
const textEl = document.querySelector('.file-input-text');



fileInputEl?.addEventListener('change', (event) => {
    if (!event?.target?.files.length) {
        textEl.textContent = 'Choose a file...';
        textEl.style.color = 'var(--color-dark)';
        textEl.style.left = '0.5rem';
        return;
    }
    else {
        const file = event?.target?.files[0];
        textEl.textContent = file.name;
        textEl.style.color = 'var(--color-mid)';
        textEl.style.left = '1rem';
    }

});