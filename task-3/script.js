const password = document.getElementById('password');
const passwordStrength = document.getElementById('password-strength');

password.addEventListener('input', () => {
    const strength = checkPasswordStrength(password.value);
    passwordStrength.textContent = `Password Strength: ${strength}`;
});

function checkPasswordStrength(password) {
    const strength = {
        weak: 0,
        medium: 1,
        strong: 2
    };

    if (password.length < 5) {
        return 'Weak';
    } else if (password.length < 8) {
        return 'Medium';
    } else {
        return 'Strong';
    }
}
