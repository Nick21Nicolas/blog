document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Obrigado por se inscrever!');
    this.reset();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});