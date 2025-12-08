// js/taskbar.js - Lógica da barra de tarefas e menu iniciar

// Variáveis de controle
let clockInterval = null;

// Inicializa o relógio quando o desktop é mostrado
function initClock() {
    updateClock();
    clockInterval = setInterval(updateClock, 1000);
}

// Atualiza o relógio na barra de tarefas
function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    clock.textContent = `${hours}:${minutes}`;
}

// Para o relógio (útil ao fazer logout)
function stopClock() {
    if (clockInterval) {
        clearInterval(clockInterval);
        clockInterval = null;
    }
}

// Toggle do menu iniciar
function toggleStartMenu() {
    const menu = document.getElementById('start-menu');
    const isVisible = menu.style.display === 'block';
    menu.style.display = isVisible ? 'none' : 'block';
}

// Esconde o menu iniciar
function hideStartMenu() {
    const menu = document.getElementById('start-menu');
    menu.style.display = 'none';
}

// Fecha o menu iniciar ao clicar fora dele
document.addEventListener('click', (e) => {
    const menu = document.getElementById('start-menu');
    const startBtn = document.querySelector('.start-button');

    // Se o menu está visível e o clique não foi no menu nem no botão
    if (menu && startBtn &&
        !menu.contains(e.target) &&
        !startBtn.contains(e.target)) {
        hideStartMenu();
    }
});

// Sobrescreve a função showDesktop para iniciar o relógio
const originalShowDesktop = showDesktop;
showDesktop = function () {
    originalShowDesktop();
    initClock();
};

// Sobrescreve a função logout para parar o relógio
const originalLogout = logout;
logout = function () {
    stopClock();
    originalLogout();
};