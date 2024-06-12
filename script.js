document.addEventListener('DOMContentLoaded', function() {
    
    const themeButton = document.querySelector('.theme');



    themeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });
});
