const checkBox = document.querySelector('#billing-checkbox');
const disabledInputs = document.querySelectorAll('#billings input[type="text"]');


checkBox.addEventListener('change', () => {
    disabledInputs.forEach(items => {
        items.disabled = !items.disabled;
    }); 
})