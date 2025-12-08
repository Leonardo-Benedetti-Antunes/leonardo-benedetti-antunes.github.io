// js/boot.js - Lógica da tela de boot

// Tempo de duração do boot em milissegundos
const BOOT_DURATION = 3000;

// Inicia o processo de boot quando a página carrega
function initBoot() {
    setTimeout(() => {
        hideBoot();
        showLogin();
    }, BOOT_DURATION);
}

// Esconde a tela de boot
function hideBoot() {
    const bootScreen = document.getElementById('boot-screen');
    bootScreen.style.display = 'none';
}

// Mostra a tela de login
function showLogin() {
    const loginScreen = document.getElementById('login-screen');
    loginScreen.style.display = 'flex';
}

// Executa o boot quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBoot);
} else {
    initBoot();
}