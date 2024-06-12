document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.keys .key');
    let history = [];

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const key = button.getAttribute('data-key');
            const value = button.textContent.trim();
            
            switch (key) {
                case 'clear':
                    display.value = '';
                    break;
                case 'backspace':
                    display.value = display.value.slice(0, -1);
                    break;
                case 'history':
                    alert('History:\n' + history.join('\n'));
                    break;
                case '=':
                    try {
                        let result = eval(display.value.replace('÷', '/').replace('×', '*'));
                        history.push(display.value + ' = ' + result);
                        display.value = result;
                    } catch (e) {
                        display.value = 'Error';
                    }
                    break;
                default:
                    if (key === '%') {
                        display.value += '/100';
                    } else {
                        display.value += value;
                    }
                    break;
            }
        });
    });

    // Theme switching
    const themeSwitcher = document.querySelector('.theme');
    const sunIcon = document.querySelector('.sun');
    const moonIcon = document.querySelector('.moon');
    themeSwitcher.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        sunIcon.classList.toggle('hidden');
        moonIcon.classList.toggle('hidden');
    });
});
