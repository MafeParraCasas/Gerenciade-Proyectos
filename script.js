document.addEventListener('DOMContentLoaded', function() {
    const coll = document.querySelectorAll('.collapsible');
    coll.forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
});



