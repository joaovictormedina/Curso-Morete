document.addEventListener('DOMContentLoaded', function () {
    console.log('Curso Morete - Página carregada');

    const form = document.querySelector('form');
    const submitButton = document.querySelector('button[type="submit"]');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const course = document.getElementById('course').value;

        if (name && phone && course) {
            const message = `Olá, gostaria de me inscrever no curso de ${course}! Meu nome é ${name} e meu telefone é ${phone}.`;
            const whatsappUrl = `https://wa.me/5521987570827?text=${encodeURIComponent(message)}`;

            window.location.href = whatsappUrl;
        } else {
            alert('Por favor, preencha todos os campos antes de enviar.');
        }
    });
});
