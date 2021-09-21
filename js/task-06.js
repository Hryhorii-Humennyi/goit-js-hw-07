const valInp = document.querySelector('#validation-input');
const funcBlur = () => {
    if (valInp.value.length === parseInt(valInp.dataset.length, 10)) {
        valInp.classList.replace('validation-input', 'valid');
    } else {
        valInp.classList.replace('validation-input', 'invalid')
    }
};
valInp.addEventListener('blur', funcBlur);
