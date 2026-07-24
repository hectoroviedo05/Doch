document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('solicitudForm');
    const status = document.getElementById('formStatus');
    const btnSubmit = document.getElementById('btnSubmit');

    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        btnSubmit.disabled = true;
        btnSubmit.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Enviando...';
        status.className = 'form-status';
        status.textContent = '';

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                status.className = 'form-status success';
                status.textContent = '¡Solicitud enviada con éxito! Te contactaremos a la brevedad.';
                form.reset();
            } else {
                status.className = 'form-status error';
                status.textContent = 'Ocurrió un problema al enviar la solicitud. Intenta de nuevo.';
            }
        } catch (error) {
            status.className = 'form-status error';
            status.textContent = 'Error de conexión. Inténtalo más tarde.';
        } finally {
            btnSubmit.disabled = false;
            btnSubmit.innerHTML = '<i class="fa-solid fa-paper-plane"></i> ENVIAR SOLICITUD';
        }
    });
});