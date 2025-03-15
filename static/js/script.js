document.querySelectorAll('.accordion__header img').forEach(icon => {
    icon.addEventListener('click', () => {
        const accordionBody = icon.parentElement.nextElementSibling;
        const isOpen = accordionBody.style.display === 'block';

        if (isOpen) {
            accordionBody.style.display = 'none';
            icon.src = './assets/images/icon-plus.svg';
        } else {
            document.querySelectorAll('.accordion__body').forEach(body => {
                body.style.display = 'none';
            });
            document.querySelectorAll('.accordion__header img').forEach(img => {
                img.src = './assets/images/icon-plus.svg';
            });
            accordionBody.style.display = 'block';
            icon.src = './assets/images/icon-minus.svg';
        }
    });
});
