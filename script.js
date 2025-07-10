// MODAL CONTROLS
document.querySelectorAll('.purchase-button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.modal').style.display = 'block';
    });
});

document.querySelector('.close-modal').addEventListener('click', () => {
    document.querySelector('.modal').style.display = 'none';
});

// EMAIL VALIDATION
const inputs = document.querySelectorAll('.form-group input');
const confirmButton = document.querySelector('.confirm-button');

inputs.forEach(input => {
    input.addEventListener('input', () => {
        const allFilled = Array.from(inputs).every(input => input.value.trim() !== '');
        confirmButton.disabled = !allFilled;
        if (allFilled) {
            confirmButton.style.cursor = 'pointer';
            confirmButton.style.backgroundColor = '#5a3a2a';
        } else {
            confirmButton.style.cursor = 'not-allowed';
            confirmButton.style.backgroundColor = '#3a0000';
        }
    });
});
