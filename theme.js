






const fields = document.querySelectorAll('#contactForm input, #contactForm textarea');

fields.forEach(field => {
    field.addEventListener('focus', function () {
        this.dataset.placeholder = this.placeholder;
        this.placeholder = '';
    });

    field.addEventListener('blur', function () {
        if (this.value === '') {
            this.placeholder = this.dataset.placeholder;
        }
    });
});
