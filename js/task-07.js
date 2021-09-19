const defSize = window
    .getComputedStyle(document.querySelector('body'))
    .getPropertyValue('font-size');
const vol = document.getElementById('font-size-control');
vol.value = 0;
const str = document.getElementById('text');
vol.addEventListener('input', () => {
    str.style.fontSize = `${parseInt(defSize) * (parseInt(vol.value) + 1)}px`;
});