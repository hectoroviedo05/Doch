document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('open-menu-btn');
    const closeBtn = document.getElementById('close-menu-btn');
    const navPanel = document.getElementById('mobile-nav-panel');
    const backdrop = document.getElementById('menu-backdrop');
    const mobileLinks = document.querySelectorAll('.mobile-modal-links a');

    const openMenu = () => {
        if (navPanel && backdrop) {
            navPanel.classList.add('active');
            backdrop.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };

    const closeMenu = () => {
        if (navPanel && backdrop) {
            navPanel.classList.remove('active');
            backdrop.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    openBtn?.addEventListener('click', openMenu);
    closeBtn?.addEventListener('click', closeMenu);
    backdrop?.addEventListener('click', closeMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navPanel?.classList.contains('active')) {
            closeMenu();
        }
    });
});


/////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', () => {
    const openEvalBtn = document.getElementById('open-eval-modal');
    const openEvalBtnMobile = document.getElementById('open-eval-modal-mobile');
    const openEvalBtnBody = document.getElementById('open-eval-modal-body'); // Nuevo botón
    const closeEvalBtn = document.getElementById('close-eval-modal');
    const evalModal = document.getElementById('eval-modal');
    const evalBackdrop = document.getElementById('eval-modal-backdrop');

    function openModal() {
        if (evalModal && evalBackdrop) {
            evalModal.classList.add('active');
            evalBackdrop.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeModal() {
        if (evalModal && evalBackdrop) {
            evalModal.classList.remove('active');
            evalBackdrop.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    if (openEvalBtn) openEvalBtn.addEventListener('click', openModal);
    if (openEvalBtnBody) openEvalBtnBody.addEventListener('click', openModal);
    if (openEvalBtnMobile) openEvalBtnMobile.addEventListener('click', () => {
        const mobileNavPanel = document.getElementById('mobile-nav-panel');
        const menuBackdrop = document.getElementById('menu-backdrop');
        if (mobileNavPanel) mobileNavPanel.classList.remove('active');
        if (menuBackdrop) menuBackdrop.classList.remove('active');

        openModal();
    });

    if (closeEvalBtn) closeEvalBtn.addEventListener('click', closeModal);
    if (evalBackdrop) evalBackdrop.addEventListener('click', closeModal);
});

